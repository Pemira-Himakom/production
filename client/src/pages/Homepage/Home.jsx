import React, { useEffect } from "react";
import Bar from "../../img/bar.svg";
import Timeline from "./Timeline";
import Candidates from "./Candidates";
import FAQ from "./FAQ";
import About from "./About";
import Footer from "./Footer";
import Nav from "../../components/Navbar"

import $ from 'jquery';
import Aos from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 700 });
  }, []);

  $(window).scroll(function(){
    if($(document).scrollTop() > 800){//Here 200 may be not be exactly 200px
      $('#Nav').hide("swing");
    }

    if($(document).scrollTop() < 800){//Here 200 may be not be exactly 200px
      $('#Nav').show("swing");
    }
  });
  return (
    <div className='mb-[-1px] w-screen'>
      <div id="Nav">
        <Nav/>
      </div>
      <header
        className='flex flex-row items-center lg:items-end lg:px-48 h-screen shadow-inner bg-fixed bg-center bg-cover bg-img-lg bg-img-sm justify-center lg:justify-start'
      >
        <div
          data-aos='fade-in'
          className='h-fit title-sm title-lg prim-color flex gap-24'
        >
          <img className='hidden lg:block' src={Bar} alt='bar' />
          <h1 className='tracking-wide flex items-end text-center lg:text-left lg:pb-36 font-prata'>
            Pemilihan Raya Himakom 2022
          </h1>
        </div>
      </header>
      <About />
      <div className='block'>
        <Timeline />
      </div>

      <Candidates />
      <FAQ />
      <Footer />
    </div>
  );
}
