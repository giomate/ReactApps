import React,{useEffect, useState} from 'react'










const SensorBox = ({battery,angle,radius,frequency}) => {
	var dynamicWidth = 'min(25vw,25vh)';
	const [charge, setCharge] = useState("90%")
	useEffect(()=>{
		let c=(parseInt( (battery-3200)*100/(4200-3100))).toString()+"%";
		setCharge(c)
	  }, [battery])
	
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
        width: `12vw`,
		height: `8vw`,
        border:`0.2vw solid green`,
    //    transform: `translateX(${radius})  rotate(${angle})`,
	//	transform: 'translateX(calc(25vw-3vw))' ,
      //  borderColor: `${color} ${color} transparent transparent`,
	  transform: `translate(${dynamicWidth}, -4vw)` ,
        background: 'blue',

        display: `flex`,
        flexDirection: `column`,
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
				fontSize:`1.5vw`,
				// bottom: `100%`,
				 textAlign: `center`,
				 maxHeight: `1.5vw`,
			//	alignItems:`flex-start`,
			//	justifyContent:"space-between",
			//	marginBlockStart: `0px`,
				verticalAlign: `center`,
                alignItems:'center',
                justifyContent: `center`,
                width:'100%'

			}}
            >
                Freq: {frequency} Hz
            </p>
            <p 
            style={{position: `relative`,
				display:`flex`,
				//textWrap: `wrap`,
				fontSize:`1.5vw`,
				// bottom: `100%`,
				 textAlign: `center`,
				 maxHeight: `1.5vw`,
			//	alignItems:`flex-start`,
			//	justifyContent:"space-between",
			//	marginBlockStart: `0px`,
				verticalAlign: `center`,
                alignItems:'center',
                justifyContent: `center`,
                width:'100%'

			}}
            >
                Bat: {charge}
            </p>

            
        </div>
	</div>
	)
}

export default SensorBox ;