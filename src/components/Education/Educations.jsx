// import React from "react";
// import { experiences } from "../../constants"; // Import your data

// const Experience = () => {
//   return (
//     <section
//       id="experience"
//       className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2"
//     >
//       {/* Section Title */}
//       <div className="text-center mb-16">
//         <h2 className="text-4xl font-bold text-white">EXPERIENCE</h2>
//         <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
//         <p className="text-gray-400 mt-4 text-lg font-semibold">
//           A collection of my work experience and the roles I have taken in
//           various organizations
//         </p>
//       </div>

//       {/* Experience Timeline */}
//       <div className="relative">
//         {/* Vertical line */}
//         <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:-translate-x-0 w-1 bg-white h-full"></div>

//         {/* Experience Entries */}
//         {experiences.map((experience, index) => (
//           <div
//             key={experience.id}
//             className={`flex flex-col sm:flex-row items-center mb-16 ${
//               index % 2 === 0 ? "sm:justify-end" : "sm:justify-start"
//             }`}
//           >
//             {/* Timeline Circle */}
//             <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 bg-gray-400 border-4 border-[#8245ec] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-10">
//               <img
//                 src={experience.img}
//                 alt={experience.company}
//                 className="w-full h-full object-cover rounded-full"
//               />
//             </div>

//             {/* Content Section */}
//             <div
//               className={`w-full sm:max-w-md p-4 sm:p-8 rounded-2xl shadow-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] ${
//                 index % 2 === 0 ? "sm:ml-0" : "sm:mr-0"
//               } sm:ml-44 sm:mr-44 ml-8 transform transition-transform duration-300 hover:scale-105`}
//             >
//               {/* Flex container for image and text */}
//               <div className="flex items-center space-x-6">
//                 {/* Company Logo/Image */}
//                 <div className="w-16 h-16 bg-white rounded-md overflow-hidden">
//                   <img
//                     src={experience.img}
//                     alt={experience.company}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>

//                 {/* Role, Company Name, and Date */}
//                 <div className="flex flex-col justify-between">
//                   <div>
//                     <h3 className="text-xl sm:text-2xl font-semibold text-white">
//                       {experience.role}
//                     </h3>
//                     <h4 className="text-md sm:text-sm text-gray-300">
//                       {experience.company}
//                     </h4>
//                   </div>
//                   {/* Date at the bottom */}
//                   <p className="text-sm text-gray-500 mt-2">{experience.date}</p>
//                 </div>
//               </div>

//               <p className="mt-4 text-gray-400">{experience.desc}</p>
//               <div className="mt-4">
//                 <h5 className="font-medium text-white">Skills:</h5>
//                 <ul className="flex flex-wrap mt-2">
//                   {experience.skills.map((skill, index) => (
//                     <li
//                       key={index}
//                       className="bg-[#8245ec] text-gray-300 px-4 py-1 text-xs sm:text-sm rounded-lg mr-2 mb-2 border border-gray-400"
//                     >
//                       {skill}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Experience;
// import React from "react";
// import { motion } from "framer-motion";
// import { FaAward, FaBookOpen } from "react-icons/fa";
// import { IoIosSchool } from "react-icons/io";

// const Experience = () => {
//   const educationData = [
//     {
//       period: "2020-2026",
//       degree: "Bachelor of Engineering in Computer Science",
//       institution: "Dr. DY Patil Institute of Technology, Pimpri, Pune",
//       highlights: [
//         "CGPA : 8.84/10.0",
//         "Relevant Coursework : C++, Object Oriented Programming, Data Structures and Algorithms, Web Development, Database Management System",
//       ],
//       icon: <IoIosSchool className="text-3xl" />,
//     },
//   ];

//   return (
//     <motion.section
//       initial={{ opacity: 0 }}
//       whileInView={{ opacity: 1 }}
//       transition={{ duration: 1 }}
//       viewport={{ once: true }}
//       className="py-20 px-6 bg-gradient-to-t from-gray-900 to-black relative overflow-hidden"
//     >
//       {/* Background glow circles */}
//       <div className="absolute top-0 left-0 w-full h-full opacity-20">
//         <div className="absolute top-20 right-20 w-40 h-40 bg-purple-600 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-float"></div>
//         <div className="absolute bottom-10 left-10 w-60 h-60 bg-blue-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-float-delay"></div>
//       </div>

//       {/* Content Container */}
//       <div className="max-w-6xl mx-auto relative z-10">
//         {/* Section Header */}
//         <motion.div
//           initial={{ y: 50 }}
//           whileInView={{ y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 inline-block">
//             Academic Journey
//           </h2>
//           <p className="text-gray-400 max-w-2xl mx-auto">
//             My formal education and specialized training
//           </p>
//         </motion.div>

//         {/* Education & Certifications Grid */}
//         <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
//           {educationData.map((item, index) => (
//             <motion.div
//               key={index}
//               initial={{ y: 50, opacity: 0 }}
//               whileInView={{ y: 0, opacity: 1 }}
//               transition={{ duration: 0.6, delay: index * 0.2 }}
//               viewport={{ once: true }}
//               className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 backdrop-blur-sm hover:shadow-lg hover:shadow-purple-500/20 hover:border-purple-500 transition-all duration-500 group"
//             >
//               <div className="flex items-start gap-6">
//                 <div className="p-4 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg group-hover:rotate-6 transition-transform duration-500">
//                   {item.icon}
//                 </div>
//                 <div className="flex-1">
//                   <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
//                     <span className="text-blue-400 font-medium">
//                       {item.period}
//                     </span>
//                     <span className="px-3 py-1 bg-blue-900/50 text-blue-300 rounded-full text-sm">
//                       Pursuing
//                     </span>
//                   </div>
//                   <h3 className="text-2xl font-bold text-white mt-2 mb-1">
//                     {item.degree}
//                   </h3>
//                   <p className="text-gray-300 mb-4">{item.institution}</p>

//                   {/* Highlights */}
//                   <div className="mt-6 space-y-3">
//                     {item.highlights?.map((point, i) => (
//                       <motion.div
//                         key={i}
//                         initial={{ x: -20 }}
//                         whileInView={{ x: 0 }}
//                         transition={{ duration: 0.4, delay: i * 0.1 }}
//                         viewport={{ once: true }}
//                         className="flex items-start gap-3 bg-gray-900/50 p-3 rounded-lg border border-gray-800 hover:bg-gray-800/70 transition-colors"
//                       >
//                         <div className="p-1.5 bg-indigo-500/10 rounded-full">
//                           <FaAward className="text-xs mt-0.5 text-indigo-300" />
//                         </div>
//                         <span className="text-gray-300 text-sm">
//                           {point.includes(":") ? (
//                             <>
//                               <span className="font-bold">
//                                 {point.split(":")[0]}:
//                               </span>
//                               <span>{point.split(":").slice(1).join(":")}</span>
//                             </>
//                           ) : (
//                             point
//                           )}
//                         </span>
//                       </motion.div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           ))}

//           {/* Certifications Section */}
//           <motion.div
//             initial={{ y: 50, opacity: 0 }}
//             whileInView={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.6, delay: 0.4 }}
//             viewport={{ once: true }}
//             className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 backdrop-blur-sm hover:shadow-lg hover:shadow-blue-500/20 hover:border-blue-500 transition-all duration-500"
//           >
//             <div className="flex items-start gap-6">
//               <div className="p-4 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg">
//                 <FaBookOpen className="text-3xl" />
//               </div>
//               <div>
//                 <h3 className="text-2xl font-bold text-white mb-4">
//                   Certifications & Courses
//                 </h3>
//                 <div className="space-y-3">
//                   <div className="flex items-center gap-3 bg-gray-900/50 p-3 rounded-lg border border-gray-800">
//                     <div className="p-1.5 bg-blue-500/10 rounded-full">
//                       <FaAward className="text-xs text-blue-300" />
//                     </div>
//                     <span className="text-gray-300 text-sm">
//                       <b>C++ Course :</b> Beginner to Advanced.
//                     </span>
//                   </div>
//                   <div className="flex items-center gap-3 bg-gray-900/50 p-3 rounded-lg border border-gray-800">
//                     <div className="p-1.5 bg-blue-500/10 rounded-full">
//                       <FaAward className="text-xs text-blue-300" />
//                     </div>
//                     <span className="text-gray-300 text-sm">
//                       <b>Full Stack Web Development Course :</b> Experience with
//                       PostgreSQL/MongoDB, Express.js, React.js and Node.js.
//                     </span>
//                   </div>
//                   <div className="flex items-center gap-3 bg-gray-900/50 p-3 rounded-lg border border-gray-800">
//                     <div className="p-1.5 bg-blue-500/10 rounded-full">
//                       <FaAward className="text-xs text-blue-300" />
//                     </div>
//                     <span className="text-gray-300 text-sm">
//                       <b>Data Structures and Algorithm Course :</b> Problem
//                       Solving and DSA Course by Love Babbar.
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </motion.section>
//   );
// };

// export default Experience;
import React from "react";
import { FaAward, FaBookOpen } from "react-icons/fa";
import { IoIosSchool } from "react-icons/io";

const Educations = () => {
  const educationData = [
    {
      period: "2020-2026",
      degree: "Bachelor of Engineering in Computer Science",
      institution: "Padmashree Dr. Vithalrao Vikhe Patil Collage of Engineering, Ahilyanagar",
      highlights: [
        "CGPA : 7.78/10.0",
        "Relevant Coursework : C++, Object Oriented Programming, Data Structures and Algorithms, Web Development, Database Management System",
      ],
      icon: <IoIosSchool className="text-3xl" />,
    },
  ];

  return (
    // <section className="py-20 px-6 bg-gradient-to-t from-gray-900 to-black relative overflow-hidden">
    <section className="py-20 px-6 relative overflow-hidden" id="educations">

      {/* Background glow circles */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
        <div className="absolute top-20 right-20 w-40 h-40 bg-purple-600 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-60 h-60 bg-blue-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse"></div>
      </div>

      {/* Content Container */}
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 inline-block">
            Academic Journey
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My formal education and specialized training
          </p>
        </div>

        {/* Education & Certifications Grid */}
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
          {educationData.map((item, index) => (
            <div
              key={index}
              className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 backdrop-blur-sm hover:shadow-lg hover:shadow-purple-500/20 hover:border-purple-500 transition-all duration-500 group"
            >
              <div className="flex items-start gap-6">
                <div className="p-4 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg transform group-hover:rotate-6 transition-transform duration-500">
                  {item.icon}
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <span className="text-blue-400 font-medium">
                      {item.period}
                    </span>
                    <span className="px-3 py-1 bg-blue-900/50 text-blue-300 rounded-full text-sm">
                      Pursuing
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mt-2 mb-1">
                    {item.degree}
                  </h3>
                  <p className="text-gray-300 mb-4">{item.institution}</p>

                  {/* Highlights */}
                  <div className="mt-6 space-y-3">
                    {item.highlights?.map((point, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 bg-gray-900/50 p-3 rounded-lg border border-gray-800 hover:bg-gray-800/70 transition-colors"
                      >
                        <div className="p-1.5 bg-indigo-500/10 rounded-full">
                          <FaAward className="text-xs mt-0.5 text-indigo-300" />
                        </div>
                        <span className="text-gray-300 text-sm">
                          {point.includes(":") ? (
                            <>
                              <span className="font-bold">
                                {point.split(":")[0]}:
                              </span>{" "}
                              {point.split(":").slice(1).join(":")}
                            </>
                          ) : (
                            point
                          )}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Certifications Section */}
          <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 backdrop-blur-sm hover:shadow-lg hover:shadow-blue-500/20 hover:border-blue-500 transition-all duration-500">
            <div className="flex items-start gap-6">
              <div className="p-4 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg">
                <FaBookOpen className="text-3xl" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Certifications & Courses
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 bg-gray-900/50 p-3 rounded-lg border border-gray-800 hover:bg-gray-800/70 transition-colors">
                    <div className="p-1.5 bg-blue-500/10 rounded-full">
                      <FaAward className="text-xs text-blue-300" />
                    </div>
                    <span className="text-gray-300 text-sm">
                      <b>Python Course :</b> Beginner to Advanced.
                    </span>
                  </div>

                  <div className="flex items-center gap-3 bg-gray-900/50 p-3 rounded-lg border border-gray-800 hover:bg-gray-800/70 transition-colors">
                    <div className="p-1.5 bg-blue-500/10 rounded-full">
                      <FaAward className="text-xs text-blue-300" />
                    </div>
                    <span className="text-gray-300 text-sm">
                      <b>Full Stack Web Development :</b> Experience with MERN
                     (MongoDB, Express.js, React.js, Node.js) & Django .
                    </span>
                  </div>

                  <div className="flex items-center gap-3 bg-gray-900/50 p-3 rounded-lg border border-gray-800 hover:bg-gray-800/70 transition-colors">
                    <div className="p-1.5 bg-blue-500/10 rounded-full">
                      <FaAward className="text-xs text-blue-300" />
                    </div>
                    <span className="text-gray-300 text-sm">
                      <b>Data Structures and Algorithms :</b> Problem Solving and
                      DSA Course by Love Babbar.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Educations;
