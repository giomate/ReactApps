import React from 'react'
import CO2Diverter from './co2Diverter';
import VOCDiverter from './vocDiverter';




const Diverter = ({inlet,diffusor,scavenge}) => {

	const diverterStyle = {
		position: 'relative',
	
		//left:`10vw`,
		alignItems: `center`,
        justifyContent: `center`
	}
	
	const circleStyle = {
		position: 'relative',
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',


		alignItems: `center`,
        justifyContent: `center`
	}
	

	
	return (
	<div style={diverterStyle}  className='diverterDuoContainer'>
        <div style={circleStyle} className='diverterDuoGroup'>

				<CO2Diverter
					    inlet={inlet}
						diffusor={diffusor}
						scavenge={scavenge}

				>

				</CO2Diverter>
				<VOCDiverter
				  inlet={inlet}
				  diffusor={diffusor}
				  scavenge={scavenge}

				>
					
				</VOCDiverter>
		

			
        </div>
	
	</div>
	)
}

export default Diverter;