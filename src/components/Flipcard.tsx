'use client'

import {useState} from 'react'
import { motion } from 'framer-motion'

const Flipcard = () => {
    const [isFlipped,setIsFlipped]=useState(false)
    const [isAnimating,setIsAnimating]=useState(false)
    function handleFlip(){
        if(!isAnimating){
            setIsFlipped(!isFlipped)
            setIsAnimating(true)
        }
    }
    const [isFlipped1,setIsFlipped1]=useState(false)
    const [isAnimating1,setIsAnimating1]=useState(false)
    function handleFlip1(){
        if(!isAnimating1){
            setIsFlipped1(!isFlipped1)
            setIsAnimating1(true)
        }
    }
    const [isFlipped2,setIsFlipped2]=useState(false)
    const [isAnimating2,setIsAnimating2]=useState(false)
    function handleFlip2(){
        if(!isAnimating2){
            setIsFlipped2(!isFlipped2)
            setIsAnimating2(true)
        }
    }
  return (
        <div className='flex items-center justify-center bg-black h-[260px] gap-[90px] cursor-pointer'>
            <div className='flip-card w-[400px] h-[260px] rounded-md' onClick={handleFlip}>
                <h1 className='text-2xl font-bold py-4 mt-[-70px]'>Hour of Code</h1>
                <motion.div className='flip-card-inner w-[400px] h-[260px]' initial={false} animate={{rotateY: isFlipped ? 180 : 360}} transition={{duration: 0.6, animationDirection: "normal"}} onAnimationComplete={() => setIsAnimating(false)} >
                    <div className='flip-card-front w-[400px] h-[260px] bg-cover border-[1px] text-white rounded-lg p-4' style={{backgroundImage: `url("/img2.jpg")`}}>
                    </div>
                    <div className='flip-card-back w-[400px] h-[260px] bg-cover border-[1px] text-white rounded-lg p-4 relative' style={{ backgroundImage: `url(/img2.jpg)` }}>
                        <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div> 
                        <p className='relative mt-10'>The CSR team puts their words to action, and brings smiles across the faces of the underprivileged society. The team makes the activities as interactive as possible.</p>
                    </div>
                </motion.div>
            </div>
        <div className='flip-card w-[400px] h-[260px] rounded-md' onClick={handleFlip1}>
            <h1 className='text-2xl font-bold py-4 mt-[-70px]'>Code Anytime</h1>
            <motion.div className='flip-card-inner w-[400px] h-[260px]' initial={false} animate={{rotateY: isFlipped1 ? 180 : 360}} transition={{duration: 0.6, animationDirection: "normal"}} onAnimationComplete={() => setIsAnimating1(false)} >
                <div className='flip-card-front w-[400px] h-[260px] bg-cover border-[1px] text-white rounded-lg p-4' style={{backgroundImage: `url("/img3.jpg")`}}>
                </div>
                <div className='flip-card-back w-[400px] h-[260px] bg-cover border-[1px] text-white rounded-lg p-4' style={{backgroundImage: `url(/img3.jpg)`}}>
                    <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div> 
                    <p className='relative mt-10'>Code Anytime is our round-the-year initiative to encourage free-spirited coding among beginners to amplify their passion for programming.</p>
                </div>
            </motion.div>
        </div>
        <div className='flip-card w-[400px] h-[260px] rounded-md' onClick={handleFlip2}>
            <h1 className='text-2xl font-bold py-4 mt-[-70px] '>21 Days of Code</h1>
            <motion.div className='flip-card-inner w-[400px] h-[260px]' initial={false} animate={{rotateY: isFlipped2 ? 180 : 360}} transition={{duration: 0.6, animationDirection: "normal"}} onAnimationComplete={() => setIsAnimating2(false)} >
                <div className='flip-card-front w-[400px] h-[260px] bg-cover border-[1px] text-white rounded-lg p-4' style={{backgroundImage: `url("/img4.jpg")`}}>
                </div>
                <div className='flip-card-back w-[400px] h-[260px] bg-cover border-[1px] text-white rounded-lg p-4' style={{backgroundImage: `url(/img4.jpg)`}}>
                    <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div> 
                    <p className='relative mt-10'>We launched 21 Days of Code to promote the environment for competitive programming and instil coding as second nature and a daily habit for 21 regular days.</p>
                </div>
            </motion.div>
        </div>
    </div>
  )
}

export default Flipcard