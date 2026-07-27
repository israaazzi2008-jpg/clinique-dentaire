import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ToothSVG } from './Hero';

interface FloatingTooth {
  id: string;
  size: number;
  x: number; // percentage 0 - 100
  y: number; // percentage 0 - 100
  speedY: number;
  speedX: number;
  rotateSpeed: number;
  opacity: number;
  color: string;
  isPopping?: boolean;
}

interface Spark {
  id: string;
  x: number;
  y: number;
  color: string;
  angle: number;
  dist: number;
}

interface FloatingTeethBackgroundProps {
  windSpeed: number; // multiplier for motion
  onPopTooth?: () => void;
  particlesKey: number; // to manually trigger extra waves of flying teeth
}

const FloatingToothItem = React.memo(React.forwardRef<HTMLDivElement, { t: FloatingTooth, onPop?: (e: React.MouseEvent) => void }>(({ t, onPop }, ref) => {
  return (
    <motion.div
      ref={ref}
      className="absolute z-10 select-none cursor-pointer"
      style={{
        transform: `translate3d(${t.x}vw, ${t.y}vh, 0)`,
        width: `${t.size}px`,
        height: `${t.size}px`,
        opacity: t.opacity + 0.12,
        pointerEvents: 'auto'
      }}
      onClick={(e: any) => onPop && onPop(e)}
    >
      <motion.div
        className={`w-full h-full ${t.color}`}
        animate={{ rotate: 360 }}
        transition={{
          rotate: { repeat: Infinity, duration: Math.abs(20 / (t.rotateSpeed || 0.5)), ease: 'linear' },
        }}
      >
        <ToothSVG className="w-full h-full" />
      </motion.div>
    </motion.div>
  );
}));

export default function FloatingTeethBackground({ windSpeed, onPopTooth, particlesKey }: FloatingTeethBackgroundProps) {
  const [teeth, setTeeth] = useState<FloatingTooth[]>([]);
  const [sparks, setSparks] = useState<Spark[]>([]);
  const teethRefs = useRef<(HTMLDivElement | null)[]>([]);
  const teethData = useRef<FloatingTooth[]>([]);

  // Initialize a fleet of floating teeth
  useEffect(() => {
    const initialTeeth: FloatingTooth[] = Array.from({ length: 10 }).map((_, i) => ({
      id: `tooth-${i}-${Math.random()}`,
      size: 20 + Math.random() * 45,
      x: Math.random() * 100,
      y: Math.random() * 100,
      speedY: -0.05 - Math.random() * 0.1,
      speedX: (Math.random() - 0.5) * 0.08,
      rotateSpeed: (Math.random() - 0.5) * 0.5,
      opacity: 0.06 + Math.random() * 0.12,
      color: [
        'text-clinic-200',
        'text-sky-200',
        'text-ruby-200',
        'text-clinic-300',
        'text-ruby-300',
        'text-white'
      ][Math.floor(Math.random() * 6)]
    }));
    teethData.current = initialTeeth;
    setTeeth(initialTeeth);
    teethRefs.current = new Array(initialTeeth.length).fill(null);
  }, []);

  // Spawn an additional storm of flying teeth whenever particlesKey changes
  useEffect(() => {
    if (particlesKey === 0) return;

    const newWave: FloatingTooth[] = Array.from({ length: 8 }).map((_, i) => ({
      id: `storm-tooth-${Date.now()}-${i}-${Math.random()}`,
      size: 15 + Math.random() * 35,
      x: Math.random() * 100,
      y: 110, // spawn off screen at bottom
      speedY: -0.4 - Math.random() * 0.5, // fast rising
      speedX: (Math.random() - 0.5) * 0.6,
      rotateSpeed: (Math.random() - 0.5) * 4,
      opacity: 0.15 + Math.random() * 0.15,
      color: [
        'text-clinic-400',
        'text-ruby-300',
        'text-ruby-400',
        'text-sky-400',
        'text-white'
      ][Math.floor(Math.random() * 5)]
    }));

    teethData.current = [...teethData.current, ...newWave];
    setTeeth((prev) => [...prev, ...newWave]);
    teethRefs.current = [...teethRefs.current, ...new Array(newWave.length).fill(null)];
  }, [particlesKey]);

  // Frame loop for floating movement (throttled to ~30 FPS for high performance)
  useEffect(() => {
    let animationFrameId: number;
    let lastTime = performance.now();
    const interval = 1000 / 30; // 30 FPS

    const updatePhysics = (now: number) => {
      const elapsed = now - lastTime;
      if (elapsed >= interval) {
        lastTime = now - (elapsed % interval);
        
        let shouldUpdateState = false;
        
        teethData.current = teethData.current.filter((t, index) => {
          const speedMultiplier = elapsed / 33.3; // normalize speed to ~30fps
          t.y += t.speedY * windSpeed * speedMultiplier;
          t.x += t.speedX * windSpeed * speedMultiplier;

          // Wrap around bottom if goes too far up
          if (t.y < -15) {
            t.y = 115;
            t.x = Math.random() * 100;
          }
          if (t.x < -15) t.x = 115;
          if (t.x > 115) t.x = -15;

          // Remove fast storm teeth that went off the top completely
          if (t.id.startsWith('storm-') && t.y < -10) {
            shouldUpdateState = true;
            return false;
          }

          // Update DOM directly! No React state updates
          const el = teethRefs.current[index];
          if (el) {
            el.style.transform = `translate3d(${t.x}vw, ${t.y}vh, 0)`;
          }

          return true;
        });

        if (shouldUpdateState) {
          setTeeth([...teethData.current]);
          teethRefs.current = teethRefs.current.slice(0, teethData.current.length);
        }
      }
      animationFrameId = requestAnimationFrame(updatePhysics);
    };

    animationFrameId = requestAnimationFrame(updatePhysics);
    return () => cancelAnimationFrame(animationFrameId);
  }, [windSpeed]);

  const handlePop = (tooth: FloatingTooth, e: React.MouseEvent) => {
    e.stopPropagation();
    
    // Create interactive spark points
    const newSparks: Spark[] = Array.from({ length: 6 }).map((_, i) => ({
      id: `spark-${Date.now()}-${i}-${Math.random()}`,
      x: tooth.x,
      y: tooth.y,
      color: tooth.color,
      angle: Math.random() * Math.PI * 2,
      dist: 30 + Math.random() * 50
    }));
    setSparks((prev) => [...prev, ...newSparks]);

    // Remove the popped tooth
    teethData.current = teethData.current.filter((t) => t.id !== tooth.id);
    setTeeth([...teethData.current]);
    
    if (onPopTooth) onPopTooth();

    // Clean up sparks shortly after
    setTimeout(() => {
      setSparks((prev) => prev.filter((s) => !newSparks.some((ns) => ns.id === s.id)));
    }, 1000);
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Background stars / grid */}
      <div className="absolute inset-0 bg-mesh-grid opacity-30" />

      {/* Sparks rendered dynamically */}
      <AnimatePresence>
        {sparks.map((spark) => {
          return (
            <motion.div
              key={spark.id}
              initial={{ left: `${spark.x}%`, top: `${spark.y}%`, scale: 1.5, opacity: 1 }}
              animate={{
                left: `${spark.x + Math.cos(spark.angle) * (spark.dist / 10)}%`,
                top: `${spark.y + Math.sin(spark.angle) * (spark.dist / 10)}%`,
                scale: 0,
                opacity: 0,
              }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className={`absolute w-3 h-3 ${spark.color} flex items-center justify-center`}
            >
              ✦
            </motion.div>
          );
        })}
      </AnimatePresence>

      {/* Floating teeth */}
      {teeth.map((t, index) => (
        <FloatingToothItem key={t.id} t={t} ref={(el) => (teethRefs.current[index] = el)} onPop={(e) => handlePop(t, e)} />
      ))}
    </div>
  );
}
