import React,{useEffect, useState} from 'react'
//import React, { useState, useRef } from 'react';

import Arrow from './arrow'
import  './diverter.css';

import { motion,useAnimationControls,useAnimate ,animate} from "framer-motion";
import SensorBox from './sensorBox';

function checkendAnimation(){
    console.log('toggle2');
}


function useSensorRotation(isMoving){
    /*
    const [scope, animate] = useAnimate();
    useEffect(() => {
      //  const menuAnimations = isOpen?
      animate(".sensorBox1", { rotate: isMoving? 360 : 0 }, { ease: 'linear' ,  duration: 6 });

    },[isMoving]);
    return scope;
    */
}

const SensorsGroup  =({sensor0,sensor1,sensor2,toggle})=> {
    const [isOpen, setIsOpen] = useState(false);
    const controls = useAnimationControls()
  //  const animation = animate(x, 360, { duration: 3, repeat: 1 })
    const [pulseOnce, setPulseOnce] = useState(false)
    const scope = useSensorRotation(isOpen);


    const wrapperVariants = {
        moving: {
            rotate:  360,
            transition: { ease:'linear',  duration: 6, repeat:Infinity}
        },
        stopped: {
            rotate:  3,
            transition: { ease:'linear',  duration: 1, repeat:0}
        },
        once: {
            rotate:  [180, 360],
            transition: { ease:'linear',  duration: 6, repeat:0}
        },
        second: {
            rotate:  [ 0,180] ,
            transition: { ease:'linear',  duration: 6, repeat:0}
        },


      };
   // console.log('toggle0',toggle);
    useEffect(()=>{
      //  setPulseOnce(toggle>0)
  
         
          setIsOpen(toggle);
          if (toggle) {

            console.log('animate!!',toggle);
          //  controls.mount();
         //   animation.play()
         controls.start( pulseOnce?'second':'once');
            /*
            controls.start({
                rotate:  360,
                transition: { ease:'linear',  duration: 6, repeat:0},
              //  onAnimationComplete:{ setPulseOnce(true)}
              });
              */
          } else {

         //   controls.mount();
          //  controls.start('second');
            console.log('second!!',toggle);
          //  controls.stop()
          // animation.pause();
          }
   
        //  setPulseOnce(false)
     },[toggle,pulseOnce] );
    /*
     controls.start({
        animate: {rotate: 180},
        transition: { duration: 12 }
      })
      */
	
	const diverterStyle = {
        position: 'relative',
		maxWidth: `600px`,
        maxHeight:`600px`,
		///width: `60vw`,
	//	height: `20vw`,
		alignItems: `center`,
         display: `flex`,
        justifyContent: `center`,
        flexDirection: `row`,
        zIndex:'3',
      //  left:'25vh'
	}
	
	const outletStyle= {
        position: 'absolute',
        maxWidth: `600px`,
        maxHeight:`600px`,
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
	<div style={diverterStyle}  className='TreSensorsContainer'  >
        <div style={outletStyle} className='threeSensorsGroup'   >
            <motion.div style={{position:`absolute`, left:`0%`}} className='sensorGroupAnimation'
                variants={wrapperVariants}
              initial={false}
                animate={ controls }
             //   transition={{  duration: 6,repeat:0}}
                onAnimationComplete={() => setPulseOnce(!pulseOnce)}
                >
                <div className='sensorContainer'> 

                   
                <SensorBox className='sensor0Box'
                    battery={sensor0.battery}
                    angle='0deg'
                    radius='20vw'
            
                />
                <SensorBox className='sensor1Box'
                    style={{
                        transform: `rotate(120deg)`
                    }}


                    battery={sensor0.battery}
                    angle='120deg'
                    radius='20vw'

            
                />
                <SensorBox className='sensor2Box'

                    style={{
                        transform: `rotate(60deg)`
                    }}
                    battery={sensor0.battery}
                    angle='-120deg'
                    radius='20vw'
            
                />
                 </div>
             
       
            </motion.div>
           
         

   
      
       
        </div>

	</div>
	)
}

export default SensorsGroup;