import React from 'react'
import Triangle from './triangle'

const Arrow = ({color,width,angle}) => {
	
	const arrowStyle = {
        position: 'relative',
		display: 	`flex`,
		alignItems: `center`,
	//	width: `calc(6*${width}/2)`,
		height: `calc(6*${width}/2`,
		justifyContent: `center`,
 		flexDirection: `row`,
		//overflow: `auto`
	}
	
	const boxStyle = {
        position: 'relative',
        height: `calc(1*${width}/2)`,
        width:`calc(${width}/2)`,
       backgroundColor:`${color}`,
       transform: `translate(240%,0)`
       //transform: `translate(calc(3*${width}/2-${width}/2),0)`
	}
	

	
	return (
	<div  className='arrowContainer' style={arrowStyle}>
        <div className='arrowGroup' style={boxStyle}>
            
        </div>
        <Triangle
        color={color}
        width={width}
        angle={angle}

        />

	</div>
	)
}

export default Arrow;
