//import logo from './logo.svg';
//import './App.css';
import React  from 'react';
import { useEffect } from "react";
import { useState,useRef } from "react";
import { Fragment } from "react";
import TabOnFocus from "./components/UserWatcher";
import CallAPI from "./components/ApiHandler";
//import ReactRadialGauge from "./components/AngleCompass";
//import Progress_bar from "./components/ProgressBarsG";
import Diverter from "./components/diverter";
import AirText from './components/airText';
import SimpleDrum from './components/Drum';
import SensorBox from './components/sensorBox';
import SensorsGroup from './components/SensorsGroup';




function IsEmptyApp(obj) {
  for (const prop in obj) {
    if (Object.hasOwn(obj, prop)) {
      return false;
    }
  }

  return true;
}



function  App() {

  const isPageVisible = TabOnFocus();
//  const isPageVisible = usePageVisibility();
  const timerIdRef = useRef(null);
 // const [isPollingEnabled, setIsPollingEnabled] = useState(true);
  const [diverter, setDiverter] = useState({
    human:{
      mode:0,
      target: 0

    },
    inlet:{
      co2:800,
      voc:100,
      hcho:100,
      dust: 20,
      speed: 50

    },
    diffusor:{
      co2:800,
      voc:100,
      hcho:100,
      dust: 20,
      speed: 50

    },
    scavenge:{
      co2:800,
      voc:100,
      hcho:100,
      dust: 20,
      speed: 50

    }
  }); 
 
  const maxValueTem=55;
// const [apiCall,SetAPI]=useState(CallAPI())
let diverterData=[];
 // let count=0;
  useEffect(() => {
    const pollingCallback = async () => {
      // Your polling logic here
   //   console.log('Polling...');
    //  SetAPI(apiCall)
     let dd= await CallAPI();
   //  console.log("dd: ",dd);

     diverterData=IsEmptyApp(dd)?diverterData:dd;
     if(!IsEmptyApp(diverterData)){
      console.log("diverterData: ",diverterData);
      setDiverter({
       human:{
         mode:diverterData.hum.mod,
         target: diverterData.hum.tgt
   
       },
       inlet:{
         co2:diverterData.inl.co2,
         voc:diverterData.inl.voc,
         hcho:diverterData.inl.hch,
         dust: diverterData.inl.dst,
         speed: diverterData.inl.spd
   
       },
       diffusor:{
         co2:diverterData.dif.co2,
         voc:diverterData.dif.voc,
         hcho:diverterData.dif.hch,
         dust: diverterData.dif.dst,
         speed: diverterData.dif.spd
   
       },
       scavenge:{
         co2:diverterData.sca.co2,
         voc:diverterData.sca.voc,
         hcho:diverterData.sca.hch,
         dust: diverterData.sca.dst,
         speed: diverterData.sca.spd
   
       }
 
 
      })
     }

 

     
    };

    const startPolling = () => {
      // pollingCallback(); // To immediately start fetching data
      // Polling every 30 seconds
      timerIdRef.current = setInterval(pollingCallback, 3000);
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
  }, [isPageVisible, diverter]);

   return (

  
      <div className='diveterContainer'
         style={{ position:`relative`, display:`flex`,flexDirection:`column`,
         textAlign: "center" ,justifyItems:`center`,alignItems:`center`}}>
         <div className='diverterText'>
          <h1  style={{fontStyle:`bold`,fontSize:`8vw`, position:`relative`}}
          >NOISENCE</h1>
          </div> 
        
        <div className="diverterBox"
        style={{position:`relative`, display:`flex`,flexDirection:`column`}}
        >
            <SensorsGroup

                //battery='80%'
                //angle='0deg'
               // radius='20vw'
               
            />
        </div>
        <div className="FootpageContainer">
          <h1  style={{fontStyle:`bold`,fontSize:`4vw`, position:`relative`}}
          >Wireless Weight Estimation</h1>
      

       
        </div>
      </div>
    
   
   );
}

export default App;
