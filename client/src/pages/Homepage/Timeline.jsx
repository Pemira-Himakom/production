import React from 'react'

// import img and icons
import {ReactComponent as Star1} from '../../img/star1.svg'
import {ReactComponent as Star2} from '../../img/star2.svg'


//import components 
import Timeline_lg from '../../components/timeline_lg'


export default function Timeline() {
  return (
    <div className='bg-[#21201D] h-[90vh] w-screen pt-24 prim-color font-prata timeline-bg'>
        <div className='flex w-screen justify-center mb-10'>
            <div className='h-fit flex gap-x-10'>
                <Star1/>
                <h1 className='text-2xl lg:text-5xl grid items-center'>Timeline</h1>
                <Star2/>
            </div>
        </div>
        {/* Start Timeline Item */}
        {/* <div className='process-wrapper '>
            <div className='progress-bar-container'>
                
                <ul>
                    <li className='step'>
                        <div className='step-inner'>
                            <h1>17-28 Okt</h1>
                            <h1>Open Registration</h1>
                            <div className='circle'><img src={Star3} alt="" /></div>
                        </div>
                    </li>

                    <li className='step'>
                        <div className='step-inner'>
                            <h1>17-28 Okt</h1>
                            <h1>Open Registration</h1>
                            <div className='circle'><img src={Star3} alt="" /></div>
                        </div>
                    </li>

                    <li className='step'>
                        <div className='step-inner'>
                            <h1>17-28 Okt</h1>
                            <h1>Open Registration</h1>
                            <div className='circle'><img src={Star3} alt="" /></div>
                        </div>
                    </li>

                    <li className='step'>
                        <div className='step-inner'>
                            <h1>17-28 Okt</h1>
                            <h1>Open Registration</h1>
                            <div className='circle'><img src={Star3} alt="" /></div>
                        </div>
                    </li>

                    <li className='step a
                    ctive'><div className='step-inner'>
                            <h1>17-28 Okt</h1>
                            <h1>Open Registration</h1>
                            <div className='circle'><img src={Star3} alt="" /></div>
                  
                     
                      </div></li>
                    <li className='step'>
                        <div className='step-inner'>
                            <h1>17-28 Okt</h1>
                            <h1>Open Registration</h1>
                            <div className='circle'><img src={Star3} alt="" /></div>
                        </div>
                    </li>

                    
                </ul>

                <div id='line'>
                    <GoTriangleRight size={35} className='absolute right-[98%] bottom-[-15px]'/>
                    <GoTriangleLeft size={35} className='absolute left-[98%] bottom-[-15px]'/>
                    
                </div>

            </div>
        </div> */}

        <div className='pt-2 w-screen'>
            <Timeline_lg/>
        </div>

        <div className='flex justify-center'>
        <div className='eclipse1'/>

        </div>
    </div>
  )
}
