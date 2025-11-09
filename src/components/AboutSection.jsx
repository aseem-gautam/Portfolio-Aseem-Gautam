import { Briefcase } from "lucide-react";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-12">
        About <span className="text-primary">Me</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-6xl">
        <div className="bg-auto rounded-2xl p-10 flex flex-col justify-center items-center shadow-lg w-full h-[450px]">
          <h2 className="text-xl md:text-2xl font-bold mb-12"> My Experience</h2>
          <div className="flex items-center gap-4 mb-6">
            <img
              src="/gurkha-logo.png"
              alt="Gurkha Technology"
              className="w-20 h-20 rounded-xl object-cover"
            />
            <div>
              <h3 className="text-3xl font-bold"><a href="https://gurkhatech.com/" target="_blank" rel="noopener noreferrer">Gurkha Technology</a></h3>
              <p className="flex items-center gap-2">
                <Briefcase size={18} className="text-primary" />
                <p className="text-m md:text-lg text-muted-foreground ">October 2025 – Present</p>
              </p>
            </div>
          </div>

          
          <p className="text-lg md:text-xl text-muted-foreground max-2-2 mx-auto">
            Currently working as an <span className="text-primary font-bold">intern </span>at <span className="text-primary font-bold">Gurkha Technology</span>, 
            where I contribute to building responsive and modern web applications. 
            This experience has enhanced my skills in React, UI design, and teamwork.
          </p>
        </div>

        <div className="relative group w-full h-[450px] rounded-2xl overflow-hidden shadow-lg">
          <img
            src="/me2.jpg"
            alt="Profile"
            className="w-full h-half object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
          />

          <a
            href="/Aseem Gautam.pdf"
            target="_blank" rel="noopener noreferrer"
            download
            className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          >
            <button className="cosmic-button">
              Download CV
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}; 

export default AboutSection;