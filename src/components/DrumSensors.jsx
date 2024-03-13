import React,{useEffect, useState} from 'react'
import SimpleDrum from './Drum';
import SensorsGroup from './SensorsGroup';

let lastAngle=[0,0,0,0];
let indexArray=0;

const DrumSensors=({noisence}) =>{
 //   let h=(1+noisence.mixer.weight*100/10000).toString()+"%"
    const [height, setHeight] = useState("1%");
    useEffect(()=>{

 
        setHeight((1+noisence.mixer.weight*100/10000).toString()+"%");
    
    },[noisence])

    return(
        <div className='DrumSensorContainer'
  
        >
            <div className='DrumSensorGroup'
            style={{
                position:'relative',
                display: 'flex',
                flexDirection:'column'
            }}
            >
                <SimpleDrum
                style={{
                    position:'relative'
                }}
                        height={height}
                        weight={noisence.mixer.weight}
                    >
 
                </SimpleDrum>
                <SensorsGroup
                 style={{
                    position:'absolute'
                }}
                    sensor0={noisence.sensor0}
                    sensor1={noisence.sensor1}
                    sensor2={noisence.sensor2}
                    speed={noisence.mixer.speed}
                >
                  

                </SensorsGroup>
           
            </div>

        </div>
    )
}

export default DrumSensors;