import React, { useState, useEffect } from 'react';
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
}

interface FloatingTeethBackgroundProps {
  windSpeed: number; // multiplier for motion
  onPopTooth?: () => void;
  particlesKey: number; // to manually trigger extra waves of flying teeth
}

export default function FloatingTeethBackground({ windSpeed, onPopTooth, particlesKey }: FloatingTeethBackgroundProps) {
  const [teeth, setTeeth] = useState<FloatingTooth[]>([]);
  const [sparks, setSparks] = useState<Spark[]>([]);

  // Initialize a fleet of floating teeth
  useEffect(() => {
    const initialTeeth: FloatingTooth[] = Array.from({ length: 18 }).map((_, i) => ({
      id: `tooth-${i}-${Math.random()}`,
      size: 20 + Math.random() * 45,
      x: Math.random() * 100,
      y: Math.random() * 100,
      speedY: -0.05 - Math.random() * 0.1,
      speedX: (Math.random() - 0.5) * 0.08,
      rotateSpeed: (Math.random() - 0.5) * 0.5,
      opacity: 0.06 + Math.random() * 0.12,
      color: [
        'text-clinic-300',
        'text-sky-300',
        'text-emerald-300',
        'text-cyan-200',
        'text-indigo-200',
        'text-white'
      ][Math.floor(Math.random() * 6)]
    }));
    setTeeth(initialTeeth);
  }, []);

  // Spawn an additional storm of flying teeth whenever particlesKey changes
  useEffect(() => {
    if (particlesKey === 0) return;

    const newWave: FloatingTooth[] = Array.from({ length: 12 }).map((_, i) => ({
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
        'text-yellow-300',
        'text-emerald-400',
        'text-sky-400',
        'text-white'
      ][Math.floor(Math.random() * 5)]
    }));

    setTeeth((prev) => [...prev, ...newWave]);
  }, [particlesKey]);

  // Frame loop for floating movement
  useEffect(() => {
    let animationFrameId: number;
    const updatePhysics = () => {
      setTeeth((prevTeeth) =>
        prevTeeth
          .map((t) => {
            let nextY = t.y + t.speedY * windSpeed;
            let nextX = t.x + t.speedX * windSpeed;

            // Wrap around bottom if goes too far up
            if (nextY < -15) {
              nextY = 115;
              nextX = Math.random() * 100;
            }
            if (nextX < -15) nextX = 115;
            if (nextX > 115) nextX = -15;

            return {
              ...t,
              y: nextY,
              x: nextX,
            };
          })
          // Filter out fast storm teeth that went off the top completely
          .filter((t) => !(t.id.startsWith('storm-') && t.y < -10))
      );
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
      color: tooth.color
    }));
    setSparks((prev) => [...prev, ...newSparks]);

    // Remove the popped tooth
    setTeeth((prev) => prev.filter((t) => t.id !== tooth.id));
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
          const angle = Math.random() * Math.PI * 2;
          const dist = 30 + Math.random() * 50;
          return (
            <motion.div
              key={spark.id}
              initial={{ left: `${spark.x}%`, top: `${spark.y}%`, scale: 1.5, opacity: 1 }}
              animate={{
                left: `${spark.x + Math.cos(angle) * (dist / 10)}%`,
                top: `${spark.y + Math.sin(angle) * (dist / 10)}%`,
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
      {teeth.map((t) => (
        <motion.div
          key={t.id}
          drag
          whileDrag={{ scale: 1.25, cursor: 'grabbing', zIndex: 40 }}
          className="absolute z-10 select-none cursor-grab active:cursor-grabbing"
          style={{
            left: `${t.x}%`,
            top: `${t.y}%`,
            width: `${t.size}px`,
            height: `${t.size}px`,
            opacity: t.opacity + 0.12,
          }}
        >
          <motion.div
            className={`w-full h-full ${t.color} drop-shadow-[0_4px_12px_rgba(255,255,255,0.4)]`}
            animate={{ rotate: 360 }}
            transition={{
              rotate: { repeat: Infinity, duration: Math.abs(20 / (t.rotateSpeed || 0.5)), ease: 'linear' },
            }}
          >
            <ToothSVG className="w-full h-full" />
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}
