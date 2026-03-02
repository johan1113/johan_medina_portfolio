import * as THREE from 'three'
import { useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { Physics, RigidBody, RigidBodyProps } from '@react-three/rapier'

const RESTITUTION = 2.2

export default function PingPong(props: JSX.IntrinsicElements['group']) {
  return (
    <group {...props}>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 5]} />
      <pointLight position={[-10, -10, -5]} />
      {/* Physics is handled at the root level in App.js usually, but here it's nested?
          The original code had Physics inside the component.
          Wait, Rapier Physics should generally be at the top level if objects interact globally.
          However, for "portals" these are isolated worlds.
          If they are isolated, they need their own Physics world or share the global one.
          The CodeSandbox uses Physics at the top level in App.js.
          But inside PingPong.js it ALSO imports Physics?
          Let's check the original code again.
          
          Original CodeSandbox App.js wraps everything in <Physics>.
          PingPong.js ALSO has <Physics>.
          Nested Physics providers might work for isolated simulations.
          I will follow the original code structure.
      */}
      <Physics gravity={[0, -30, 0]}>
        <Ball />
        <Paddle />
        <Enemy color="orange" position={[2, 4.5, 0]} />
        <Enemy color="skyblue" position={[-2, 4.5, 0]} />
      </Physics>
    </group>
  )
}

function Ball({ args = [0.75, 32, 32] }: { args?: [number, number, number] }) {
  // const { viewport } = useThree() // unused in original
  const ref = useRef<any>(null!)
  return (
    <RigidBody ref={ref} colliders="ball" restitution={RESTITUTION} position={[0, 5, 0]}>
      <mesh>
        <sphereGeometry args={args} />
        <meshStandardMaterial />
      </mesh>
    </RigidBody>
  )
}

function Paddle({ args = [2, 0.5, 2] }: { args?: [number, number, number] }) {
  const ref = useRef<any>(null!)
  useFrame((state) => {
    // animate paddle based on mouse
    // local mouse coordinates might need adjustment if inside a portal
    ref.current.setNextKinematicTranslation({ x: state.mouse.x * 5, y: -2, z: 0 })
  })
  return (
    <RigidBody ref={ref} type="kinematicPosition" colliders="cuboid" restitution={RESTITUTION}>
      <mesh>
        <boxGeometry args={args} />
        <meshStandardMaterial color="hotpink" />
      </mesh>
    </RigidBody>
  )
}

function Enemy({ color, ...props }: { color: string } & RigidBodyProps) {
  return (
    <RigidBody type="fixed" colliders="cuboid" restitution={RESTITUTION} {...props}>
      <mesh>
        <boxGeometry args={[2, 0.5, 2]} />
        <meshStandardMaterial color={color} />
      </mesh>
    </RigidBody>
  )
}
