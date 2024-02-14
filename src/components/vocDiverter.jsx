import React from 'react'
import Inlet from './inlet'
import Diffusor from './diffusor';
//import Diffusor from './diffusor.jsx'
import Scavenge from './scavenge'
import GasLabel from './gasLabel';
//import UrlLink from './urlLink';

var red=0,green=0,blue=0;

const  minVOCValue=40;
const maxVOCValue=4096;

function ParseVOCColor(voc, background=0){

	if(voc>0){
		if (voc<minVOCValue) {
			blue=128+ (minVOCValue-voc)*128/minVOCValue ; 
			green=255- (minVOCValue-voc)*192/maxVOCValue;
			red=0;
      
		}else if(voc<maxVOCValue){
			green=64- (voc-minVOCValue)*64/maxVOCValue;
			red=(voc-minVOCValue)*255/maxVOCValue;
			blue=0;
  		}else{
			red=255;
			blue=(voc-maxVOCValue)*255/maxVOCValue;
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

const VOCDiverter = ({inlet,diffusor,scavenge}) => {

	const inletColor=ParseVOCColor(inlet.voc,0);
	const inletBackgroundColor=ParseVOCColor(inlet.voc,1)
	const diffusorColor=ParseVOCColor(diffusor.voc,0);
	const diffusorBackgroundColor=ParseVOCColor(diffusor.voc,1)
	const scavengeColor=ParseVOCColor(scavenge.voc,0);
	const scavengeBackgroundColor=ParseVOCColor(scavenge.voc,1)
	
	const vocDiverterStyle = {
		position: 'relative',
		maxWidth: `600px`,
		maxHeight: `600px`,
		width: `60vw`,
		height: `60vw`,
		//left:`10vw`,
		alignItems: `center`,
        justifyContent: `center`,
        padding: `5vw 5vw 0 5vw`
	}
	
	const vocCircleStyle = {
		position: 'relative',

      height: `inherit`,
	  width:`inherit`,
	  maxWidth: `600px`,
	  maxHeight: `600px`,
       /* margin: 10px auto;*/
        display: `flex`,
        flexDirection: `column`,
       /*  flex-flow: column wrap;*/
       // flex-wrap: wrap;
        borderRadius: `50%`,
        background: `linear-gradient(to Top,${scavengeBackgroundColor},${inletBackgroundColor},${diffusorBackgroundColor}) `,
        alignItems: `center`,
        justifyContent: `center`
	}
	

	
	return (
	<div style={vocDiverterStyle}  className='vocDiverterContainer'>
		<GasLabel
			text={"VOC [ppm]"}
			>

			</GasLabel>
        <div style={vocCircleStyle} className='vocCircleContainer'>
			<div className='vocSensorsContainer' 
			style={{position:`relative`, display:`flex`, flexDirection:`column`,
			justifyContent:`space-between`, height: `60vw`,	maxHeight: `600px`,}}
			>
				<Diffusor
					color={diffusorColor}
					period={GetPeriod(diffusor.speed)}
					value={diffusor.voc}

				>

				</Diffusor>
				<Inlet
					color={inletColor}
					period={GetPeriod(inlet.speed)}
					value={inlet.voc}

				>
					
				</Inlet>
				<Scavenge
					color={scavengeColor}
					period={GetPeriod(scavenge.speed)}
					value={scavenge.voc}

				>

				</Scavenge>

			</div>
        </div>
		
		<div
		// className='UrlContainer' 
		style={{position:`absolute`,
		display: `flex`,
		alignItems:`flex-end`,
		alignContent: `flex-end`,
		flexDirection:`row`,
		bottom: "1vw",
		width: `60vw`,
		flexWrap: `wrap`,
		justifyContent: `space-between`,
		maxWidth: `600px`,
		}}>
			<div onClick={() => window.open(`https://www.salukat.com/separation/`, '_blank')}
			style={{
				position: `absolute`,
				//display: `flex`,
				fontSize:`4vw`,
				fontWeight:`bolder`,
				right: `0`,

			}}
			>?</div>
		</div>

	
	
	</div>
	)
}

export default VOCDiverter;