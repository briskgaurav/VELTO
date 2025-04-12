import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import React, { Suspense, useRef } from "react";

function SpinningScene() {
  const torus1Ref = useRef();
  const torus2Ref = useRef();
  const torus3Ref = useRef();
  const torus4Ref = useRef();

  const startTimes = [0, 0.5, 1, 1.5];
  const clock = useRef({ start: performance.now() / 1000 });

  useFrame(() => {
    const currentTime = performance.now() / 1000;
    const elapsed = currentTime - clock.current.start;

    if (elapsed > startTimes[0] && torus1Ref.current) {
      torus1Ref.current.rotation.x += 0.016;
      torus1Ref.current.rotation.z += 0.019;
    }
    if (elapsed > startTimes[1] && torus2Ref.current) {
      torus2Ref.current.rotation.x += 0.013;
      torus2Ref.current.rotation.y += 0.020;
    }
    if (elapsed > startTimes[2] && torus3Ref.current) {
      torus3Ref.current.rotation.x += 0.011;
      torus3Ref.current.rotation.y += 0.016;
    }
    if (elapsed > startTimes[3] && torus4Ref.current) {
      torus4Ref.current.rotation.x -= 0.015;
      torus4Ref.current.rotation.y -= 0.01;
    }
  });

  const MaterialArray = (
    <meshStandardMaterial
      receiveShadow
      color="black"
      metalness={1}
      roughness={0.6}
    />
  );

  return (
    <group rotation={[Math.PI / 6, 0, 0]} position={[0, 0.2, 0]}>

      <group ref={torus1Ref}>
        <mesh castShadow receiveShadow>
          <sphereGeometry args={[0.4, 20, 20]} />
          {MaterialArray}
        </mesh>
        <mesh castShadow receiveShadow rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.8, 0.14, 40, 40]} />
          {MaterialArray}
        </mesh>
      </group>
      <mesh
        castShadow
        receiveShadow
        ref={torus2Ref}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <torusGeometry args={[1.4, 0.16, 50, 50]} />
        {MaterialArray}
      </mesh>
      <mesh
        castShadow
        receiveShadow
        ref={torus3Ref}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <torusGeometry args={[1.8, 0.18, 60, 60]} />
        {MaterialArray}
      </mesh>
      <mesh
        castShadow
        receiveShadow
        ref={torus4Ref}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <torusGeometry args={[2.6, 0.2, 80, 80]} />
        {MaterialArray}
      </mesh>
    </group>
  );
}

function Background() {
  return (
    <Canvas
   
      shadows
      dpr={[1, 2]}
      gl={{
        antialias: true,
        physicallyCorrectLights: true,
        toneMappingExposure: 1.5,
      }}
    >
      <Suspense fallback={null}>
        <Environment files="/hrdi.hdr" environmentIntensity={1} />
      </Suspense>

      
      <directionalLight
        castShadow
        position={[5, 5, 5]}
        intensity={150}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-near={0.5}
        shadow-camera-far={50}
      />

      <ambientLight intensity={0.3} />
      <SpinningScene />
      {/* <OrbitControls /> */}
    </Canvas>
  );
}

export default Background;
