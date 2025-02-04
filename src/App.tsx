import { AnimatePresence, motion } from 'framer-motion';
import {
  BookOpen,
  Brain,
  Code,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  Rocket
} from 'lucide-react';
import { useState } from 'react';
import {
  BackgroundGradient,
  Modal,
  MovingBorderBtn,
  ParticlesBackground,
  ScrollParallax,
} from './components/ui/aceternity';
import pic from './images/mypic.jpg';

function App() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const techStack = [
    { name: 'Spring Boot', icon: <Rocket className="w-6 h-6" /> },
    { name: 'React', icon: <Code className="w-6 h-6" /> },
    { name: 'Python', icon: <BookOpen className="w-6 h-6" /> },
    { name: 'ML & AI', icon: <Brain className="w-6 h-6" /> },
  ];

  const projects = [
    {
      title: 'E-commerce backend',
      description:
        'A complete backend built with Spring Boot inlcudes jwt for authentication and payment gateway integration',
      image:
        'https://media.istockphoto.com/id/1972284692/photo/digital-cart-icon-on-future-tech-background-online-shopping-evolution-futuristic-shopping.webp?a=1&b=1&s=612x612&w=0&k=20&c=K7G451e5Hrxv-Akc7jFFvO7qdDLbt_zwxoS2Fh1AR9o=',
      githubContent:
        'https://github.com/Poorna-chandra2000/e-commerce-springboot.git',
      tech: [
        'React',
        'Spring Boot',
        'Jwt',
        'Postgres',
        'file handling',
        'Payment Gateway',
      ],
    },
    {
      title: 'Learning Management System backend',
      description:
        'A complete backend built with Spring Boot inlcudes jwt for authentication,and production ready features',
      image:
        'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      githubContent:
        'https://github.com/Poorna-chandra2000/Lms-spring_boot.git',
      tech: [
        'Spring Boot',
        'Jwt',
        'spring security',
        'Postgres',
        'Production ready features',
      ],
    },
    {
      title: 'Job-Application(Microservices)',
      description:
        'A complete backend built with Spring Boot Microservices inlcudes jwt for authentication,Open-feign,Kafka,Api-Gateway,CircuitBreaker,Zipkin',
      image:
        'https://learn.microsoft.com/en-us/azure/architecture/includes/images/microservices-logical.png',
      githubContent:
        'https://github.com/Poorna-chandra2000/Job-App-Microservces-project.git',
      tech: [
        'Spring Boot',
        'Microservices',
        'kafka',
        'Jwt',
        'Docker',
        'Postgres',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white relative">
      <ParticlesBackground />

      {/* Hero Section */}
      <motion.div
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <ScrollParallax className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-transparent to-blue-600/10 backdrop-blur-3xl" />
        </ScrollParallax>

        <div className="container mx-auto px-4 z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <BackgroundGradient className="rounded-full">
              <motion.img
                src={pic}
                alt="Profile"
                className="w-64 h-64 rounded-full cursor-pointer object-cover object-right-top filter grayscale hover:filter-none"
                onClick={() => setIsVideoModalOpen(true)}
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              />
            </BackgroundGradient>

            <motion.div
              className="text-center md:text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                Visionary Leader & Educator
              </h1>
              <p className="text-xl text-purple-200 mb-6">
                Self-taught Developer | Udemy Instructor | Tech Enthusiast
              </p>
              <div className="flex gap-4 justify-center md:justify-start">
                <MovingBorderBtn className="p-2">
                  <a href="https://github.com/Poorna-chandra2000"><Github className="w-6 h-6" /></a>
                </MovingBorderBtn>
                <MovingBorderBtn className="p-2">
                  <a href="https://www.linkedin.com/in/poorna-chandra260120/overlay/about-this-profile/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BSrBLO5BOT%2Bq3sYj09%2FW17A%3D%3D"><Linkedin className="w-6 h-6" /></a>
                </MovingBorderBtn>
                <MovingBorderBtn className="p-2">
                  <a href="mailto:poornachandra473@gmail.com"><Mail className="w-6 h-6" /></a>
                </MovingBorderBtn>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* About Section */}
      <motion.section
        className="py-20 relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <BackgroundGradient containerClassName="max-w-3xl mx-auto">
            <div className="bg-black/90 rounded-3xl p-8">
              <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                About Me
              </h2>
              <div className="space-y-6">
                <p className="text-lg leading-relaxed">
                  I believe in leading, not following. With mastery in Spring
                  Boot and React, I excel in building powerful backend systems
                  and intuitive user interfaces. Currently, I'm delving into
                  Deep Learning and Computer Vision—fields that ignite my
                  passion for innovation and cutting-edge technology. 🚀
                </p>
                <p className="text-lg leading-relaxed">
                  As an educator at heart, I simplify backend development,
                  breaking down complex concepts into easy-to-grasp lessons,
                  empowering students to learn with clarity and confidence.
                </p>
                <p className="text-lg leading-relaxed">
                  My motto: "Why be a slave when you can be a king?" I am my own
                  brand—focused on ownership, innovation, and leadership.
                </p>
              </div>
            </div>
          </BackgroundGradient>
        </div>
      </motion.section>

      {/* Tech Stack */}
      <motion.section
        className="py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
            Tech Stack
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {techStack.map((tech, index) => (
              <BackgroundGradient
                key={tech.name}
                containerClassName="w-full h-full"
              >
                <motion.div
                  className="flex flex-col items-center p-6 bg-black/90 rounded-3xl h-full min-h-[150px] justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {tech.icon}
                  <span className="mt-2">{tech.name}</span>
                </motion.div>
              </BackgroundGradient>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        className="py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <BackgroundGradient
                key={index}
                containerClassName="w-full h-full"
              >
                <motion.div
                  className="bg-black/90 rounded-3xl overflow-hidden cursor-pointer h-full"
                  onClick={() => setSelectedProject(index)}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="aspect-video">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-300">{project.description}</p>
                    <div className="mt-4 flex gap-1">
                      {project.tech.map((stack, i) => (
                        <span
                          key={i}
                          className="px-1 py-1 w-fit h-fit bg-purple-500/20 rounded-full text-sm"
                        >
                          {stack}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </BackgroundGradient>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Education Section */}
      <motion.section
        className="py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
            Education & Teaching
          </h2>
          <div className="max-w-3xl mx-auto space-y-8">
            <BackgroundGradient>
              <motion.div
                className="flex items-center gap-6 p-6 bg-black/90 rounded-3xl"
                whileHover={{ scale: 1.02 }}
              >
                <GraduationCap className="w-12 h-12 text-purple-400" />
                <div>
                  <h3 className="text-xl font-bold">Udemy Instructor</h3>
                  <p className="text-gray-300">
                    Teaching Spring Boot, Microservices, and React to thousands
                    of students worldwide
                  </p>
                </div>
              </motion.div>
            </BackgroundGradient>

            <BackgroundGradient>
              <motion.div
                className="flex items-center gap-6 p-6 bg-black/90 rounded-3xl"
                whileHover={{ scale: 1.02 }}
              >
                <BookOpen className="w-12 h-12 text-purple-400" />
                <div>
                  <h3 className="text-xl font-bold">Self-Taught Developer</h3>
                  <p className="text-gray-300">
                    Mastered multiple technologies through dedication and
                    continuous learning
                  </p>
                </div>
              </motion.div>
            </BackgroundGradient>
          </div>
        </div>
      </motion.section>

      {/* Modals */}
      <AnimatePresence mode="wait">
        {isVideoModalOpen && (
          <Modal
            key="video-modal"
            isOpen={isVideoModalOpen}
            onClose={() => setIsVideoModalOpen(false)}
          >
            <div className="aspect-video">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Introduction Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </Modal>
        )}

        {selectedProject !== null && (
          <Modal
            key="project-modal"
            isOpen={selectedProject !== null}
            onClose={() => setSelectedProject(null)}
          >
            <div className="text-white">
              <h2 className="text-2xl font-bold mb-4">
                {projects[selectedProject].title}
              </h2>
              <div className="prose prose-invert max-w-none hover:underline">
                <a href={projects[selectedProject].githubContent}>Github</a>
              </div>
            </div>
          </Modal>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
