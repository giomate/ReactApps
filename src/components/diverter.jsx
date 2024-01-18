import React from 'react'
import Inlet from './inlet'
import Diffusor from './diffusor';
//import Diffusor from './diffusor.jsx'
import Scavenge from './scavenge'

var red=0,green=0,blue=0;

function ParseCO2Color(co2, background=0){

	if(co2>0){
		if (co2<400) {
			blue=64+ (400-co2)*192/49 ; green=255- (400-co2)*192/49;
			red=0;
      
		} else if(co2<1600){
			green=255- (co2-400)*255/1200;
			red=(co2-400)*255/1200;
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

const Diverter = ({inlet,diffusor,scavenge}) => {

	const inletColor=ParseCO2Color(inlet.value,0);
	const inletBackgroundColor=ParseCO2Color(inlet.value,1)
	const diffusorColor=ParseCO2Color(diffusor.value,0);
	const diffusorBackgroundColor=ParseCO2Color(diffusor.value,1)
	const scavengeColor=ParseCO2Color(scavenge.value,0);
	const scavengeBackgroundColor=ParseCO2Color(scavenge.value,1)
	
	const diverterStyle = {
		position: 'relative',
		maxWidth: `600px`,
		maxHeight: `600px`,
		width: `80vw`,
		height: `80vw`,
		//left:`10vw`,
		alignItems: `center`,
        justifyContent: `center`
	}
	
	const circleStyle = {
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
	<div style={diverterStyle}  className='diverterContainer'>
        <div style={circleStyle} className='circleContainer'>
			<div className='sensorsContainer' 
			style={{position:`relative`, display:`flex`, flexDirection:`column`,
		justifyContent:`space-between`, height: `80vw`,	maxHeight: `600px`,}}
			>
				<Diffusor
					color={diffusorColor}
					period={GetPeriod(diffusor.speed)}
					value={diffusor.value}

				>

				</Diffusor>
				<Inlet
					color={inletColor}
					period={GetPeriod(inlet.speed)}
					value={inlet.value}

				>
					
				</Inlet>
				<Scavenge
					color={scavengeColor}
					period={GetPeriod(scavenge.speed)}
					value={scavenge.value}

				>

				</Scavenge>

			</div>
        </div>
	
	</div>
	)
}

export default Diverter;