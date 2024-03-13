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
        first: {
            rotate:  [0, 180],
            transition: { ease:'linear',  duration: 6, repeat:0}
        },
        second: {
            rotate:  [ 180,360] ,
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
         controls.start( pulseOnce?'second':'first');
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
            console.log('stop animate!!',toggle);
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
	
	const threeSensorsContainerStyle = {
        position: 'absolute',
		maxWidth: `600px`,
        maxHeight:`600px`,
		///width: `60vw`,
	//	height: `20vw`,
		alignItems: `center`,
         display: `flex`,
        justifyContent: `center`,
        flexDirection: `row`,
        zIndex:'3',
       // transform:'translateY(cal(min(50vh,50vw)))',
        border: '2vw solid ',
        borderColor: 'transparent',
    //    top: '-100%'
      //  left:'25vh'
	}
	
	const threeSensorGroupStyle= {
        position: 'relative',
        maxWidth: `600px`,
        maxHeight:`600px`,
        bottom:'100%',
  
	//	width: `60vw`,
	//	height: `20vw`,
        display: `flex`,
        flexDirection: `row`,
        
        alignItems: `center`,
       justifyContent: `space-between`,
         
     /*  border: 1px solid rgba(0,0,0,0.25);*/
    //   transition: 'all 3s ease-in-out`
	}
	

	
	return (
	<div style={threeSensorsContainerStyle}  className='threeSensorsContainer'  >
        <div style={threeSensorGroupStyle} className='threeSensorsGroup'   >
            <motion.div style={{position:`relative`, left:`0%`}} className='sensorGroupAnimation'
                variants={wrapperVariants}
              initial={false}
                animate={ controls }
             //   transition={{  duration: 6,repeat:0}}
                onAnimationComplete={() => setPulseOnce(!pulseOnce)}
                >
                <div className='sensorContainer2'
                style={{
                  height: `min(50vh,50vw)`,
                  width:`min(50vh,50vw)`,
                  transformOrigin:'center center'
                }}

                > 

                   
                <SensorBox className='sensor0Box'
                    battery={sensor0.battery}
                    angle='0deg'
                    radius='25vw'
            
                    
                />
                <SensorBox className='sensor1Box'
                style={{
                  position: 'absolute',
                //  transformOrigin:'center center',
               //   transform: 'rotate(120)'


                }}
                    battery={sensor0.battery}
                    angle='120deg'
                    radius='25vw'
            
                    
                />
                   <SensorBox className='sensor2Box'
                style={{
                  position: 'absolute',
                //  transformOrigin:'center center',
               //   transform: 'rotate(120)'


                }}
                    battery={sensor0.battery}
                    angle='-120deg'
                    radius='25vw'
            
                    
                />

                 </div>
             
       
            </motion.div>
           
         

   
      
       
        </div>

	</div>
	)
}

export default SensorsGroup;