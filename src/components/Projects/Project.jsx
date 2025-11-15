import { motion } from "framer-motion";
import Travelmate from '../../assets/TravelMate.png';
import Ecommerce from '../../assets/Ecommerce.png';
const projects = [
  {
    id: 1,
    title: "TravelMate – MERN Stack Hotel & Resort Booking Platform",
    description: "Developed a full-stack platform enabling users to browse, review, and book hotels and resorts, while property owners can monitor bookings, manage user interactions, and enforce secure role-based access with authentication.",
    features: [
      "Secure authentication with role-based access control for users and property owners",
      "RESTful API architecture with real-time updates for reviews and reservations",
      "Scalable backend with optimized MongoDB schemas"
    ],
    techStack: "HTML, CSS, Bootstrap, JavaScript, React.js, Node.js, Express.js, MongoDB, JWT, RESTful APIs",
    contribution: "Independently built complete application including frontend UI/UX, backend API development, authentication, and database schema optimization.",
    view: "https://travel-mate-ivory.vercel.app/",
    github: "https://github.com/pranavippalpelli/TravelMate",
    image: Travelmate,
  },
  {
    "id": 2,
    title: "Ecommerce Website – Full-Stack E-commerce Web App",
    description: "Built a fully functional e-commerce platform offering product listings, shopping cart, order management, and secure online purchases.",
    features: [
      "User authentication with email verification",
      "Cart, order management, and product browsing with fast state updates",
      "Admin dashboard for CRUD operations on products and orders"
    ],
    techStack: "HTML, CSS, JavaScript, jQuery, Bootstrap, Django",
    contribution: "Developed complete front-end and back-end architecture independently, ensuring secure authentication and seamless shopping workflow.",
    view: "https://shopcart-r4ai.onrender.com/",
    github: "https://github.com/pranavippalpelli/EcommerceWebsite",
    image: Ecommerce,
  },
  
];

export default function Project() {
  const handleViewClick = (viewUrl) => {
    if (!viewUrl) return;
    window.open(viewUrl.startsWith("http") ? viewUrl : `https://${viewUrl}`, "_blank");
  };

  return (
    <section id="project" className="py-12 md:py-20 px-4 max-w-7xl mx-auto" >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-5xl font-bold mb-8 md:mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
      >
        Featured Projects
        <p className="text-gray-400 mt-4 text-lg font-semibold">
        Showcasing the technologies and tools I’ve mastered through hands-on projects.
      </p>
      </motion.h2>

      <div className="flex flex-col gap-12">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.01 }}
            
            className="flex flex-col md:flex-row items-center bg-gray-800/50 rounded-2xl border border-white shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] transition-transform duration-300 hover:scale-[1.03] hover:shadow-[0_0_30px_3px_rgba(130,69,236,0.5)] overflow-hidden"

          >
            <div className="md:w-1/2 flex justify-center items-center p-4 w-full">
              <div className="relative w-full h-64 md:h-[345px] overflow-hidden rounded-xl group shadow-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform duration-500"
                  // className="object-contain w-full h-full transition-transform duration-500"

                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20" />
              </div>
            </div>

            <div className="md:w-1/2 p-8 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-3 text-white">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>

                <ul className="list-disc list-inside text-gray-400 mb-4 space-y-1 text-sm">
                  {project.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>

                <p className="text-gray-400 text-sm mb-2">
                  <span className="font-semibold text-gray-200">Tech Stack:</span> {project.techStack}
                </p>

                <p className="text-gray-400 text-sm">
                  <span className="font-semibold text-gray-200">Contribution:</span>{" "}
                  {project.contribution}
                </p>
              </div>

              <div className="flex gap-4 justify-end mt-6">
                <button
                  onClick={() => handleViewClick(project.view)}
                  className={`text-sm px-5 py-2 rounded-full transition-colors duration-300 ${
                    project.view
                      ? "bg-gray-700 text-white border border-gray-600 hover:bg-gray-900"
                      : "bg-gray-400 text-gray-800 cursor-not-allowed"
                  }`}
                >
                  {project.view ? "View Project" : "Coming Soon"}
                </button>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm px-5 py-2 bg-gray-700 text-white border border-gray-600 rounded-full hover:bg-gray-900 transition-colors"
                >
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
