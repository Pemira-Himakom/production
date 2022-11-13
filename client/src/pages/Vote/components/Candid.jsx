import { useDispatch } from "react-redux";
import { useRef } from "react";

import billi from "../../../img/billi.png";
import konang from "../../../img/konang.png";
import ninda from "../../../img/ninda.png";

import { setSelect } from "../../../store/voteSlice";
import $ from 'jquery'

const Candid = props => {
  const dispatch = useDispatch();
  const optionRef = useRef();

  const handleClick = () => {
    const name = props.name;
    const number = optionRef.current.value;
    console.log(name, number);

    dispatch(setSelect({ name, number }));
    scrollToTop();
  };

  let IMG_URL;

  if (props.no === "1") {
    IMG_URL = ninda;
  } else if (props.no === "2") {
    IMG_URL = konang;
  } else {
    IMG_URL = billi;
  }

  
 
  function scrollToTop() {
    $(window).scrollTop(0);
  }

  return (
    <div className='w-80 md:w-72 h-full md:h-[400px] border-4 border-choco-border p-4 pt-9 flex flex-col'>
      <div className='bg-choco border-4 border-choco-border h-[272px]'>
        <div className='relative -translate-y-5 grid place-items-center'>
          <img src={IMG_URL} alt='candidate' className='h-56' />
        </div>
        <div className='flex bg-choco-border relative -translate-y-5'>
          <div className='h-16 w-16 bg-choco flex justify-center items-center font-prata text-[28px] border-[#D4A976] border-[3px] text-choco-border border-y-4'>
            {props.no}
          </div>
          <div className='text-choco font-prata flex justify-center mx-auto items-center text-base'>
            <span className='text-center px-2'>{props.name}</span>
          </div>
        </div>
      </div>
      <div className='justify-self-end'>
        <button
          className='bg-choco text-whiteWeak py-3 font-prata text-xl w-full mt-5 hover:scale-110 duration-200'
          value={props.no}
          ref={optionRef}
          onClick={handleClick}
          id='votebtn'
        >
          Vote
        </button>
      </div>
    </div>
  );
};

export default Candid;
