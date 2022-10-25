import React from 'react'
import bar from '../../img/bar.png'
import Timeline from './Timeline';
import Candidates from './Candidates';
import Faq from './FAQ';
import About from './About';

export default function Home() {
  return (
    <div className='mb-[-1px] w-screen'>
      {/* title */}
      <header className="flex flex-row items-end px-48 h-screen shadow-inner 
                         bg-fixed bg-center bg-cover bg-img-lg bg-img-sm">
        <div className="h-fit title-sm title-lg prim-color inline-flex gap-24">
          <img className='' src={bar} alt='bar'/>
          <h1 className='tracking-wide flex items-end font-prata pb-48'>Pemilihan Raya Himakom 2022</h1>
        </div>
      </header>
      <About/>
      <Timeline/>
      <Candidates/>
      <Faq/>

    </div>
  )
}
