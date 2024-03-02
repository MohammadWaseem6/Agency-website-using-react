import { useEffect } from 'react';
import Aboutgrids from '../components/Aboutgrids'
import { aboutgrids } from '../exports'
import Aos from 'aos';
import 'aos/dist/aos.css';
function About() {
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100
    });
  }, []);
  return (
    <section  className='w-full bg-slate-200 flex flex-col lg:flex-row gap-10 lg:gap-20 h-fit px-7 py-4 lg:px-16 lg:py-12'>
      <div  className='flex justify-center items-start flex-col gap-8 lg:w-1/2'>
        <h1 data-aos="zoom-in" data-aos-delay="200" className='text-green-600 font-bold text-6xl'>
          Hosting solution with benefits.
        </h1>
        <p className=' text-slate-950 text-2xl'>
          Turn your ideas into reality with Static. With a lot of powerful features, we guarantee simplicity and clarity.

        </p>
        <div className='flex justify-center items-center gap-7'>
          <div className="flex justify-center items-center gap-7"><button className=" bg-green-800 text-white px-8 py-3 rounded-md text-[18px] hover:bg-black hover:text-white cursor-pointer " data-aos="zoom-in">Read More</button></div>
        </div>
      </div>
      <div className=' flex justify-between items-center w-full lg:w-1/2 flex-wrap'>
        {aboutgrids.map((grid) => (
          <div key={grid.label} className='w-full lg:w-1/2'>
            <Aboutgrids {...grid} />
          </div>
        ))}

      </div>


    </section>
  )
}

export default About