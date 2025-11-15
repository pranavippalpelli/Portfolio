import React from 'react';
import ReactTypingEffect from 'react-typing-effect';

const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32 flex justify-center items-center text-center"
    >
      <div className="max-w-3xl">
        {/* Greeting */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
          Hi, I am
        </h1>

        {/* Name */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
          Pranav Ippalpelli
        </h2>

        {/* Typing Effect */}
        <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
          <span className="text-white">I am a </span>
          <ReactTypingEffect
            text={[
              'Fullstack Web Developer',
              'MERN & Django Developer',
              'Problem Solver',
              'Tech Enthusiast',
              'Passionate Coder',
            ]}
            speed={100}
            eraseSpeed={50}
            typingDelay={500}
            eraseDelay={2000}
            cursorRenderer={(cursor) => (
              <span className="text-[#8245ec]">{cursor}</span>
            )}
          />
        </h3>

        {/* About Paragraph */}
        <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
          I’m a Full-Stack Web Developer skilled in building dynamic and scalable web applications using MERN and Django stacks. 
          I combine clean frontend design with robust backend development to deliver seamless digital experiences. 
          Passionate about solving real-world problems through code, I continuously explore modern technologies to create efficient and user-focused solutions.
        </p>

        {/* Resume Button */}
        <a
          href="https://drive.google.com/file/d/1SBf5Yq3mArmuWFo1nNqRyGL9zWoZwrqR/view?usp=sharing"
          
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
          style={{
            background: 'linear-gradient(90deg, #8245ec, #a855f7)',
            boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
          }}
        >
          DOWNLOAD CV
        </a>
      </div>
    </section>
  );
};

export default About;

