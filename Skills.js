function Skills() {
    const skillCategories = [
        {
            title: "Languages",
            icon: "icon-file-code",
            skills: ["C", "C++", "Python"]
        },
        {
            title: "Frameworks & Libraries",
            icon: "icon-book-open",
            skills: ["Power Query", "NumPy", "Pandas"]
        },
        {
            title: "Platforms & Tools",
            icon: "icon-cpu",
            skills: ["Git", "MySQL", "GitHub", "Power BI"]
        },
        {
            title: "Soft Skills",
            icon: "icon-users",
            skills: ["Problem Solving", "Critical Thinking", "Team Collaboration", "Time Management"]
        }
    ];

    return (
        <section id="skills" className="py-20 px-6 scroll-mt-20" data-name="skills" data-file="components/Skills.js">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4 glow-text inline-block">Technical Skills</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skillCategories.map((category, idx) => (
                        <div key={idx} className="glass-panel p-6 hover:-translate-y-2 transition-transform duration-300 group">
                            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center mb-6 group-hover:shadow-[0_0_15px_rgba(0,240,255,0.4)] transition-all">
                                <div className={`${category.icon} text-2xl text-[var(--primary)]`}></div>
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-white">{category.title}</h3>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, sIdx) => (
                                    <span key={sIdx} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}