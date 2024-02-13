
import React from 'react'

const GasLabel = ({text}) => {


	
	return (
	
        <div className='co2Label' style={{position:`absolute`, maxWidth:`100px`,
		display: `flex`,
		flexDirection:`row`, 
		flexWrap:`wrap`,
		maxHeight: `4vw`,
		//justifyContent:`space-between`,
		verticalAlign: `top`,alignItems: `start`,alignContent:`start`
		}}>
       		<p
            style={{position: `relative`,
				display:`flex`,
				//textWrap: `wrap`,
				fontSize:`2vw`,
				// bottom: `100%`,
				 textAlign: `start`,
				 maxHeight: `2vw`,
			//	alignItems:`flex-start`,
			//	justifyContent:"space-between",
				marginBlockStart: `0px`,
				verticalAlign: `text-top`,

			}}
            >
                {text}
            </p>
			<p
				style={{position: `relative`,
					display:`flex`,
					//textWrap: `wrap`,
					fontSize:`2vw`,
				//	 bottom: `100%`,
				//	alignItems:`flex-start`,
				//	justifyContent:"space-between",
					verticalAlign: `text-top`
				}}
            >
                {" "}
            </p>
        </div>
       

	
	
	)
}

export default GasLabel;