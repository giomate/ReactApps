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
import DrumSensors from './components/DrumSensors';




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
     if(!IsEmptyApp(noisenceAPIData) && nd.mix){
      console.log("Noisence Data: ",noisenceAPIData);
      setNoisenceData({
        mixer:{
          weight:noisenceAPIData.mix.wgt,
          estimation: noisenceAPIData.mix.est,
          speed: noisenceAPIData.mix.spd
        
    
        },
        sensor0:{
          angle:noisenceAPIData.sn0.ang,
         
          frequency:noisenceAPIData.sn0.fqz,
          battery:noisenceAPIData.sn0.bat,
        
        },
        sensor1:{
          angle:noisenceAPIData.sn1.ang,
          frequency:noisenceAPIData.sn1.fqz,
          battery:noisenceAPIData.sn1.bat,
          
      
        },
        sensor2:{
          angle:noisenceAPIData.sn2.ang,
          frequency:noisenceAPIData.sn2.fqz,
          battery:noisenceAPIData.sn2.bat,
          
        
        }
 
 
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
  }, [isPageVisible,noisenceData]);

   return (

  
      <div className='diveterContainer'
         style={{ position:`relative`, display:`flex`,flexDirection:`column`,
         textAlign: "center" ,justifyItems:`center`,alignItems:`center`}}>
         <div className='diverterText'>
          <h1  style={{fontStyle:`bold`,fontSize:`8vw`, position:`relative`}}
          >NOISENCE</h1>
          </div> 
        
        <div className="diverterBox"
        style={{position:`relative`, display:`flex`,flexDirection:`column`,
        alignContent:'center'
      }}
        >
            <DrumSensors
              noisence={noisenceData}
             
              //  sensor0
                //angle='0deg'
               // radius='20vw'
               
            />
        </div>
        <div className="FootpageContainer"
        style={{
          margin:'5vh 0 0 0'
        }}
        >
          <h1  style={{fontStyle:`bold`,fontSize:`4vw`, position:`relative`}}
          >Wireless Weight Estimation</h1>
      

       
        </div>
      </div>
    
   
   );
}

export default App;
