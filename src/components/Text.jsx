// import gsap from "gsap";
// import { useEffect, useRef } from "react";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);
import Button from "../Harman/Button";

const Text = () => {

  return (
    <div className="font-jost mt-10 bg-black text-white p-4 sm:p-6 md:p-8 rounded-tl-[7rem] rounded-tr-[7rem]   h-[720px] mb-[-200px]">

{/* md:rounded-tr-[7rem] */}
{/* md:rounded-tl-[7rem]  */}
{/* sm:rounded-tl-[6rem] */}
{/* sm:rounded-tr-[6rem]  */}

      <h4 className="px-4 sm:px-8 mb-2 md:px-12 text-primary text-lg mt-[8.4rem]">
        What we do
      </h4>
      <div
        id="paragraph"
        className="px-4 sm:px-8 md:px-12 mb-8 sm:mb-10 md:mb-12 text-3xl sm:text-4xl md:text-6xl"
        
      >
        <p className="para">Welcome ot the Developer Student Club at</p>
        <p className="para">Chitkara University, Rajpure,Punjab, We are</p>
        <p className="para">a community group for students from any </p>
        <p className="para">academic background in their, undergraduate</p>
        <p className="para">or gradute term. Thank You For Joining Us.</p>
      </div>
      <div className="ml-14">
      <Button Text={"I AM READY TO EXPLORE"} textColor={"black"}/>
      </div>
    </div>
  
  );
};

export default Text;
