import React from "react";
import EnsureCard from "../../Card/EnsureCard";

const About = () => {
  return (
    <div>
      <div className="flex items-center gap-3 w-full justify-center">
        <h2 className="font-body font-semibold text-3xl">About Us</h2>
        <img
          src="/Images/Illustration/HOME_ABOUT.png"
          alt="About Illustration"
          className="w-16 h-16"
        />
      </div>

      <div className="flex mt-10 flex-col md:flex-row">
        <div className="md:w-1/2 w-full flex flex-col items-center justify-between lg:py-12 py-4 gap-16">
          <div>
            <h3 className="font-body font-semibold text-xl">Our Vision :-</h3>
            <p className="w-[90%] md:w-[70%] mt-3 font-body lg:text-lg text-base mx-auto">
              Schrodinger’s Cat Think Tank envisions a world where young minds
              are empowered to tackle complex societal issues through research,
              critical thinking, and responsible decision-making. We aim to
              inspire and equip future leaders with skills in leadership,
              research, and innovation to foster a more just and equitable
              society.
            </p>
          </div>
          <div className="">
            <h3 className="font-body font-semibold text-xl">Our Mission :-</h3>
            <p className="w-[90%] md:w-[70%] mt-3 font-body lg:text-lg text-base mx-auto">
              Our mission is to empower young people by engaging them in the
              research process, cultivating their analytical and leadership
              abilities. We believe that by providing a platform where students
              can explore, debate, and address societal issues, they will
              develop into informed, solution-oriented citizens ready to
              contribute meaningfully to their communities and beyond.
            </p>
          </div>
        </div>
        {/* Here the Image place inside the container */}
        <div className="md:w-1/2 w-full border border-green-500"></div>
      </div>

      <div className="mt-10">
        <h2 className="font-body font-semibold text-xl">We Ensure that :-</h2>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-20 mt-8">
          <EnsureCard
            image={"/Images/Illustration/HOME_ABOUT_1.png"}
            mainContent={
              "Young Minds have a platform to explore and address real-world issues."
            }
            subContent={
              "We amplify the voices of young people, ensuring their perspectives shape solutions to societal challenges."
            }
          />
          <EnsureCard
            image={"/Images/Illustration/HOME_ABOUT_2.png"}
            mainContent={
              "Young Minds have a platform to explore and address real-world issues."
            }
            subContent={
              "We amplify the voices of young people, ensuring their perspectives shape solutions to societal challenges."
            }
          />
          <EnsureCard
            image={"/Images/Illustration/HOME_ABOUT_3.png"}
            mainContent={
              "Young Minds have a platform to explore and address real-world issues."
            }
            subContent={
              "We amplify the voices of young people, ensuring their perspectives shape solutions to societal challenges."
            }
          />
        </div>
      </div>
    </div>
  );
};

export default About;
