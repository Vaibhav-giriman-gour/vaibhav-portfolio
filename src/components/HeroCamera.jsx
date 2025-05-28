import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import React, { useRef, useEffect } from 'react';

const HeroCamera = ({ children, scale, position }) => {
  const groupRef = useRef();

  const isDragging = useRef(false);
  const previousX = useRef(0);
  const targetRotationY = useRef(0);
  const currentRotationY = useRef(0);

  useEffect(() => {
    const handleStart = (e) => {
      isDragging.current = true;
      previousX.current = e.type.includes("touch") ? e.touches[0].clientX : e.clientX;
    };

    const handleMove = (e) => {
      if (!isDragging.current) return;
      const currentX = e.type.includes("touch") ? e.touches[0].clientX : e.clientX;
      const deltaX = currentX - previousX.current;
      previousX.current = currentX;
      targetRotationY.current += deltaX * 0.005;
    };

    const handleEnd = () => {
      isDragging.current = false;
    };

    window.addEventListener('mousedown', handleStart);
    window.addEventListener('mousemove', handleMove);
    window.addEventListener('mouseup', handleEnd);

    window.addEventListener('touchstart', handleStart);
    window.addEventListener('touchmove', handleMove);
    window.addEventListener('touchend', handleEnd);

    return () => {
      window.removeEventListener('mousedown', handleStart);
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseup', handleEnd);
      
      window.removeEventListener('touchstart', handleStart);
      window.removeEventListener('touchmove', handleMove);
      window.removeEventListener('touchend', handleEnd);
    };
  }, []);

  useFrame((_, delta) => {
    if (!groupRef.current) return;

    if (!isDragging.current) {
      targetRotationY.current = THREE.MathUtils.damp(targetRotationY.current, 0, 4, delta);
    }

    currentRotationY.current = THREE.MathUtils.damp(
      currentRotationY.current,
      targetRotationY.current,
      6,
      delta
    );

    groupRef.current.rotation.y = currentRotationY.current;
  });

  return (
    <group ref={groupRef} scale={[scale, scale, scale]} position={position}>
      {children}
    </group>
  );
};

export default HeroCamera;