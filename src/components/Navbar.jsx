import { appleImg, bagImg, searchImg } from "../utils";

import { navLists } from "../constants";

const Navbar = () => {
  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
      <div className="flex w-full screen-max-width">
        <img
          src={appleImg}
          alt="apple logo is not found!"
          width={14}
          height={18}
        />

        <div className="flex flex-1 justify-center max-sm:hidden ">
          {navLists.map((nav) => (
            <div
              key={nav}
              className="px-5 text-lg cursor-pointer text-gray hover:text-white transition-all max-lg:text-2xl"
            >
              {nav}
            </div>
          ))}
        </div>

        <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
          <img
            src={searchImg}
            alt="search image is not found!"
            width={18}
            height={18}
          />
          <img src={bagImg} alt="bag image not found!" height={18} />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
