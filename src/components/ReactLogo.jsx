import React, { useRef } from "react";
import { Float, useGLTF } from "@react-three/drei";

function ReactLogo(props) {
  const { nodes, materials } = useGLTF("/models/react_logo.glb");
  return (
    <Float floatIntensity={1}>
      <group position={[6, 4, 0]} {...props} dispose={null}>
        <group scale={0.5}>
          <mesh
            geometry={nodes["React-Logo_Material002_0"].geometry}
            material={materials["Material.002"]}
            position={[2, 0.7, 0.18]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.39, 0.39, 0]}
          />
        </group>
      </group>
    </Float>
  );
}

useGLTF.preload("/models/react_logo.glb");

export default ReactLogo;
