import { FaArrowRight } from "react-icons/fa";
import chowmein from "../assets/chowmein.jpg";
import chef from "../assets/chef-1.jpg";

const About = () => {
  return (
    <div className="section" id="about">
      <div className="grid md:grid-cols-2 items-center mb-10 gap-8">
        <div className="flex flex-col justify-center items-start gap-6">
          <div className="sm:text-3xl text-xl font-bold mb-6">
            The best food in town awaits you
          </div>
          <p className="text-sm opacity-70">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            unde quae error. Aspernatur, fuga id quis velit voluptatem nemo
            nesciunt.
          </p>
          <div className="btn">
            <a href="#" className="text-white text-[0.85rem]">
              Explore more
            </a>
            <FaArrowRight className="text-white" />
          </div>
        </div>
        <div className="md:row-start-1">
          <img src={chowmein} alt="chowmein dish" className="rounded-2xl" />
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <div className="sm:text-3xl text-xl font-bold mb-6">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </div>
          <p className="text-sm opacity-70">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat
            optio est dolores illo aspernatur! Similique a temporibus saepe
            voluptatem vero! Neque unde maxime expedita, aspernatur consectetur
            et totam reiciendis exercitationem!
          </p>
        </div>
        <div className="">
          <img src={chef} alt="chef" className="rounded-2xl" />
        </div>
      </div>
    </div>
  );
};

export default About;
