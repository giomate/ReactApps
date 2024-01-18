

import React from 'react'
//import React, { useState, useRef } from 'react';

import Arrow from './arrow'
import  './diverter.css';

import { motion } from "framer-motion";



const Diffusor  =({color,period,value})=> {
    

	
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
	<div style={diverterStyle}  className='diffusorContainer'>
        <div style={outletStyle} className='diffusorGroup'>
            <div className='diffusorText'
            style={{display:`flex`, flexDirection:`column`,
        verticalAlign:`top`}}
            >
            <h1 style={{position:`relative`, color:`white`,fontSize:`8vw`,
             bottom:`25%`}}
            >{value}</h1>
            </div>
            
            <motion.div style={{position:`absolute`, top:`50%`}}
                initial={{ y: `10vw`,opacity:1 }}
                animate={{ y:0 , opacity:0 }}
                transition={{ ease: "easeOut", duration: period ,repeat:Infinity}}
                >
                <Arrow
                    color={color}
    //width={`${height}px`}
                    width="4vw"
                    angle="270deg"

                ></Arrow>
       
            </motion.div>
       
       
        </div>
	</div>
	)
}

export default Diffusor;