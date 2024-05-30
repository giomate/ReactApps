import React from 'react';
export default function Roof() {
  
    return (
      <mesh receiveShadow rotation-x={-Math.PI / 2}>
         <planeGeometry args={[1000, 1000]}  />
      <meshStandardMaterial color='white'  toneMapped={true} >

      </meshStandardMaterial>
      </mesh>
    )
  }