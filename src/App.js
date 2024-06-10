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
      voltage:12000,
      current: 200,
      temperature: 32,
      angle: 19

    },
    p1:{
      voltage:11000,
      current: 300,
      temperature: 22,
      angle: 19

    },

   
  }); 
 

  let noisenceAPIData=[];
   useEffect(() => {
    const pollingCallback = async () => {
      counter++;

      //console.log('Counter',counter);
      // Your polling logic here
   //   console.log('Polling...');
    //  SetAPI(apiCall)
     let nd= await CallAPI();
   //  console.log("dd: ",dd);

     noisenceAPIData=IsEmptyApp(nd)?noisenceAPIData:nd;
     if(!IsEmptyApp(noisenceAPIData) && nd.cur){
      console.log("Solar Data: ",noisenceAPIData);
      setSolarData({
        p0:{
          angle:noisenceAPIData.nod==0?noisenceAPIData.ang*Math.PI/180:solarData.p0.angle,
          voltage:(noisenceAPIData.nod==0?noisenceAPIData.vol:solarData.p0.voltage),
          current:(noisenceAPIData.nod==0?noisenceAPIData.cur:solarData.p0.current),
          temperature:(noisenceAPIData.nod==0?noisenceAPIData.tem:solarData.p0.temperature),
        
    
        },
        p1:{
          angle:noisenceAPIData.nod==1?noisenceAPIData.ang*Math.PI/180:solarData.p1.angle,
          voltage:(noisenceAPIData.nod==1?noisenceAPIData.vol:solarData.p1.voltage),
          current:(noisenceAPIData.nod==1?noisenceAPIData.cur:solarData.p1.current),
          temperature:(noisenceAPIData.nod==1?noisenceAPIData.tem:solarData.p1.temperature),
        
        
    
        },
     
      })
     
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
