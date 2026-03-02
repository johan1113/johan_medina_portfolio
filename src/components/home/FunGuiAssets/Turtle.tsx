import { Float, Instances, Instance } from '@react-three/drei'

// Define the type for the sphere data
type SphereData = [number, string, number, [number, number, number]];

const spheres: SphereData[] = [
  [1, 'orange', 0.05, [-4, -1, -1]],
  [0.75, 'hotpink', 0.1, [-4, 2, -2]],
  [1.25, 'aquamarine', 0.2, [4, -3, 2]],
  [1.5, 'lightblue', 0.3, [-4, -2, -3]],
  [2, 'pink', 0.3, [-4, 2, -4]],
  [2, 'skyblue', 0.3, [-4, 2, -4]],
  [1.5, 'orange', 0.05, [-4, -1, -1]],
  [2, 'hotpink', 0.1, [-4, 2, -2]],
  [1.5, 'aquamarine', 0.2, [4, -3, 2]],
  [1.25, 'lightblue', 0.3, [-4, -2, -3]],
  [1, 'pink', 0.3, [-4, 2, -4]],
  [1, 'skyblue', 0.3, [-4, 2, -4]]
]

export default function Turtle() {
  return (
    <Instances range={spheres.length} >
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 5]} />
      <pointLight position={[-10, -10, -5]} />
      <sphereGeometry args={[1, 64, 64]} />
      <meshBasicMaterial depthTest={false} />
      {spheres.map(([scale, color, speed, position], index) => (
        <Sphere key={index} scale={scale} color={color} speed={speed} position={position} />
      ))}
      <Float rotationIntensity={2} floatIntensity={2}>
        <TurtleModel position={[0, 0, -2]} rotation={[0, Math.PI, 0]} scale={0.75} />
      </Float>
    </Instances>
  )
}

function Sphere({ position, scale = 1, speed = 0.1, color }: { position: [number, number, number], scale?: number, speed?: number, color: string }) {
  return (
    <Float rotationIntensity={40} floatIntensity={20} speed={speed / 2}>
      <Instance position={position} scale={scale} color={color} />
    </Float>
  )
}

function TurtleModel(props: any) {
  return (
    <group {...props}>
      {/* Shell */}
      <mesh scale={[1.5, 1, 1.8]} position={[0, 0.5, 0]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="darkgreen" roughness={0.6} />
      </mesh>
      {/* Belly */}
      <mesh scale={[1.4, 0.4, 1.7]} position={[0, 0.2, 0]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="yellow" />
      </mesh>
      {/* Head */}
      <mesh position={[0, 0.6, 1.8]} scale={[0.6, 0.6, 0.8]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="green" />
      </mesh>
      {/* Legs */}
      <mesh position={[1.2, 0, 1]} rotation={[0, 0.5, 0]} scale={[0.4, 0.2, 0.6]}>
         <sphereGeometry args={[1, 16, 16]} />
         <meshStandardMaterial color="green" />
      </mesh>
      <mesh position={[-1.2, 0, 1]} rotation={[0, -0.5, 0]} scale={[0.4, 0.2, 0.6]}>
         <sphereGeometry args={[1, 16, 16]} />
         <meshStandardMaterial color="green" />
      </mesh>
      <mesh position={[1.2, 0, -1]} rotation={[0, -0.5, 0]} scale={[0.4, 0.2, 0.6]}>
         <sphereGeometry args={[1, 16, 16]} />
         <meshStandardMaterial color="green" />
      </mesh>
      <mesh position={[-1.2, 0, -1]} rotation={[0, 0.5, 0]} scale={[0.4, 0.2, 0.6]}>
         <sphereGeometry args={[1, 16, 16]} />
         <meshStandardMaterial color="green" />
      </mesh>
      {/* Tail */}
      <mesh position={[0, 0.2, -1.8]} scale={[0.2, 0.2, 0.6]}>
        <coneGeometry args={[1, 2, 8]} />
        <meshStandardMaterial color="green" />
      </mesh>
    </group>
  )
}
