import { useDispatch, useSelector } from "react-redux";
import { setUserLogout } from "../../../store/authSlice";
import meme1 from "../../../img/meme/1.png";
import meme2 from "../../../img/meme/2.png";
import meme3 from "../../../img/meme/3.png";
import meme4 from "../../../img/meme/4.png";
import meme5 from "../../../img/meme/5.png";
import meme6 from "../../../img/meme/6.png";
import meme7 from "../../../img/meme/7.png";
import meme8 from "../../../img/meme/8.png";
import meme9 from "../../../img/meme/9.png";
import { useNavigate } from "react-router-dom";
import { resetUIState, selectedIsVoted } from "../../../store/uiSlice";

const memeCollections = [
  meme1,
  meme2,
  meme3,
  meme4,
  meme5,
  meme6,
  meme7,
  meme8,
  meme9,
];

const Meme = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(setUserLogout());
    navigate("/vote", { replace: true });
    dispatch(resetUIState());
  };

  const isVoted = useSelector(selectedIsVoted);

  if (!isVoted) {
    navigate("/vote", { replace: true });
  }

  const number = Math.round(Math.random() * 100) % 9;
  const MEME_IMG = memeCollections[number];

  return (
    <div className="h-screen font-prata w-screen flex justify-center items-center">
      <form className="border-[15px] bg-[#E6E6E6] flex flex-col items-center justify-between border-choco-weak outline outline-4 outline-choco min-w-[40vw] w-fit min-h-[60vh] py-20 px-8 mx-auto">
        <h1 className="text-4xl text-choco">Thank You</h1>
        <div className="max-w-[140px] max-h-[150px]">
          <img src={MEME_IMG} alt="meme" />
        </div>
        <button
          className="bg-choco w-full py-1 text-white"
          onClick={handleLogout}
        >
          Logout
        </button>
      </form>
    </div>
  );
};

export default Meme;
