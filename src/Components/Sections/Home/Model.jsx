import React from "react";

const Model = () => {
  const steps = [
    {
      number: "01",
      title: "Identify Societal Issues",
      description:
        "Pinpoint pressing challenges in our communities and society.",
      image: "/Images/Illustration/HOME_MODEL_1.png",
    },
    {
      number: "02",
      title: "Involve young Minds",
      description:
        "Engage school and college students in the research process.",
      image: "/Images/Illustration/HOME_ABOUT_1.png",
    },
    {
      number: "03",
      title: "Conduct In-Depth Research",
      description:
        "Equip students with research skills to understand, analyze and solve complex issue.",
      image: "/Images/Illustration/HOME_MODEL_3.png",
    },
    {
      number: "04",
      title: "Publish Findings",
      description:
        "Ensure research findings are accessible, relevant and thought-provoking.",
      image: "/Images/Illustration/HOME_MODEL_4.png",
    },
    {
      number: "05",
      title: "Engage in Debates",
      description:
        "Establish platforms like out debate club to refine ideas and develop communication skills through rigorous discussion.",
      image: "/Images/Illustration/HOME_MODEL_5.png",
    },
  ];
  return (
    <div className="mt-12">
      <div className="w-full flex items-center gap-3 justify-center">
        <h2 className="font-body text-3xl font-semibold">Model</h2>
        <img
          src="/Images/Illustration/HOME_MODEL.png"
          alt="Images"
          className="w-12 h-12"
        />
      </div>

      <div className="mt-14 flex justify-around md:flex-col flex-row">
        <div className="flex flex-col md:flex-row items-center justify-between md:px-20">
          <div className="w-9 h-9 rounded-full border border-[#008081] bg-[#ccc] text-[#008081] flex items-center justify-center font-body font-semibold">
            01
          </div>
          <div className="border-dashed border-r-2 md:border-t-2 border-black md:w-[150px] md:h-1 w-1 h-[150px]"></div>
          <div className="w-9 h-9 rounded-full border border-[#008081] bg-[#ccc] text-[#008081] flex items-center justify-center font-body font-semibold">
            02
          </div>
          <div className="border-dashed border-r-2 md:border-t-2 border-black md:w-[150px] md:h-1 w-1 h-[150px]"></div>
          <div className="w-9 h-9 rounded-full border border-[#008081] bg-[#ccc] text-[#008081] flex items-center justify-center font-body font-semibold">
            03
          </div>
          <div className="border-dashed border-r-2 md:border-t-2 border-black md:w-[150px] md:h-1 w-1 h-[150px]"></div>
          <div className="w-9 h-9 rounded-full border border-[#008081] bg-[#ccc] text-[#008081] flex items-center justify-center font-body font-semibold">
            04
          </div>
          <div className="border-dashed border-r-2 md:border-t-2 border-black md:w-[150px] md:h-1 w-1 h-[150px]"></div>
          <div className="w-9 h-9 rounded-full border border-[#008081] bg-[#ccc] text-[#008081] flex items-center justify-center font-body font-semibold">
            05
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center md:mt-7 gap-5 md:gap-0">
          {steps.map((step, index) => (
            <div
              key={index}
              className="w-[250px] md:w-[200px] flex flex-col items-center gap-2 mt-3"
            >
              <img
                src={step.image}
                alt={`Step ${step.number}`}
                className="md:w-[90px] w-[70px]"
              />
              <h2 className="text-xl font-semibold font-body text-center">
                {step.title}
              </h2>
              <p className="font-body text-center">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Model;
