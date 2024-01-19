

import React from 'react'
//import React, { useState, useRef } from 'react';

import Arrow from './arrow'


import { motion } from "framer-motion";



const Scavenge  =({color,period,value})=> {
    


	
	const diverterStyle = {
        position: 'relative',
		maxWidth: `600px`,
        maxHeight:`200px`,
		width: `80vw`,
		height: `20vw`,
		alignItems: `center`,
        justifyContent: `center`,
        flexDirection: `column`,
	}
	
	const outletStyle= {
        position: 'relative',
        maxWidth: `600px`,
        maxHeight:`200px`,
		width: `80vw`,
		height: `20vw`,

        display: `flex`,
        flexDirection: `column`,
        
        alignItems: `center`,
       justifyContent: `space-between`,
         
     /*  border: 1px solid rgba(0,0,0,0.25);*/
    //   transition: 'all 3s ease-in-out`
	}
	

	
	return (
	<div style={diverterStyle}  className='scavengeContainer' >
        <div style={outletStyle} className='scavengeGroup'>
           
            <motion.div style={{position:`absolute`,bottom :`20vw`}}
                initial={{ y: 0,opacity:1 }}
                animate={{ y:`20vw`, opacity:0 }}
                transition={{ ease: "easeOut", duration: period ,repeat:Infinity}}
                >
                <Arrow
                    color={color}
    //width={`${height}px`}
                    width="4vw"
                    angle="90deg"

                ></Arrow>
       
            </motion.div>
            <div className='scavengeText' style={{position:`relative`, top:`0%`,
                 display:`flex`,flexDirection:`column`,  alignItems:`flex-end`,   maxWidth: `600px`,
                 maxHeight:`200px`,justifyContent:`space-between`,
                  }}>
                <h1 style={{position:`relative`,display:`flex`,flexDirection:`column`, 
                color:`white`,fontSize:`min(8vw,100px)`,     maxWidth: `600px`, justifyContent:`end`,
                maxHeight:`200px`,  alignItems:`flex-end`, }}
                >{value}</h1>
            </div>
       
        </div>
	</div>
	)
}

export default Scavenge;