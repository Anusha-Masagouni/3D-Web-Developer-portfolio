/* eslint-disable no-unused-vars */
import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    dci,
    marolix,
    wipro,
    threejs,
    recipeapp,
    portfolio,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
  ];
  
  const experiences = [
    {
      title: "Tutor",
      company_name: "Digital Career Institute",
      icon: dci,
      iconBg: "#E6DEDD",
      date: "February 2024 - September 2024",
      points: [
        "Provide guidance and mentorship to fellow colleagues, focus on the MERN stack.",
        "Assist students with daily exercises and project work, helping them apply HTML, CSS, JavaScript, Node.js, Express.js, and React in practical applications.",
      ],
    },
    {
      title: "Software Developer",
      company_name: "India/Marolix Technology Solutions Pvt. Ltd.",
      icon: marolix,
      iconBg: "#383E56",
      date: "October 2019 - January 2021",
      points: [
        "Created reusable UI components. I have experience using Promises to facilitate synchronous communication.",
        "Interactions with clients to understand their requirements, and designed UI layouts that prioritize user-friendliness and customer satisfaction.",
        "Experience in converting PSD designs to Responsive Websites using HTML, CSS, and Bootstrap.",
        "My strong command of HTML, CSS, Bootstrap, and JavaScript allows me to develop well-designed responsive websites.",
      ],
    },
    {
      title: "Associate",
      company_name: "India/Wipro Limited",
      icon: wipro,
      iconBg: "#E6DEDD",
      date: "January 2018 - February 2019",
      points: [
        "I have experience in analyzing aerial photographs to determine optimal pickup points for cabs. This involves carefully studying the images to identify areas with the highest density of potential passengers, and strategically positioning the pickup points for maximum eﬃciency and convenience.",
        "In addition to my analytical skills, I demonstrated an ability to maintain team performance in the absence of the team leader.",
        "This requires a strong sense of responsibility, excellent communication skills, and a deep understanding of team dynamics.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "loLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.rem ",
      name: "loLorem ipsum",
      designation: "loLorem ipsum",
      company: "loLorem ipsum",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
      "loLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.rem ",
    name: "loLorem ipsum",
    designation: "loLorem ipsum",
    company: "loLorem ipsum",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "loLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.rem ",
      name: "loLorem ipsum",
      designation: "loLorem ipsum",
      company: "loLorem ipsum",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Recipe App",
      description:
        "A Web Application that allows users to search and browse recipes using the spoonacular API. The app features a variety of components for displaying categories, Popular recipes, and Vegetarian options. Users can navigate between different pages for a smooth and engaging experience.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: recipeapp,
      source_code_link: "https://github.com/Anusha-Masagouni/recipe-app",
    },
    {
      name: "Job IT",
      description:
        "A 3D portfolio is an interactive and immersive way to showcase skills and projects. Users navigate through a dynamic 3D environment, exploring different sections like Overview, Work experience, technologies, and Projects. Represented by engaging 3D models and icons",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: portfolio,
      source_code_link: "https://github.com/Anusha-Masagouni/3D-Web-Developer-portfolio",
    },
   
  ];
  
  export { services, technologies, experiences, testimonials, projects };