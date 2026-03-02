import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Mesh } from 'three'

export default function Rocket(props: JSX.IntrinsicElements['group']) {
  const ref = useRef<any>(null!)
  useFrame((state, delta) => (ref.current.rotation.y += delta))
  return (
    <group ref={ref} {...props}>
      <ambientLight intensity={0.75} />
      <pointLight intensity={1} position={[10, 10, 5]} />
      <spotLight intensity={2.25} angle={0.1} penumbra={1} position={[-10, 15, 10]} castShadow />
      <PlaceholderModel />
    </group>
  )
}

function PlaceholderModel() {
  return (
    <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh>
            <cylinderGeometry args={[0.5, 0.5, 2, 32]} />
            <meshStandardMaterial color="red" />
        </mesh>
        <mesh position={[0, -1.5, 0]}>
            <coneGeometry args={[0.7, 1, 32]} />
            <meshStandardMaterial color="orange" />
        </mesh>
    </group>
  )
}
