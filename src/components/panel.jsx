import { useRef, useState,useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Html,RenderTexture, OrbitControls, PerspectiveCamera, Text, ContactShadows } from '@react-three/drei'



export const panelSize={
    x:6,
    y:1,
    z:10};

function BoxPanel(props) {
    // const textRef = useRef()
     const ref = useRef()
    // useFrame((state) => (textRef.current.position.x = Math.sin(state.clock.elapsedTime) * 0))
     //useFrame((state, delta) => (ref.current.rotation.x += delta))
     //console.log("angle: ",props.angle)
    // useFrame((state) => (ref.current.rotation.x = angle))
    //{parseInt( props.angle*180/Math.PI)}
  
    
     return (
       <mesh {...props} ref={ref} castShadow rotation-x={props.angle}>
        
        <Text fontSize={2} color={'white'} position={[0,panelSize.y/2+0.1,-panelSize.z/3]} rotation-x={-Math.PI/2}>
          {parseInt( props.voltage/1000)} V 
           
           </Text>
           <Text fontSize={2} color={'white'} position={[0,panelSize.y/2+0.1,0]} rotation-x={-Math.PI/2}>
          {parseInt( props.current/1000*props.voltage/1000)} W 
           
           </Text>
           <Text fontSize={2} color={'white'} position={[0,panelSize.y/2+0.1,panelSize.z/3]} rotation-x={-Math.PI/2}>
          {parseInt( props.temperature)} °C
           
           </Text>
         <boxGeometry args={[panelSize.x, panelSize.y,panelSize.z]}  >
       
         </boxGeometry>
   
         <meshStandardMaterial color={'blue'}></meshStandardMaterial>
       </mesh>
     )
   }


const Panel =({position, angle, voltage, current,temperature})=>{
 // console.log("Voltage: ",voltage);
 // console.log("Current: ",current);
return (

        <BoxPanel position={position}  angle={angle}
         voltage={voltage}  current={current}
         temperature={temperature}
         />

)


}
export default Panel;