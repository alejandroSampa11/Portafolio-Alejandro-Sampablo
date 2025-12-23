// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import profilePhoto from "./assets/alejandro-profile.jpeg";
import johnDeere from "./assets/john-deere-swe.jpeg";
import hackmty from "./assets/hackmty.jpeg";
import hackmty2 from "./assets/hackmty2.jpeg";
import teaching from "./assets/teaching.jpeg";
import competitive from "./assets/competitive.jpeg";
import lem1 from "./assets/lem1.jpeg";
import lem2 from "./assets/lem2.jpeg";
import lem3 from "./assets/lem3.jpeg";
import { useState } from "react";


export default function PortfolioPage() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [currentHackmtyIndex, setCurrentHackmtyIndex] = useState(0);
    const leadershipImages = [lem1, lem2, lem3];
    const hackmtyImages = [hackmty, hackmty2];

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % leadershipImages.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + leadershipImages.length) % leadershipImages.length);
    };

    const nextHackmtyImage = () => {
        setCurrentHackmtyIndex((prev) => (prev + 1) % hackmtyImages.length);
    };

    const prevHackmtyImage = () => {
        setCurrentHackmtyIndex((prev) => (prev - 1 + hackmtyImages.length) % hackmtyImages.length);
    };
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
            {/* Header */}
            <header className="flex justify-between items-center p-6 max-w-6xl mx-auto">
                <h1 className="text-2xl font-bold tracking-tight">Alejandro Sampablo</h1>
                <nav className="flex gap-6 text-gray-300">
                    <a href="#about" className="hover:text-white transition">About</a>
                    <a href="#experience" className="hover:text-white transition">Experience</a>
                    <a href="#projects" className="hover:text-white transition">Projects</a>
                    <a href="#contact" className="hover:text-white transition">Contact</a>
                </nav>
            </header>

            {/* Hero Section */}
            <motion.section
                className="py-24 px-6"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
                    {/* Foto de perfil */}
                    <motion.div
                        className="md:w-1/3"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <img
                            src={profilePhoto}
                            alt="Alejandro Sampablo"
                            className="w-64 h-64 rounded-3xl object-cover shadow-2xl shadow-indigo-500/30 mx-auto"
                        />
                    </motion.div>

                    {/* Contenido */}
                    <div className="md:w-2/3 text-center md:text-left">
                        <h2 className="text-4xl md:text-6xl font-bold mb-4">
                            Hi, I'm <span className="text-indigo-400">Alejandro</span>{" "}
                            <motion.span
                                className="inline-block"
                                animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
                                transition={{
                                    duration: 2.5,
                                    repeat: Infinity,
                                    repeatDelay: 1,
                                    ease: "easeInOut"
                                }}
                            >
                                👋
                            </motion.span>
                        </h2>
                        <p className="text-lg md:text-xl text-gray-400 mb-6">
                            Full-Stack Engineer building scalable distributed systems and modern web applications.
                            Passionate about clean architecture, performance optimization, and developer experience.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-6 justify-center md:justify-start">
                            {['React', 'TypeScript', 'Node.js', 'AWS', 'Docker', 'Microservices'].map((tech) => (
                                <span key={tech} className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-sm">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* About Section */}
            <section id="about" className="py-20 max-w-5xl mx-auto px-6">
                <motion.h3
                    className="text-3xl font-semibold mb-12 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    About Me
                </motion.h3>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Texto principal */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <p className="text-gray-300 text-lg leading-relaxed mb-6">
                            I'm a passionate software engineer with <span className="text-indigo-400 font-semibold">2+ years</span> of experience
                            building scalable web applications. I specialize in React, .NET, and cloud technologies,
                            always focused on creating user-centric solutions.
                        </p>
                        <p className="text-gray-300 text-lg leading-relaxed mb-6">
                            When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects,
                            or sharing knowledge with the developer community.
                        </p>

                        {/* Botón CTA */}
                        <motion.a
                            href="/resume.pdf"
                            className="inline-flex items-center gap-2 bg-indigo-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-indigo-600 transition"
                            whileHover={{ scale: 1.05 }}
                        >
                            <span>Download Resume</span>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                        </motion.a>
                    </motion.div>

                    {/* Skills o estadísticas */}
                    <motion.div
                        className="space-y-6"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        <h4 className="text-xl font-semibold text-indigo-400 mb-4">Technologies I love</h4>
                        <div className="grid grid-cols-3 gap-4">
                            {['React', 'JavaScript', '.NET', 'TypeScript', 'Node.js', 'AWS'].map((tech) => (
                                <div key={tech} className="bg-gray-800 rounded-lg p-3 text-center text-sm font-medium">
                                    {tech}
                                </div>
                            ))}
                        </div>

                        <div className="pt-4">
                            <h4 className="text-xl font-semibold text-indigo-400 mb-4">Quick Stats</h4>
                            <div className="space-y-3">
                                <div className="flex justify-between">
                                    <span className="text-gray-300">Projects Completed</span>
                                    <span className="font-semibold">15+</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-300">Years of Experience</span>
                                    <span className="font-semibold">3+</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-300">Happy Clients</span>
                                    <span className="font-semibold">10+</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section id="experience" className="py-20 bg-gray-800/10">
                <div className="max-w-6xl mx-auto px-6">
                    <motion.h3
                        className="text-3xl font-semibold mb-12 text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        Professional Experience
                    </motion.h3>

                    <motion.div
                        className="bg-gray-900/50 rounded-2xl p-8 border border-gray-800"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                            <div>
                                <h4 className="text-2xl font-semibold text-indigo-400 mb-1">
                                    Software Engineer Intern 🦌
                                </h4>
                                <p className="text-xl text-gray-300">John Deere</p>
                                <p className="text-gray-400">July 2024 - Present</p>
                            </div>
                        </div>

                        <p className="text-gray-300 text-lg leading-relaxed mb-6">
                            Designed and developed a business application, taking ownership of both frontend and backend implementation
                            to ensure seamless functionality and user experience.
                        </p>

                        <div className="relative rounded-xl overflow-hidden mb-6">
                            <img
                                src={johnDeere}
                                alt="John Deere manufacturing facility"
                                className="w-full h-64 object-cover"
                                style={{ objectPosition: '50% 35%' }}
                            />

                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <h5 className="text-lg font-semibold text-indigo-400 mb-3">Highlights</h5>
                                <ul className="space-y-2 text-gray-300">
                                    <li className="flex items-start gap-2">
                                        <span className="text-green-400 mt-1">✓</span>
                                        <span>Built user-friendly apps for assembly guidance</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-green-400 mt-1">✓</span>
                                        <span>Increased production efficiency by 20%</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-green-400 mt-1">✓</span>
                                        <span>Reduced assembly errors with quality control features</span>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h5 className="text-lg font-semibold text-indigo-400 mb-3">Technologies</h5>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {['React', 'TypeScript', '.NET Core', 'SQL Server', 'Azure', 'Docker', 'GraphQL'].map((tech) => (
                                        <span key={tech} className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="text-gray-300 text-sm space-y-1">
                                    <p>• Serving 1000+ operators with daily assembly guidance</p>
                                    <p>• Improved production efficiency by 25% across facilities</p>
                                    <p>• 20% faster assembly process</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>


            {/* Projects Section */}
            {/* <section id="projects" className="py-20 bg-gray-800/30">
                <motion.h3
                    className="text-3xl font-semibold mb-10 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                >
                    Featured Projects
                </motion.h3>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
                    {[
                        {
                            title: "E-Commerce Microservices Platform",
                            description: "Distributed system handling 10k+ daily transactions with React, Node.js, Docker, and AWS ECS. Implemented event-driven architecture and achieved 99.9% uptime.",
                            tech: ["React", "Node.js", "PostgreSQL", "Redis", "AWS"],
                            github: "https://github.com/username/ecommerce-platform",
                            live: "https://platform-demo.com"
                        },
                        {
                            title: "Real-time Analytics Dashboard",
                            description: "Built with React, TypeScript, and WebSockets. Processes 1M+ events daily with real-time data visualization and automated alerting system.",
                            tech: ["TypeScript", "React", "WebSockets", "D3.js", "MongoDB"],
                            github: "https://github.com/username/analytics-dashboard",
                            live: "https://analytics-demo.com"
                        },
                        {
                            title: "Developer Tools CLI",
                            description: "Open-source CLI tool with 500+ GitHub stars. Automates deployment workflows and integrates with CI/CD pipelines. Written in Node.js.",
                            tech: ["Node.js", "TypeScript", "Jest", "GitHub Actions"],
                            github: "https://github.com/username/dev-tools-cli",
                            npm: "https://npmjs.com/package/dev-tools"
                        }
                    ].map((project, index) => (
                        <motion.div
                            key={index}
                            className="bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-indigo-500/20 transition cursor-pointer border border-gray-800"
                            whileHover={{ y: -10 }}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.2 }}
                        >
                            <div className="h-40 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-xl mb-4 flex items-center justify-center">
                                <div className="text-4xl">🚀</div>
                            </div>
                            <h4 className="text-xl font-semibold mb-2">{project.title}</h4>
                            <p className="text-gray-400 mb-4 text-sm">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-1 mb-4">
                                {project.tech.map((tech) => (
                                    <span key={tech} className="px-2 py-1 bg-gray-800 text-gray-300 rounded text-xs">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex gap-3">
                                <a href={project.github} className="text-indigo-400 hover:underline text-sm">
                                    GitHub →
                                </a>
                                {project.live && (
                                    <a href={project.live} className="text-green-400 hover:underline text-sm">
                                        Live Demo →
                                    </a>
                                )}
                                {project.npm && (
                                    <a href={project.npm} className="text-red-400 hover:underline text-sm">
                                        NPM →
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section> */}

            {/* Hackathons & Activities Section */}
            <section className="py-20 bg-gray-800/20">
                <div className="max-w-6xl mx-auto px-6">
                    <motion.h3
                        className="text-3xl font-semibold mb-12 text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        Hackathons & Activities
                    </motion.h3>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Hackathon 1 */}
                        <motion.div
                            className="bg-gray-900/50 rounded-xl p-6 border border-gray-800"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-12 h-12 bg-indigo-500/20 rounded-lg flex items-center justify-center">
                                </div>
                                <div>
                                    <h4 className="text-xl font-semibold text-indigo-400">HackMty 2024 & 2025</h4>
                                    <p className="text-gray-400 text-sm">AI-Powered Credit Card Application</p>
                                </div>
                            </div>
                            <p className="text-gray-300 mb-4">
                                Developed an intelligent credit card application platform for Banorte using AI to streamline
                                the approval process. Built machine learning models to assess creditworthiness and created
                                an intuitive user interface for seamless application experience.
                            </p>

                            {/* Carrusel de imágenes de HackMty */}
                            <div className="relative rounded-lg overflow-hidden mb-4">
                                <img
                                    src={hackmtyImages[currentHackmtyIndex]}
                                    alt={`HackMty - Image ${currentHackmtyIndex + 1}`}
                                    className="w-full h-48 object-cover transition-all duration-300"
                                    style={{ objectPosition: '50% 20%' }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end justify-between">
                                    <div className="p-4 text-white">
                                        <p className="text-sm opacity-90">
                                            HackMty {currentHackmtyIndex === 0 ? '2024' : '2025'} - Team
                                        </p>
                                    </div>

                                    {/* Controles del carrusel */}
                                    <div className="flex gap-2 p-4">
                                        <button
                                            onClick={prevHackmtyImage}
                                            className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition"
                                        >
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                            </svg>
                                        </button>
                                        <button
                                            onClick={nextHackmtyImage}
                                            className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition"
                                        >
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>

                                {/* Indicadores de puntos */}
                                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2">
                                    {hackmtyImages.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setCurrentHackmtyIndex(index)}
                                            className={`w-2 h-2 rounded-full transition ${index === currentHackmtyIndex ? 'bg-white' : 'bg-white/50'
                                                }`}
                                        />
                                    ))}
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {['React', 'Python', 'TensorFlow', 'Node.js', 'PostgreSQL'].map((tech) => (
                                    <span key={tech} className="px-2 py-1 bg-gray-800 text-gray-300 rounded text-xs">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>

                        {/* Competitive Programming */}
                        <motion.div
                            className="bg-gray-900/50 rounded-xl p-6 border border-gray-800"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center">
                                </div>
                                <div>
                                    <h4 className="text-xl font-semibold text-orange-400">Competitive Programming</h4>
                                    <p className="text-gray-400 text-sm">ICPC & Online Judge Competitions</p>
                                </div>
                            </div>
                            <p className="text-gray-300 mb-4">
                                Active participant in competitive programming contests including ICPC regional competitions,
                                Codeforces, and LeetCode challenges. Specialized in algorithms, data structures, and
                                mathematical problem solving under time constraints.
                            </p>
                            {/* Imagen del hackathon */}
                            <div className="relative rounded-lg overflow-hidden mb-4">
                                <img
                                    src={competitive}
                                    alt=""
                                    className="w-full h-48 object-cover"
                                    style={{ objectPosition: '50% 50%' }}
                                />
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {['C++', 'Algorithms', 'Data Structures', 'Graph Theory', 'Dynamic Programming'].map((tech) => (
                                    <span key={tech} className="px-2 py-1 bg-gray-800 text-gray-300 rounded text-xs">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>

                        {/* Leadership Program */}
                        <motion.div
                            className="bg-gray-900/50 rounded-xl p-6 border border-gray-800"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                                </div>
                                <div>
                                    <h4 className="text-xl font-semibold text-purple-400">Leadership Program</h4>
                                    <p className="text-gray-400 text-sm">Consejo Mexicano de Negocios & El Colegio de México</p>
                                </div>
                            </div>
                            <p className="text-gray-300 mb-4">
                                Selected participant in an exclusive leadership development program focused on business strategy,
                                economic policy, and innovation. Collaborating with industry leaders and academics to develop
                                solutions for Mexico's technological and economic challenges.
                            </p>
                            {/* Carrusel de imágenes */}
                            <div className="relative rounded-lg overflow-hidden mb-4">
                                <img
                                    src={leadershipImages[currentImageIndex]}
                                    alt={`Leadership Program - Image ${currentImageIndex + 1}`}
                                    className="w-full h-48 object-cover transition-all duration-300"
                                    style={{ objectPosition: '50% 45%' }}
                                />

                                {/* Overlay gradiente */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end justify-between">
                                    <div className="p-4 text-white"></div>

                                    {/* Controles del carrusel */}
                                    <div className="flex gap-2 p-4">
                                        <button
                                            onClick={prevImage}
                                            className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition"
                                        >
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                            </svg>
                                        </button>
                                        <button
                                            onClick={nextImage}
                                            className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition"
                                        >
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>

                                {/* Indicadores de puntos */}
                                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2">
                                    {leadershipImages.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setCurrentImageIndex(index)}
                                            className={`w-2 h-2 rounded-full transition ${index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                                                }`}
                                        />
                                    ))}
                                </div>
                            </div>
                            <div className="flex items-center gap-4 text-sm text-gray-400">
                                <span>• Strategic Leadership</span>
                                <span>• Business Innovation</span>
                                <span>• Economic Analysis</span>
                            </div>
                        </motion.div>

                        {/* Tech Community */}
                        <motion.div
                            className="bg-gray-900/50 rounded-xl p-6 border border-gray-800"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                                </div>
                                <div>
                                    <h4 className="text-xl font-semibold text-yellow-400">Programming Instructor</h4>
                                    <p className="text-gray-400 text-sm">New Student Programming Courses</p>
                                </div>
                            </div>
                            <p className="text-gray-300 mb-4">
                                Taught programming fundamentals to incoming students, covering topics from basic
                                programming concepts to web development with modern technologies. Focused on building
                                strong foundational skills and practical problem-solving abilities.
                            </p>
                            <div className="relative rounded-lg overflow-hidden mb-4">
                                <img
                                    src={teaching}
                                    alt="HackMty 2024 - Banorte AI Credit Card Application"
                                    className="w-full h-48 object-cover"
                                    style={{ objectPosition: '50% 65%' }}
                                />
                            </div>
                            <div className="flex items-center gap-4 text-sm text-gray-400">
                                <span>• 30+ Students Taught</span>
                                <span>• 15+ Programming Lessons</span>
                                <span>• JavaScript & Java Focus</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-20 text-center">
                <motion.h3
                    className="text-3xl font-semibold mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                >
                    Let's Connect
                </motion.h3>
                <div className="flex justify-center gap-6 text-gray-400">
                    <motion.a
                        href="https://github.com/alejandroSampa11"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2 }}
                        className="hover:text-indigo-400 transition-colors"
                    >
                        <Github size={28} />
                    </motion.a>
                    <motion.a
                        href="https://linkedin.com/in/alejandro-sampablo"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2 }}
                        className="hover:text-blue-400 transition-colors"
                    >
                        <Linkedin size={28} />
                    </motion.a>
                    <motion.a
                        href="mailto:alejandro.sampablo@example.com"
                        whileHover={{ scale: 1.2 }}
                        className="hover:text-green-400 transition-colors"
                    >
                        <Mail size={28} />
                    </motion.a>
                </div>
            </section>
            {/* Footer */}
            <footer className="text-center py-8 text-gray-500 text-sm">
                © {new Date().getFullYear()} Alejandro Sampablo. All rights reserved.
            </footer>
        </div>
    );
}
