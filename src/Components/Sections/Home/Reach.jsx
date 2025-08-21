import React from "react";

const Reach = () => {
  return (
    <div className="mt-12 flex flex-col md:flex-row font-body flex-between">
      <div className="md:w-[40%] w-[90%]"></div>
      <div className="md:w-[40%] w-[90%] flex flex-col items-start justify-between gap-10">
        <div className="px-7 min-h-[20vh]">
          <h2 className="font-semibold text-xl">Our Impact :-</h2>
          <p className="text-justify mt-3">
            By empowering young researchers and publishing actionable studies,
            we are shaping a generation of leaders who are well-equipped to make
            a positive difference.
          </p>
        </div>
        <div className="px-7 min-h-[20vh]">
          <h2 className="font-semibold text-xl">Our Reach :-</h2>
          <p className="text-justify mt-3">
            We actively engage with students across schools and colleges,
            building partnerships with educational institutions and communities
            across India.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Reach;
