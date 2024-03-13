import React from 'react'
import Inlet from './inlet'
import Diffusor from './diffusor';

import Scavenge from './scavenge'
import GasLabel from './gasLabel';

var red=0,green=0,blue=0;


function ParseCO2Color(co2, background=0){

	if(co2>0){
		if (co2<400) {
			blue=128+ (400-co2)*128/400 ; 
			green=255- (400-co2)*192/49;
			red=0;
      
		}else if(co2<800){
			green=255- (co2-400)*128/1600;
			red=(co2-400)*64/1600;
			blue=64+ (800-co2)*64/800 ; 
  		} else if(co2<1200){
			green=128- (co2-400)*128/1600;
			red=(co2-400)*128/1600;
			blue=0;
  		}
		 else if(co2<1600){
			green=64- (co2-400)*64/1600;
			red=(co2-400)*255/1600;
			blue=0;
  		}else{
			red=255;
			blue=(co2-1600)*255/400;
			green=0;
		}
	}
	if(background>0){
		return "rgb("+parseInt(red/2)+","+parseInt(green/2)+","+parseInt(blue/2)+")";
	}else{
		return "rgb("+parseInt(red/1)+","+parseInt(green/1)+","+parseInt(blue/1)+")";
	}
	
}

function GetPeriod(speed){
	const  s=parseInt(speed);
	return (s)*(1-3)/(100)+3;
}

const SimpleDrum = ({height,weight}) => {

//	console.log('height',height);

	const DrumContainerStyle = {
		position: 'relative',
		maxWidth: `600px`,
		maxHeight: `600px`,
		display:'flex',
	//	width: `60vw`,
	//	height: `60vw`,
		//left:`10vw`,
		alignItems: `center`,
        justifyContent: `center`,
       // padding: `5vw 5vw 0 5vw`
    
	}
	


	const DrumCircleStyle = {
		position: 'relative',

      height: `min(50vh,50vw)`,
	  width:`min(50vh,50vw)`,
	  maxWidth: `560px`,
	  maxHeight: `560px`,
       /* margin: 10px auto;*/
    //    display: `flex`,
     //   flexDirection: `column`,
       /*  flex-flow: column wrap;*/
       // flex-wrap: wrap;
        border: '2vw solid ',
        borderColor: 'gray',
        borderRadius: `50%`,
      //  background: `linear-gradient(to Top,${scavengeBackgroundColor},${inletBackgroundColor},${diffusorBackgroundColor}) `,
    //    alignItems: `end`,
     //   justifyContent: `center`,
     overflow: 'hidden',
        zIndex: '2'
	}

    const DrumWaterStyle = {
		position: 'absolute',

      height: `${height}` ,
	  width:`inherit`,
	  maxWidth: `600px`,
	  maxHeight: `600px`,
       /* margin: 10px auto;*/
      //  display: `flex`,
      //  flexDirection: `column`,
       /*  flex-flow: column wrap;*/
       // flex-wrap: wrap;
     //   borderRadius: `50%`,
       // background: `linear-gradient(to Top,${scavengeBackgroundColor},${inletBackgroundColor},${diffusorBackgroundColor}) `,
       background: "cyan" ,
     //  alignItems: ``,
     //   justifyContent: `center`,
        bottom: '0',
        overflow: 'hidden',
        zIndex:'1',
		display: `flex`,
        flexDirection: `column`,
        alignItems: `center`,
      justifyContent: `space-between`,
	}
	
	

	
	return (
	<div  className='drumContainer'  style={DrumContainerStyle} >
         <div  className='drumCircle'  style={DrumCircleStyle}>
			<div className='drumWater' style={DrumWaterStyle}>

			 <p 
            style={{position: `relative`,
				display:`flex`,
				//textWrap: `wrap`,
				fontSize:`4vw`,
				// bottom: `100%`,
				 textAlign: `center`,
				 maxHeight: `4vw`,
			//	alignItems:`flex-start`,
			//	justifyContent:"space-between",
			//	marginBlockStart: `0px`,
				verticalAlign: `center`,
                alignItems:'center',
                justifyContent: `center`,
             //   width:'100%'

			}}
            >
                {weight}
            </p>
			</div>
		
        </div>

	
	</div>
	)
}

export default SimpleDrum;