import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";
import { Color } from "three";
import { EffectComposer, SSAO } from "@react-three/postprocessing";
import { PointerBall } from "./PointerBall";
import { RapierRigidBodies } from "./RapierRigidBodies";
import { cn } from "@/lib/utils/cn";

export default function RapierCanvas({ className }: { className?: string }) {
  return (
    <div className={cn("fixed left-0 top-0 z-0 h-screen w-screen", className)}>
      <Canvas
        shadows
        gl={{ alpha: true, stencil: false, depth: false, antialias: false }}
        camera={{ position: [0, 0, 20], fov: 32.5, near: 1, far: 100 }}
        onCreated={(state) => (state.gl.toneMappingExposure = 1.5)}
      >
        <Physics gravity={[0, 2, 0]}>
          <RapierRigidBodies />
          <PointerBall />
        </Physics>

        <ambientLight intensity={1} />
        <spotLight
          position={[20, 20, 25]}
          penumbra={1}
          angle={0.2}
          color="white"
          castShadow
          shadow-mapSize={[512, 512]}
        />
        <directionalLight position={[0, 5, -4]} intensity={4} />
        <directionalLight
          position={[0, -15, 0]}
          intensity={2}
          color="#10b981"
        />
        <EffectComposer multisampling={0}>
          <SSAO
            samples={11}
            radius={0.15}
            intensity={20}
            luminanceInfluence={0.6}
            color={new Color("black")}
            worldDistanceThreshold={0}
            worldDistanceFalloff={0}
            worldProximityThreshold={0}
            worldProximityFalloff={0}
          />
          <SSAO
            samples={21}
            radius={0.03}
            intensity={15}
            luminanceInfluence={0.6}
            color={new Color("black")}
            worldDistanceThreshold={0}
            worldDistanceFalloff={0}
            worldProximityThreshold={0}
            worldProximityFalloff={0}
          />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
