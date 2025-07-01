import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Section = ({ title, description, isVisible, toggleVisibility }) => {
  return (
    <div className="border border-gray-300 shadow-md rounded-xl p-5 mb-5 mx-5 bg-white transition-all duration-300">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
        <button
          onClick={toggleVisibility}
          className="text-gray-600 hover:text-black transition-colors"
        >
          {isVisible ? <FaChevronUp /> : <FaChevronDown />}
        </button>
      </div>
      {isVisible && (
        <p className="mt-3 text-gray-700 leading-relaxed">{description}</p>
      )}
    </div>
  );
};

const InstaMart = () => {
  const [visibleSection, setVisibleSection] = useState("");

  return (
    <div className="max-w-3xl mx-auto mt-10 mb-20">
      <h1 className="text-4xl font-bold text-center text-orange-600 mb-10">
        Welcome to Instamart
      </h1>

      <Section
        title="About Instamart"
        description="Instamart is your on-demand grocery delivery partner, bringing essentials to your doorstep in just minutes. We prioritize freshness, speed, and convenience."
        isVisible={visibleSection === "about"}
        toggleVisibility={() =>
          setVisibleSection(visibleSection === "about" ? "" : "about")
        }
      />

      <Section
        title="Our Team"
        description="We're a group of passionate problem-solvers, engineers, and designers focused on revolutionizing quick commerce. Our team blends tech and logistics for a seamless experience."
        isVisible={visibleSection === "team"}
        toggleVisibility={() =>
          setVisibleSection(visibleSection === "team" ? "" : "team")
        }
      />

      <Section
        title="Careers"
        description="Join our mission to transform everyday shopping. At Instamart, we offer roles across tech, operations, and marketing with fast-paced growth and real impact."
        isVisible={visibleSection === "careers"}
        toggleVisibility={() =>
          setVisibleSection(visibleSection === "careers" ? "" : "careers")
        }
      />
    </div>
  );
};

export default InstaMart;




