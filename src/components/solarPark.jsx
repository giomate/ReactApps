import React from 'react';
import Panel from "./panel" 
import { panelSize } from "./panel"
import Roof from "./roof"
import { Canvas, useFrame } from '@react-three/fiber'
import { Html,RenderTexture, OrbitControls, PerspectiveCamera, Text, ContactShadows } from '@react-three/drei'



const SolarPark = ({panelsData})=> {
  //console.log("sola panel data: ",panelsData);
  return  (
    <div style={{ width: "100vw", height: "80vh" }}>
    <Canvas dpr={[1, 2]} shadows camera={{ position: [-1*panelSize.z, panelSize.z, panelSize.z] }}>
      <ambientLight intensity={1} />
      <directionalLight position={[0, panelSize.z/2, 0]}  castShadow/>
      <Panel position={[-0.5-panelSize.x/2, panelSize.z/2, 0]} angle={panelsData.p0.angle} 
       voltage={panelsData.p0.voltage}  current={panelsData.p0.current}
       temperature={panelsData.p0.temperature}   />
      <Panel position={[0.5+panelSize.x/2, panelSize.z/2, 0]} angle={panelsData.p1.angle} 
    voltage={panelsData.p1.voltage}  current={panelsData.p1.current}
    temperature={panelsData.p1.temperature}  
      />

   
      <Roof />
      <OrbitControls minPolarAngle={0} maxPolarAngle={Math.PI / 2.1} />
    </Canvas>
    </div>
  )

}

export default SolarPark