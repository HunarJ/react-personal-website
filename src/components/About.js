import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              O mně
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Dobrý den, vítám vás na mém osobním webu.</p>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Et harum
              quidem rerum facilis est et expedita distinctio. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat. Nulla quis diam. Nunc tincidunt ante
              vitae massa. Cras elementum. Duis viverra diam non justo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
