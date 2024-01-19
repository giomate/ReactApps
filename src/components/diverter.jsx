import React from 'react'
import Inlet from './inlet'
import Diffusor from './diffusor';
//import Diffusor from './diffusor.jsx'
import Scavenge from './scavenge'

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

const Diverter = ({inlet,diffusor,scavenge}) => {

	const inletColor=ParseCO2Color(inlet.co2,0);
	const inletBackgroundColor=ParseCO2Color(inlet.co2,1)
	const diffusorColor=ParseCO2Color(diffusor.co2,0);
	const diffusorBackgroundColor=ParseCO2Color(diffusor.co2,1)
	const scavengeColor=ParseCO2Color(scavenge.co2,0);
	const scavengeBackgroundColor=ParseCO2Color(scavenge.co2,1)
	
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
					value={diffusor.co2}

				>

				</Diffusor>
				<Inlet
					color={inletColor}
					period={GetPeriod(inlet.speed)}
					value={inlet.co2}

				>
					
				</Inlet>
				<Scavenge
					color={scavengeColor}
					period={GetPeriod(scavenge.speed)}
					value={scavenge.co2}

				>

				</Scavenge>

			</div>
        </div>
	
	</div>
	)
}

export default Diverter;