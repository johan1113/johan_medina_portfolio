import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { PivotControls, Environment } from '@react-three/drei'

export default function Shoe(props: JSX.IntrinsicElements['group']) {
  return (
    <group {...props}>
      <ambientLight intensity={0.2} />
      <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
      <PivotControls depthTest={false} anchor={[0, 0, 0]} scale={0.75}>
        <PlaceholderShoe />
      </PivotControls>
      <Environment preset="city" />
    </group>
  )
}

function PlaceholderShoe() {
  const ref = useRef<any>(null!)
  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    ref.current.rotation.set(Math.cos(t / 4) / 8, Math.sin(t / 4) / 8, -0.2 - (1 + Math.sin(t / 1.5)) / 20)
    ref.current.position.y = (1 + Math.sin(t / 1.5)) / 10
  })
  return (
    <group ref={ref}>
      <mesh castShadow receiveShadow>
        <boxGeometry args={[1, 0.5, 2]} />
        <meshStandardMaterial color="royalblue" />
      </mesh>
    </group>
  )
}
