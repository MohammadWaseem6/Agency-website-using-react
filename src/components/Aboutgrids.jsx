import { useEffect } from "react";
import Aos from 'aos';
import 'aos/dist/aos.css';

function Aboutgrids({ icon, text, label, heading }) {
    useEffect(() => {
        Aos.init({
          offset: 200,
          duration: 800,
          easing: 'ease-in-sine',
          delay: 100
        });
      }, []);
    return (
        <div data-aos="slide-up" data-aos-delay="200" className=" flex justify-center items-center gap-5 flex-col bg-white rounded-lg m-2 p-3 lg:p-7">
            <img  src={icon} alt="icon" width={65} height={65} className=" bg-green-400 p-3 rounded-full hover:bg-green-500 cursor-pointer" />
            <h1 className=" text-2xl lg:text-3xl text-center text-green-600 font-semibold">
                SSL Certificate
            </h1>
            <p className=" text-[18px] text-center text-slate-700">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur
            </p>
            <p className="bg-green-800 text-white px-6 py-2 rounded-md text-[16px] hover:bg-black hover:text-white cursor-pointer">
                View More
            </p>
        </div>
    )
}

export default Aboutgrids