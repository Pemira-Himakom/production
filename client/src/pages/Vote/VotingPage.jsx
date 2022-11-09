import leftFlower from "../../img/vote/leftFlower.svg";
import rightFlower from "../../img/vote/rightFlower.svg";

// components
import Candid from "./components/Candid";
import { Confirmation } from "./components/Confirmation";
import { useSelector } from "react-redux";
import { selectedName } from "../../store/voteSlice";
import Status from "./components/Status";

const candidates = [
  { no: "1", name: "Kadek Ninda Nandita P", img: "../../../img/ninda.png" },
  { no: "2", name: "Konang Tyagazain N", img: "../../../img/konang.png" },
  { no: "3", name: "Billy Fahd Qodama", img: "../../../img/billi.png" },
];

const VotingPage = () => {
  const isVoted = useSelector(selectedName);

  return (
    <>
      <Status />
        {isVoted && <Confirmation />}
      <div className="bg-[#B4B4B4] relative">
        <img
          src={leftFlower}
          alt="left flower"
          className="absolute top-1/2 -translate-y-1/2 -z-10"
        ></img>
        <img
          src={rightFlower}
          alt="right flower"
          className="absolute right-0 top-1/2 -translate-y-1/2 -z-10"
        ></img>
      </div>

      <div className="w-screen h-fit py-10 md:h-screen flex md:flex-row flex-col justify-center items-center md:gap-x-14 gap-y-10 ">
        {candidates.map((item, index) => (
          <Candid key={index} id={item.no} no={item.no} name={item.name} img={item.img}/>
        ))}
      </div>
    </>
  );
};

export default VotingPage;
