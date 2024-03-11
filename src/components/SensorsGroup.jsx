import React from 'react'
//import React, { useState, useRef } from 'react';

import Arrow from './arrow'
import  './diverter.css';

import { motion } from "framer-motion";
import SensorBox from './sensorBox';



const SensorsGroup  =({sensor0,sensor1,sensor2})=> {
    
    const [pulseOnce, setPulseOnce] = useState(false)

	
	const diverterStyle = {
        position: 'relative',
		maxWidth: `600px`,
        maxHeight:`200px`,
		///width: `60vw`,
	//	height: `20vw`,
		alignItems: `center`,
        justifyContent: `center`,
        flexDirection: `row`,
	}
	
	const outletStyle= {
        position: 'absolute',
        maxWidth: `600px`,
        maxHeight:`200px`,
//		width: `60vw`,
//		height: `20vw`,
        display: `flex`,
        flexDirection: `row`,
        
        alignItems: `center`,
       justifyContent: `space-between`,
         
     /*  border: 1px solid rgba(0,0,0,0.25);*/
    //   transition: 'all 3s ease-in-out`
	}
	

	
	return (
	<div style={diverterStyle}  className='inletContainer' >
        <div style={outletStyle} className='inletGroup'>
           
            <motion.div style={{position:`relative`, left:`0%`}} className='sensorGroupAnimation'
                initial={{ rotate: 0}}
                animate={pulseOnce?null: { rotate: 180}}
                transition={{  duration: 6,repeat:1}}
                onAnimationComplete={() => setPulseOnce(true)}
                >
                    <motion.div
                         initial={{ rotate: 180}}
                         animate={pulseOnce? { rotate: 180}: null}
                         transition={{  duration: 6,repeat:1}}
                         onAnimationComplete={() => setPulseOnce(false)}
                    
                    
                    
                    >
                        <SensorBox
                            battery='80%'
                            angle='0deg'
                            radius='20vw'
                    
                        />

                    </motion.div>
             
       
            </motion.div>

   
      
       
        </div>

	</div>
	)
}

export default SensorsGroup;