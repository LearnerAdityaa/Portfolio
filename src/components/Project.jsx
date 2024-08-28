import React from "react";
import AAJAPADHAI from "../assets/Aajapadhai.webp";
import Rent from "../assets/Rent.webp";
import Weather from "../assets/Weather.png";
const Projects = [
  {
    id: 1,
    name: "AAJA PADHAI",
    technologies: "MERN Stack",
    image: AAJAPADHAI,
    github: "https://github.com/LearnerAdityaa/Aaja-Padhai",
    Visit: "#",
  },
  {
    id: 2,
    name: "Hotel viewer",
    technologies: "MERN Stack",
    image: Rent,
    github: "https://github.com/LearnerAdityaa/Wanderlust",
    Visit: "https://wanderlust-u8cy.onrender.com/listings",
  },

  {
    id: 3,
    name: "Weather App(only react)",
    technologies: "React Js",
    image: Weather,
    github: "https://github.com/LearnerAdityaa/Wanderlust",
    Visit: "https://weather-app-mauve-pi-99.vercel.app/",
  },
];

const Project = () => {
  return (
    <div className="bg-black text-white py-20" id="project">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 p-6 rounded-lg hover:shadow-lg 
            transform transition-transform duration-300 hover:scale-105"
            >
              <img
                src={project.image}
                alt={project.name}
                className="rounded-lg mb-4 
              w-full h-48 object-cover"
              />
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-400 mb-4">{project.technologies}</p>
              <div className="mx-6  space-x-20">
                <a
                  href={project.github}
                  className="inline-block bg-gradient-to-r 
              from-green-400 to-blue-500 text-white px-4 py-2 rounded-full"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                <a
                  href={project.Visit}
                  className="inline-block bg-gradient-to-r 
              from-green-400 to-blue-500 text-white px-4 py-2 rounded-full"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
