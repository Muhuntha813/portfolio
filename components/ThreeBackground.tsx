"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Sparkles, Cloud } from "@react-three/drei";
import { useRef } from "react";
import { useTheme } from "next-themes";

function BackgroundContent() {
  const groupRef = useRef<any>();
  const { theme } = useTheme();

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta / 20;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime / 5) / 10;
    }
  });

  const isDark = theme === 'dark';

  return (
    <group ref={groupRef}>
      <Sparkles 
        count={200} 
        scale={12} 
        size={4} 
        speed={0.4} 
        opacity={isDark ? 0.5 : 0.8} 
        color={isDark ? "#00f3ff" : "#00bcd4"} 
      />
      <Sparkles 
        count={100} 
        scale={10} 
        size={2} 
        speed={0.3} 
        opacity={isDark ? 0.5 : 0.8} 
        color={isDark ? "#ff00ff" : "#9c27b0"} 
      />
    </group>
  );
}

export default function ThreeBackground() {
  return (
    <div className="w-full h-full absolute inset-0 z-0 opacity-60">
      <Canvas 
        camera={{ position: [0, 0, 5], fov: 60 }} 
        gl={{ antialias: false, powerPreference: "high-performance" }}
        dpr={[1, 2]} // Optimization for varying pixel ratios
      >
        <BackgroundContent />
      </Canvas>
    </div>
  );
}
