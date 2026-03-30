function Timeline() {
    const sections = [
        {
            id: 'training',
            title: 'Training',
            icon: 'icon-terminal',
            items: [
                {
                    title: "Data Structures & C++ Summer Training",
                    subtitle: "Intensive Summer Program",
                    desc: "Covered STL, Object-Oriented Programming (OOP), built an Undo/Redo system, and practiced structured testing methodologies."
                }
            ]
        },
        {
            id: 'education',
            title: 'Education',
            icon: 'icon-book-open',
            items: [
                {
                    title: "B.Tech Computer Science Engineering",
                    subtitle: "Lovely Professional University",
                    desc: "Current CGPA: 6.8"
                },
                {
                    title: "Intermediate",
                    subtitle: "St Mary's School",
                    desc: "Score: 80%"
                },
                {
                    title: "Matriculation",
                    subtitle: "St Mary's School",
                    desc: "Score: 86%"
                }
            ]
        },
        {
            id: 'certifications',
            title: 'Certifications',
            icon: 'icon-badge-check',
            items: [
                { title: "Computational Theory & Automata", subtitle: "Infosys" },
                { title: "Data Science with Excel & Tableau", subtitle: "CSE Patshala" },
                { title: "Responsive Web Design", subtitle: "FreeCodeCamp" }
            ]
        },
        {
            id: 'extra-curricular',
            title: 'Extra Curricular',
            icon: 'icon-users',
            items: [
                { title: "NGO Volunteer", subtitle: "Mariam Education Welfare Society", desc: "Active community service and social work." },
                { title: "Competitive Programming", subtitle: "Coding Contests", desc: "Active participant on LeetCode and Code-A-Hunt." }
            ]
        }
    ];

    return (
        <div className="max-w-5xl mx-auto px-6 py-20" data-name="timeline" data-file="components/Timeline.js">
            <div className="flex flex-col space-y-24">
                {sections.map((section, sIdx) => (
                    <section key={section.id} id={section.id} className="scroll-mt-24">
                        <div className="flex items-center space-x-3 mb-8">
                            <div className={`text-[var(--primary)] text-2xl ${section.icon}`}></div>
                            <h2 className="text-3xl font-bold">{section.title}</h2>
                        </div>
                        
                        <div className="glass-panel p-6 relative">
                            {/* Vertical Line */}
                            <div className="absolute left-10 top-8 bottom-8 w-px bg-white/10 hidden md:block"></div>
                            
                            <div className="space-y-8 relative">
                                {section.items.map((item, iIdx) => (
                                    <div key={iIdx} className="flex flex-col md:flex-row gap-4 md:gap-6 relative">
                                        {/* Dot */}
                                        <div className="hidden md:flex w-8 h-8 rounded-full bg-[#0a0514] border-2 border-[var(--secondary)] items-center justify-center z-10 shrink-0 mt-1">
                                            <div className="w-2 h-2 rounded-full bg-[var(--primary)]"></div>
                                        </div>
                                        
                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                                            <h4 className="text-[var(--primary)] font-medium text-sm mb-2">{item.subtitle}</h4>
                                            {item.desc && (
                                                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                ))}
            </div>
        </div>
    );
}