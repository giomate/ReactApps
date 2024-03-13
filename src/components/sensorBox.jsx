import React from 'react'










const SensorBox = ({battery,angle,radius}) => {
	var dynamicWidth = 'min(25vw,25vh)';
	
	const SensorContainerStyle = {
        position: 'absolute',
		display: 	`flex`,
		alignItems: `center`,
		maxWidth: `60px`,
		maxHeight: `100px`,
		justifyContent: `center`,
   
		content: '',
      //  maxWidth: `30px`,
       
       
      //  minHeight: `2px`,
		//overflow: `auto`
		transformOrigin: `${dynamicWidth} ${dynamicWidth}`,
		transform: `rotate(${angle})`
	   
       
		
	}
	
	//console.log("width",dynamicWidth );
	const SensorBoxStyle = {
        position: 'absolute',
		display:'flex',
        width: `10vw`,
		height: `6vw`,
        border:`0.2vw solid green`,
    //    transform: `translateX(${radius})  rotate(${angle})`,
	//	transform: 'translateX(calc(25vw-3vw))' ,
      //  borderColor: `${color} ${color} transparent transparent`,
	  transform: `translate(${dynamicWidth}, -3vw)` ,
        background: 'blue',

        display: `flex`,
        flexDirection: `row`,
        alignItems: `center`,
      justifyContent: `space-between`,
     //   transform: `rotate(${angle})`
	}
	

	
	return (
	<div className='SensorContainer' style={SensorContainerStyle}>
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