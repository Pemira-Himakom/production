import React from 'react'
import {ReactComponent as Arrow} from '../../img/team/arrow.svg'
import Pm from '../../img/team/pm.webp'
import Be from '../../img/team/be.webp'
import Uiux from '../../img/team/uiux.webp'

export default function Kuli() {
  return (
    <div className='h-screen bg-[#21201D] px-8 py-16 font-prata space-y-10'>
        <div className='flex justify-evenly px-[32rem]'>
            <Arrow/>
            <h1 className='prim-color text-3xl'>Crew</h1>
            <Arrow/>
        </div>

        <div className='teambox'>
            <div className='flex flex-row justify-evenly h-full text-[#ffff] text-lg'>
                {/* <div className='border-r-[3px] border-[#D4A976]'> */}
                <div className='w-[20%] h-fit space-y-5 mt-8'>
                    <img src={Pm} alt='Pm' className='rounded-tl-2xl'/>
                    <h1>Project Manager</h1>
                </div>
                <div className='h-full border-[2px] border-[#D4A976]'/>
                
                <div className='w-[20%] h-fit self-end space-y-5 mb-8'>
                    <h1>UI/UX</h1>
                    <img src={Uiux} alt='Uiux'/>
                </div>
                <div className='h-full border-[2px] border-[#D4A976]'/>

                <div className='w-[20%] h-fit space-y-5 mt-8'>
                    <img src={Pm} alt='Fe'/>
                    <h1>Frontend</h1>
                </div>
                <div className='h-full border-[2px] border-[#D4A976]'/>

                <div className='w-[20%] h-fit self-end space-y-5 mb-8'>
                    <h1>Backend</h1>
                    <img src={Be} alt='Be' className='rounded-br-2xl'/>
                </div>
                
                {/* </div> */}
            </div>
        </div>
    </div>
  )
}

const tim = [
    
]
