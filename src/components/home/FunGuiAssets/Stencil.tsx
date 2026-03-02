import { Suspense, useRef } from 'react'
import { Mask, useMask, PivotControls, Float, RoundedBox } from '@react-three/drei'

export default function Stencil(props: JSX.IntrinsicElements['group']) {
  return (
    <group {...props}>
      <directionalLight position={[1, 2, 1.5]} intensity={0.5} castShadow />
      <hemisphereLight intensity={1.5} groundColor="white" />
      <Suspense fallback={null}>
        <PivotControls scale={1.5} rotation={[0, -Math.PI / 2, 0]}>
          <Frame position={[0, 0, 1]} />
          <Mask id={1} position={[0, 0, 0.95]}>
            <circleGeometry args={[1.5, 64]} />
          </Mask>
        </PivotControls>
        {/* Float needs children */}
        <Float floatIntensity={4} rotationIntensity={2}>
             <Atom invert={false} scale={1.5} />
        </Float>
      </Suspense>
      <Box color="#EAC435" args={[1, 5, 1]} position={[-2, 0, 0]} />
      <Box color="#03CEA4" args={[2, 2, 2]} position={[0, -2, 1]} />
      <Box color="#FB4D3D" args={[2, 2, 2]} position={[2, 0, 0]} />
    </group>
  )
}

function Box({ args = [1, 4, 1], radius = 0.05, color, ...props }: any) {
  const stencil = useMask(1)
  return (
    <RoundedBox args={args as any} radius={radius} {...stencil} {...props}>
      <meshPhongMaterial color={color} />
    </RoundedBox>
  )
}

function Frame(props: any) {
  return (
    <mesh {...props}>
      <ringGeometry args={[1.35, 1.5, 64]} />
      <meshPhongMaterial color="black" />
    </mesh>
  )
}

function Atom(props: any) {
    return (
        <group {...props}>
            <mesh>
                <sphereGeometry args={[1, 32, 32]} />
                <meshStandardMaterial color="hotpink" />
            </mesh>
        </group>
    )
}
