import React from 'react'
import logocircle  from '../../img/team/himacircle.svg'
import Kuli from './Kuli'

export default function Webteam() {
  return (
    <>
        <div className='webteam h-screen'>
        <h1 className='text-5xl lg:text-8xl font-prata prim-color pl-48 pt-48 relative top-[50px]'>Meet our <br></br>Website Team</h1>
        <div className='w-[75%] h-[37%] bg-[#18150E]'>
            <img className='absolute left-[65%] w-[20%]' src={logocircle}></img>
        </div>
        </div>
        <Kuli/>
    </>
  )
}
