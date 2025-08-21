import React from "react";
import FeedbackCard from "../../Card/FeedbackCard";

const Feedback = () => {
  const details = [
    {
      name: "John Doe",
      role: "Researcher",
      content:
        "This platform has significantly enhanced my research skills and provided me with invaluable insights into societal issues.",
      image: "https://picsum.photos/seed/picsum/300/150",
    },
    {
      name: "Jane Smith",
      role: "Student",
      content:
        "Participating in the research process has been an eye-opening experience, allowing me to contribute to meaningful change.",
      image: "https://picsum.photos/seed/picsum/300/150",
    },
    {
      name: "Alice Johnson",
      role: "Educator",
      content:
        "The collaboration with students has fostered a new generation of thinkers and problem solvers.",
      image: "https://picsum.photos/seed/picsum/300/150",
    },
  ];
  return (
    <div className="font-body">
      <div className="flex w-full items-center justify-center gap-2">
        <h2 className="font-body text-3xl font-semibold">Feedback</h2>
        <img
          src="/Images/Illustration/HOME_FEEDBACK.png"
          alt="Feedback Icon"
          className="w-12 h-12"
        />
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 mt-10">
        {details.map((detail) => (
          <FeedbackCard
            name={detail.name}
            role={detail.role}
            content={detail.content}
            image={detail.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Feedback;
