import React, { useRef, useState, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Text3D, Center, Preload, Lightformer, Environment, CameraControls, RenderTexture, ContactShadows, MeshTransmissionMaterial } from '@react-three/drei';
import { Physics, RigidBody, CuboidCollider } from '@react-three/rapier';
import { Group, Mesh } from 'three';

// Import sub-scenes
import Turtle from './FunGuiAssets/Turtle';
import Basic from './FunGuiAssets/Basic';
import PingPong from './FunGuiAssets/PingPong';
import Shoe from './FunGuiAssets/Shoe';
import Stencil from './FunGuiAssets/Stencil';
import Rocket from './FunGuiAssets/Rocket';

const FONT_URL = "https://threejs.org/examples/fonts/helvetiker_bold.typeface.json";

function Letter({ char, children, stencilBuffer = false, position, ...props }: any) {
  const main = useRef<Group>(null!)
  const contents = useRef<Group>(null!)
  // const events = useThree((state) => state.events) // unused
  const controls = useThree((state) => state.controls as unknown as { fitToBox: (obj: any, enable: boolean) => void })
  
  useFrame(() => {
    if (contents.current && main.current) {
        contents.current.matrix.copy(main.current.matrixWorld)
    }
  })

  return (
    <RigidBody restitution={0.1} colliders="cuboid" position={position} {...props}>
      <Center ref={main}>
        <Text3D
          bevelEnabled
          onDoubleClick={(e) => {
             e.stopPropagation();
             if (controls) controls.fitToBox(main.current, true);
          }}
          font={FONT_URL}
          smooth={1}
          scale={0.125}
          size={80}
          height={4}
          curveSegments={10}
          bevelThickness={10}
          bevelSize={2}
          bevelOffset={0}
          bevelSegments={5}
        >
          {char}
            <MeshTransmissionMaterial 
                clearcoat={1} 
                samples={3} 
                thickness={40} 
                chromaticAberration={0.25} 
                anisotropy={0} 
                distortion={0} 
                distortionScale={0} 
                temporalDistortion={0}
            >
              <RenderTexture attach="buffer" stencilBuffer={stencilBuffer} width={512} height={512}>
                <color attach="background" args={['#4899c9']} />
                <group ref={contents} matrixAutoUpdate={false}>
                  {children}
                </group>
              </RenderTexture>
            </MeshTransmissionMaterial>
        </Text3D>
      </Center>
    </RigidBody>
  )
}

function Scene() {
    return (
        <>
            <Physics gravity={[0, -60, 0]}>
                <Letter char="<" position={[21, 50, -1]} rotation={[0, 0, 0]}>
                  <Turtle />
                </Letter>
                <Letter char="]" position={[22, 60, -2]} rotation={[4, 5, 6]}>
                  <Shoe scale={5} />
                </Letter>
                <Letter char="/" position={[23, 70, 2]} rotation={[7, 8, 9]}>
                  <Rocket position={[-1, -1, 0]} scale={2} />
                </Letter>
                <Letter char="(" position={[19, 80, 3]} rotation={[10, 11, 12]}>
                  <Basic scale={3} />
                </Letter>
                <Letter char=">" position={[18, 90, 2]} rotation={[13, 14, 15]}>
                  <PingPong />
                </Letter>
                <Letter char="{" position={[17, 100, -3]} rotation={[16, 17, 18]} stencilBuffer>
                  <Stencil scale={2} />
                </Letter>

                <Letter char="&" position={[25, 55, -2]} rotation={[1, 2, 3]}>
                  <Turtle />
                </Letter>
                <Letter char=";" position={[20, 65, -1]} rotation={[5, 6, 7]}>
                  <Shoe scale={5} />
                </Letter>
                <Letter char="~" position={[24, 75, 1]} rotation={[14, 15, 16]}>
                  <PingPong />
                </Letter>

                {/** Invisible walls - Shifted to the right */}
                <CuboidCollider position={[20, -6, 0]} args={[100, 1, 100]} />
                <CuboidCollider position={[20, 0, -30]} args={[50, 100, 1]} />
                <CuboidCollider position={[20, 0, 10]} args={[50, 100, 1]} />
                <CuboidCollider position={[-10, 0, 0]} args={[1, 100, 30]} />
                <CuboidCollider position={[50, 0, 0]} args={[1, 100, 30]} />
            </Physics>
            <Environment files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/aerodynamics_workshop_1k.hdr">
                <group rotation={[-Math.PI / 3, 0, 0]}>
                <Lightformer intensity={4} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={[10, 10, 1]} />
                {[2, 0, 2, 0, 2, 0, 2, 0].map((x, i) => (
                    <Lightformer key={i} form="circle" intensity={4} rotation={[Math.PI / 2, 0, 0]} position={[x, 4, i * 4]} scale={[4, 4, 1]} />
                ))}
                <Lightformer intensity={2} rotation-y={Math.PI / 2} position={[-5, 1, -1]} scale={[20, 1, 1]} />
                <Lightformer intensity={2} rotation-y={-Math.PI / 2} position={[10, 1, 0]} scale={[20, 1, 1]} />
                </group>
            </Environment>
            <ContactShadows smooth={false} scale={100} position={[0, -5.05, 0]} blur={0.5} opacity={0.75} />
            <CameraControls makeDefault dollyToCursor minPolarAngle={0} maxPolarAngle={Math.PI / 2} />
            <Preload all />
        </>
    )
}

const FunGui = () => {
  return (
    <div 
      style={{ 
        height: '100%', 
        width: '100%', 
        // borderRadius: '12px', 
        overflow: 'hidden',
        position: 'relative'
      }}
    >
      <Canvas
        camera={{ position: [0, 20, 60], fov: 35 }}
        dpr={[1.5, 2]}
      >
        <Scene />
      </Canvas>
      
      {/* <div
        style={{
          position: 'absolute',
          top: '20px',
          left: '20px',
          padding: '12px 20px',
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '8px',
          color: 'rgba(255, 255, 255, 0.7)',
          fontSize: '12px',
          pointerEvents: 'none',
        }}
      >
        Double click a letter to zoom
      </div> */}
    </div>
  );
};

export default FunGui;
