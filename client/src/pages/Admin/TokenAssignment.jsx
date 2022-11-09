import { useState } from "react";
import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { assign } from "../../api/assign";
import {
  resetAssigned,
  resetUIState,
  selectedUI,
  selectIsAssigned,
  setError,
  setIsAssigned,
} from "../../store/uiSlice";
import close from "../../img/close.svg";

function TokenAssignment() {
  const inputNIMRef = useRef();
  const inputTokenRef = useRef();
  const dispatch = useDispatch();
  const isAssigned = useSelector(selectIsAssigned);
  const [status, setStatus] = useState();
  const ui = useSelector(selectedUI);

  const handleAssign = async e => {
    e.preventDefault();
    const nim = inputNIMRef.current.value;

    const token = inputTokenRef.current.value;
    const result = await assign({ nim, token });

    if (result.status) {
      dispatch(setIsAssigned());
    } else {
      dispatch(setError(result.message));
    }

    setStatus(true);
    console.log(result);
    
    setTimeout(() => {
      dispatch(resetUIState());
      setStatus(false)
    }, 1000);
  };

  const handleChange = e => {
    dispatch(resetAssigned());
  };

  const handleClose = () => {
    dispatch(resetAssigned());
  };

  const failStatus = (
    <div className='flex justify-center z-0 bg-red-400 py-1 text-center absolute w-full'>
      <span className=''>{ui.error.message}</span>
      <button className='absolute right-4' onClick={handleClose}>
        <img src={close} className='w-6 cursor-pointer z-20' alt='close' />
      </button>
    </div>
  );

  const successStatus = (
    <div className='bg-green-400 py-1 text-center absolute w-full'>
      <span className=''>Success to assign token</span>
      <button className='absolute right-4' onClick={handleClose}>
        <img src={close} className='w-6 cursor-pointer z-20' alt='close' />
      </button>
    </div>
  );

  return (
    <>
      {status && isAssigned && successStatus}
      {status && !isAssigned && failStatus}
      <div className='h-[95vh] flex items-center font-prata bg-whiteWeak'>
        <form className='border-[15px] bg-[#E6E6E6] flex flex-col border-choco-weak outline outline-4 outline-choco min-w-[40vw] w-fit min-h-[60vh] py-20 px-8 mx-auto'>
          <h3 className='flex justify-center items-center '>
            <span className='text-choco text-4xl'>Assign Token</span>
          </h3>
          <div className='mt-16 xl:mt-28'>
            <input
              placeholder='NIM'
              type='text'
              className='w-full text-xl placeholder-choco placeholder-opacity-100 placeholder:text-xl outline-none bg-transparent border-b-4 border-choco'
              ref={inputNIMRef}
              onChange={handleChange}
            />
          </div>
          <div className='mt-12 xl:mt-16'>
            <input
              type='text'
              placeholder='Token'
              className='w-full text-xl placeholder-choco placeholder-opacity-100 placeholder:text-xl outline-none bg-transparent border-b-4 border-choco'
              ref={inputTokenRef}
              onChange={handleChange}
            />
          </div>
          <div className='mt-14 xl:mt-20 relative flex justify-end'>
            <button
              type='submit'
              onClick={handleAssign}
              className='bg-choco text-whiteWeak px-10 py-2'
            >
              Assign
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default TokenAssignment;
