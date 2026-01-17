"use client";

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Mesh } from 'three';
import { useControls } from 'leva';

function Box({ color, scale }: { color: string, scale: number }) {
  const mesh = useRef<Mesh>(null!);

  useFrame((_state, delta) => {
    if (mesh.current) {
      mesh.current.rotation.x += delta * 0.5;
      mesh.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <mesh ref={mesh} scale={scale}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

const FunGui = () => {
  const { color, scale } = useControls({
    color: '#ff6347',
    scale: { value: 0.5, min: 0.2, max: 2, step: 0.1 },
  });

  const boxes = [];
  const gridSize = 5;
  const spacing = 2;

  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      boxes.push(
        <Box
          key={`${i}-${j}`}
          color={color}
          scale={scale}
        />
      );
    }
  }

  return (
    <div style={{ height: '500px', width: '100%' }}>
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <group>
          {boxes.map((box, index) => {
            const i = Math.floor(index / gridSize);
            const j = index % gridSize;
            const x = (i - (gridSize - 1) / 2) * spacing;
            const y = (j - (gridSize - 1) / 2) * spacing;
            return (
              <group key={index} position={[x, y, 0]}>
                {box}
              </group>
            );
          })}
        </group>
      </Canvas>
    </div>
  );
};

export default FunGui;
