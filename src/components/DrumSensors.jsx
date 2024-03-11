import React,{useEffect, useState} from 'react'
import SimpleDrum from './Drum';
import SensorsGroup from './SensorsGroup';

let lastAngle=[0,0,0,0];
let indexArray=0;

const DrumSensors=({sensor0,sensor1,sensor2,weight,mov}) =>{
    const [moving, setIsMoving] = useState(false);
    useEffect(()=>{

        let stopped=true;
        lastAngle.forEach(element => {
            if (element==sensor0.angle) {
                
            } else {
                lastAngle[(indexArray)%4]=sensor0.angle;
                stopped=false;
            }
        });
        setIsMoving(!stopped);
    
    },[sensor0])

    return(
        <div className='DrumSensorContainer'>
            <div className='DrumSensorGroup'>
                <SimpleDrum
                        height={weight}
                    >
 
                </SimpleDrum>
                <SensorsGroup
                    sensor0={sensor0}
                    toggle={mov}
                >
                  

                </SensorsGroup>
           
            </div>

        </div>
    )
}

export default DrumSensors;