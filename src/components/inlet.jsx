import React from 'react'
//import React, { useState, useRef } from 'react';

import Arrow from './arrow'
import  './diverter.css';

import { motion } from "framer-motion";



const Inlet  =({color,period,value})=> {
    


	
	const diverterStyle = {
        position: 'relative',
		maxWidth: `600px`,
        maxHeight:`200px`,
		width: `80vw`,
		height: `20vw`,
		alignItems: `center`,
        justifyContent: `center`,
        flexDirection: `row`,
	}
	
	const outletStyle= {
        position: 'absolute',
        maxWidth: `600px`,
        maxHeight:`200px`,
		width: `80vw`,
		height: `20vw`,
        display: `flex`,
        flexDirection: `row`,
        
        alignItems: `center`,
       justifyContent: `space-between`,
         
     /*  border: 1px solid rgba(0,0,0,0.25);*/
    //   transition: 'all 3s ease-in-out`
	}
	

	
	return (
	<div style={diverterStyle}  className='inletContainer' >
        <div style={outletStyle} className='inletGroup'>
           
            <motion.div style={{position:`relative`, left:`0%`}} className='arrowLeft'
                initial={{ x: 0,opacity:1 }}
                animate={{ x:`20vw`, opacity:0 }}
                transition={{ ease: "easeOut", duration: period ,repeat:Infinity}}
                >
                <Arrow
                    color={color}
    //width={`${height}px`}
                    width="4vw"
                    angle="0deg"

                ></Arrow>
       
            </motion.div>
            <motion.div style={{position:`relative`, right:`20vw`}} className='arrowRigh'
                initial={{ x: `20vw`,opacity:1 }}
                animate={{ x:0, opacity:0 }}
                transition={{ ease: "easeOut", duration: period ,repeat:Infinity}}
                >
                <Arrow
                    color={color}
    //width={`${height}px`}
                    width="4vw"
                    angle="180deg"

                ></Arrow>
       
            </motion.div>
            <div style={{position:`absolute`, alignItems: `center`, 
            textAlign:`center`, display: `flex` ,
            justifyContent: `center`,
            width: `80vw`,
            maxWidth: `600px` }}>
                <h1 style={ {alignItems: `center`,  display: `flex`,  
                justifyContent: `center`,
                color:`white`, fontSize:`min(8vw,120px)`}}>{value}
                </h1>
            </div>
      
       
        </div>

	</div>
	)
}

export default Inlet;