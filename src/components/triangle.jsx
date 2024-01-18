// Filename - Progress_bar.js

import React from 'react'










const Triangle = ({color,width,angle}) => {
	
	const BoxTrianglediv = {
        position: 'relative',
		display: 	`flex`,
		alignItems: `center`,
	//	width: `calc(6*${width}/2)`,
		height: `calc(6*${width}/2`,
		justifyContent: `center`,
        transform: `rotate(45deg)`,
		content: '',
      //  maxWidth: `30px`,
        maxHeight: `80px`,
        minWidth: `2px`,
        minHeight: `2px`,
		//overflow: `auto`
	}
	
	const Childdiv = {
        position: 'relative',
        height: 0,
        width:0,
        border:`${width} solid`,

        borderColor: `${color} ${color} transparent transparent`,
        transform: `rotate(${angle})`
	}
	

	
	return (
	<div className='tail' style={BoxTrianglediv}>
	<div className='triangle' style={Childdiv}>

		
	</div>
	</div>
	)
}

export default Triangle;
