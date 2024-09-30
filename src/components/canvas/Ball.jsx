import React, { Suspense, useContext } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei"; //Decal - texture OrbitControls - rotate

import CanvasLoader from "../Loader";
const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);
  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.08]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial color="#fff8eb" polygonOffset polygonOffsetFactor={-5} flatShading />
        <Decal position={[0, 0, 1]} rotation={[ 2 * Math.PI, 0, 6.25 ]} flatShading map={decal} />
      </mesh>
    </Float>
  )
}

const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
    >
      {/* fov- feel view */}

      {/* <Suspense> is coming from react for loader- not related to threejs */}
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        {/* maxPolarAngle and minPolarAngle allows us to rotate circle*/}
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  )
}
export default BallCanvas