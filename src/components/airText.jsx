import React from 'react'



function ParseIAQText(iaq){
    var text: "undefined";


	if(iaq>0){
		if (iaq<400) {
		
      text = "Excelent";

		} else if(iaq<800){
            text = "Fine";
        }else if (iaq<1200) {
            text= "Moderate";
        } else if(iaq<1600){
            text = "Polluted";
        }else{
            text = "Dangerous";
        }

	}
	return text;
}


const AirText=({value})=>{
    const textAir=ParseIAQText(value);
    return (
        <div className='airText'

        >
            <p
            style={{fontSize:`6vw`}}
            >
                Air quality : {textAir}
            </p>

        </div>
    )
}


export default AirText