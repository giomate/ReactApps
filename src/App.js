//import logo from './logo.svg';
//import './App.css';
import { useEffect } from "react";
import { useState,useRef } from "react";
import { Fragment } from "react";
import TabOnFocus from "./components/UserWatcher";
import CallAPI from "./components/ApiHandler";
//import ReactRadialGauge from "./components/AngleCompass";
import Progress_bar from "./components/ProgressBarsG";





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
     diverterData= await CallAPI()
     console.log(diverterData);
     setDiverter({
      human:{
        mode:diverterData.human.mod,
        target: diverterData.human.tgt
  
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
 

      // Simulating an API failure in the polling callback
      const shouldFail = Math.random() < 0.1; // Simulate 20% chance of API failure
      //count=count+1;
      if (shouldFail) {
       // setIsPollingEnabled(false);
        console.log('Polling failed. Stopped polling.');
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
  }, [isPageVisible, count]);

   return (

      <Fragment>
      <div style={{ textAlign: "center" }}>
        <h1>Count: {count}</h1>
        <div className="AngleDiv">
            <Progress_bar
                bgcolor="green"
                progress={10+angle}
                height={30}
                maxValue={10}
            />
        </div>
        <div className="TemperatureDiv">
           <Progress_bar
                bgcolor="red"
                progress={60+temperatureValue*2}
                height={30}
                maxValue={maxValueTem}
            />
        </div>
      </div>
      </Fragment>
   
   );
}

export default App;
