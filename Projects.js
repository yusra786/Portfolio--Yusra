function Projects() {
    const projects = [
        {
            title: "Heart Disease Data Analysis",
            description: "Analyzed complex health datasets to identify key risk factors using Python ecosystem. Extracted actionable insights through comprehensive data visualization.",
            tech: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
            icon: "icon-chart-bar"
        },
        {
            title: "AI Book-to-Movie Chatbot",
            description: "Developed an intelligent chatbot utilizing the Gemini API. Features a modern UI with smooth animations, providing accurate movie recommendations based on book inputs.",
            tech: ["Gemini API", "HTML/CSS", "JavaScript", "Animations"],
            icon: "icon-message-square"
        }
    ];

    return (
        <section id="projects" className="py-20 px-6 bg-black/20 scroll-mt-20 border-y border-white/5" data-name="projects" data-file="components/Projects.js">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4 glow-text inline-block">Featured Projects</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-[var(--secondary)] to-[var(--primary)] mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, idx) => (
                        <div key={idx} className="glass-panel p-8 relative overflow-hidden group hover:border-[var(--primary)]/50 transition-colors duration-300">
                            {/* Decorative background glow */}
                            <div className="absolute -right-10 -top-10 w-40 h-40 bg-[var(--primary)]/10 rounded-full blur-3xl group-hover:bg-[var(--primary)]/20 transition-all"></div>
                            
                            <div className="relative z-10">
                                <div className="flex items-center space-x-4 mb-6">
                                    <div className="w-12 h-12 rounded-lg bg-[var(--secondary)]/20 flex items-center justify-center text-[var(--secondary)]">
                                        <div className={`${project.icon} text-2xl`}></div>
                                    </div>
                                    <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                                </div>
                                
                                <p className="text-gray-400 mb-6 leading-relaxed">
                                    {project.description}
                                </p>
                                
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((t, tIdx) => (
                                        <span key={tIdx} className="text-xs font-semibold px-3 py-1 bg-[var(--primary)]/10 text-[var(--primary)] rounded-full border border-[var(--primary)]/20">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}