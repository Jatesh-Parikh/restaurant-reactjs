import { FaFacebookF } from "react-icons/fa";
import { FaTwitter, FaInstagram } from "react-icons/fa6";
import { MdOutlinePhone, MdOutlineEmail, MdLocationOn } from "react-icons/md";

const Footer = () => {
  return (
    <div className="section mb-12">
      <div className="grid sm:grid-cols-2 gap-4 sm:gap-8">
        <div className="mb-8">
          <div className="text-xl font-semibold mb-3">FoodZone</div>
          <p className="text-sm mb-4 opacity-80">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla
            autem molestias quo rem minima consequuntur asperiores commodi ipsam
            veniam natus!
          </p>
          <div className="flex items-center justify-evenly">
            <span className="">Follow Us</span>
            <div className="h-[2px] w-12 bg-black"></div>
            <div className="flex items-center justify-center gap-4">
              <a href="#" className="">
                <FaFacebookF />
              </a>
              <a href="#">
                <FaInstagram />
              </a>
              <a href="#">
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3">
          <div className="mb-8">
            <span className="font-semibold text-[1.1rem] mb-4 inline-block">
              Quick Links
            </span>
            <div className="mb-2">
              <a href="">Home</a>
            </div>
            <div className="mb-2">
              <a href="">About</a>
            </div>
            <div className="mb-2">
              <a href="">Recipes</a>
            </div>
            <div className="mb-2">
              <a href="">Contact</a>
            </div>
          </div>
          <div className="mb-8">
            <span className="font-semibold text-[1.1rem] mb-4 inline-block">
              Explore
            </span>
            <div className="mb-2">
              <a href="">Drinks</a>
            </div>
            <div className="mb-2">
              <a href="">Burger</a>
            </div>
            <div className="mb-2">
              <a href="">Salads</a>
            </div>
            <div className="mb-2">
              <a href="">Dinner</a>
            </div>
          </div>
          <div className="mb-8 sm:hidden lg:block">
            <span className="font-semibold text-[1.1rem] mb-4 inline-block">
              Contact
            </span>
            <div className="mb-2">
              <a href="">
                <MdOutlinePhone className="inline mr-4" />
                +91 2223334455
              </a>
            </div>
            <div className="mb-2">
              <a href="">
                <MdOutlineEmail className="inline mr-4" />
                jk@email.com
              </a>
            </div>
            <div className="mb-2">
              <a href="">
                <MdLocationOn className="inline mr-4" />
                JK Street, Mumbai <br />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center my-6 gap-8">
        <div className="opacity-70 text-xs">Copyright &#169; 2024.</div>
        <div className="font-semibold text-md">
          JK Restaurant,
          <br className="sm:hidden" /> Since 1919.
        </div>
        <div className="text-xs opacity-70"> All rights reserved.</div>
      </div>
    </div>
  );
};

export default Footer;
