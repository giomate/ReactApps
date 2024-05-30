//import logo from './logo.svg';
//import './App.css';
import React  from 'react';
import { useEffect } from "react";
import { useState,useRef } from "react";
//import { Fragment } from "react";
import TabOnFocus from "./components/UserWatcher";
import CallAPI from "./components/ApiHandler";
//import ReactRadialGauge from "./components/AngleCompass";
//import Progress_bar from "./components/ProgressBarsG";
//import DrumSensors from './components/DrumSensors';
import SolarPark from './components/solarPark';




function IsEmptyApp(obj) {
  for (const prop in obj) {
    if (Object.hasOwn(obj, prop)) {
      return false;
    }
  }

  return true;
}

let counter=0;


function  App() {

  const isPageVisible = TabOnFocus();
//  const isPageVisible = usePageVisibility();
  const timerIdRef = useRef(null);
 // const [isPollingEnabled, setIsPollingEnabled] = useState(true);
  const [noisenceData, setNoisenceData] = useState({
    mixer:{
      weight:1500,
      estimated: 1600,
      speed: 20

    },
    sensor0:{
      angle:320,
      battery:80,
      frequency:600,
    

    },
    sensor1:{
      angle:80,
      battery:80,
      frequency:600,
    

    },
    sensor2:{
      angle:200,
      battery:80,
      frequency:600,
    

    },
   
  }); 

  const [solarData, setSolarData] = useState({
    p0:{
      voltage:18,
      current: 1.2,
      temperature: 22,
      angle: 19

    },
    p1:{
      voltage:18,
      current: 1.2,
      temperature: 22,
      angle: 19

    },

   
  }); 
 

  let noisenceAPIData=[];
   useEffect(() => {
    const pollingCallback = async () => {
      counter++;
      setSolarData({
        p0:{
          angle:(20+6*Math.sin(counter))*Math.PI/180,
        
        
    
        },
        p1:{
          angle:(20-6*Math.sin(counter))*Math.PI/180,
        
        
    
        },
     
      })
      //console.log('Counter',counter);
      // Your polling logic here
   //   console.log('Polling...');
    //  SetAPI(apiCall)
     let nd= await CallAPI();
   //  console.log("dd: ",dd);

     noisenceAPIData=IsEmptyApp(nd)?noisenceAPIData:nd;
     if(!IsEmptyApp(noisenceAPIData) && nd.mix){
      console.log("Solar Data: ",noisenceAPIData);
     
     }

 

     
    };

    const startPolling = () => {
      // pollingCallback(); // To immediately start fetching data
      // Polling every 30 seconds
      timerIdRef.current = setInterval(pollingCallback, 1000);
    };

    const stopPolling = () => {
      clearInterval(timerIdRef.current);
    };

    if (isPageVisible) {
      startPolling();
    } else {
   
        stopPolling();
      
      
    }

    return () => {
      stopPolling();
     // clearInterval(interval);

    };
  }, [isPageVisible,solarData]);

   return (

  
      <div className='SolarContainer'
         style={{ position:`relative`, display:`flex`,flexDirection:`column`,
         textAlign: "center" ,justifyItems:`center`,alignItems:`center`}}>
         <div className='SolarText' style={{ width: "100vw"}}>
            <h1  style={{fontStyle:`bold`,fontSize:`10vh`, position:`relative`}}>
            SOLAR OBSERVER
            </h1>
          </div> 
        
        <div className="diverterBox"
        style={{position:`relative`, display:`flex`,flexDirection:`column`,
        alignContent:'center'
      }}
        >
            <SolarPark
              panelsData={solarData}
             
              //  sensor0
                //angle='0deg'
               // radius='20vw'
               
            />
        </div>
        <div className="FootpageContainer"
        style={{
          margin:'0 0 0 0',
          width: "100vw", height: "10vh"
        }}
        >
          <h1  style={{fontStyle:`bold`,fontSize:`4vw`, position:`relative`}}
          >Smart Energy Monitoring</h1>
      

       
        </div>
      </div>
    
   
   );
}

export default App;
