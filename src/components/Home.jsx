import { FaArrowRight } from "react-icons/fa";
import { GiHamburger, GiOpenedFoodCan } from "react-icons/gi";
import { IoIosIceCream } from "react-icons/io";
import { FaPizzaSlice } from "react-icons/fa";
import hero from "../assets/hero.jpg";

const Home = () => {
  return (
    <div
      className="section flex items-center xl:justify-center justify-start flex-wrap gap-8"
      id="home"
    >
      <div className="flex flex-col items-start gap-10">
        <div className="sm:text-[2.5rem] text-[1.8rem] font-bold">
          Delicious <br /> Food is Awaiting <br /> you
        </div>
        <div className="btn cursor-pointer">
          <a href="#">View Menu</a>
          <FaArrowRight />
        </div>
        <div className="flex gap-2 md:gap-6">
          <div className="bg-black w-10 h-10 text-white flex items-center justify-center text-xl md:text-2xl rounded-md">
            <GiHamburger />
          </div>
          <div className="bg-black w-10 h-10 text-white flex items-center justify-center text-xl md:text-2xl rounded-md">
            <IoIosIceCream />
          </div>
          <div className="bg-black w-10 h-10 text-white flex items-center justify-center text-xl md:text-2xl rounded-md">
            <FaPizzaSlice />
          </div>
          <div className="bg-black w-10 h-10 text-white flex items-center justify-center text-xl md:text-2xl rounded-md">
            <GiOpenedFoodCan />
          </div>
        </div>
      </div>
      <div className="min-w-[200px] md:w-[600px] justify-self-center">
        <img src={hero} alt="hero image" className="rounded-2xl" />
      </div>
    </div>
  );
};

export default Home;
