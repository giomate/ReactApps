import React from 'react'










const SensorBox = ({battery,angle,radius}) => {
	
	const SensorBoxContainer = {
        position: 'relative',
		display: 	`flex`,
		alignItems: `center`,
		maxWidth: `60px`,
		maxHeight: `100px`,
		justifyContent: `center`,
   
		content: '',
      //  maxWidth: `30px`,
        maxHeight: `80px`,
        minWidth: `2px`,
        minHeight: `2px`,
		//overflow: `auto`
	}
	
	const SensorBoxStyle = {
        position: 'relative',
        width: `6vw`,
		height: `10vw`,
        border:`0.2vw solid green`,
        transform: `translateX(${radius})  rotate(${angle})`,
      //  borderColor: `${color} ${color} transparent transparent`,
        background: 'blue',

        display: `flex`,
        flexDirection: `row`,
        alignItems: `center`,
        justifyContent: `space-between`,
     //   transform: `rotate(${angle})`
	}
	

	
	return (
	<div className='SensorContainer' style={SensorBoxContainer}>
        <div className='sensorBox' style={SensorBoxStyle}>
            <p 
            style={{position: `relative`,
				display:`flex`,
				//textWrap: `wrap`,
				fontSize:`2vw`,
				// bottom: `100%`,
				 textAlign: `center`,
				 maxHeight: `2vw`,
			//	alignItems:`flex-start`,
			//	justifyContent:"space-between",
			//	marginBlockStart: `0px`,
				verticalAlign: `center`,
                alignItems:'center',
                justifyContent: `center`,
                width:'100%'

			}}
            >
                {battery}
            </p>

            
        </div>
	</div>
	)
}

export default SensorBox ;