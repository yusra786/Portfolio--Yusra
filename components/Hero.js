function Hero() {
    return (
        <section id="home" className="min-h-[90vh] flex items-center justify-center px-6 relative overflow-hidden pt-10" data-name="hero" data-file="components/Hero.js">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                
                {/* Text Content */}
                <div className="order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left z-10 animate-fade-in-up">
                    <div className="inline-flex items-center space-x-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6 backdrop-blur-sm">
                        <span className="w-2 h-2 rounded-full bg-[var(--primary)] animate-pulse"></span>
                        <span className="text-sm font-medium text-gray-200">Available for Opportunities</span>
                    </div>
                    
                    <h1 className="text-5xl md:text-7xl font-extrabold mb-4 tracking-tight">
                        Hi, I'm <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] glow-text">
                            Yusra Waseem
                        </span>
                    </h1>
                    
                    <h2 className="text-xl md:text-2xl font-semibold text-gray-300 mb-6">
                        B.Tech CSE | Data Analytics Enthusiast | AI Explorer
                    </h2>
                    
                    <p className="text-gray-400 text-lg max-w-xl mb-10 leading-relaxed">
                        Passionate about turning data into meaningful insights. Skilled in Python, Power BI, and building innovative AI-based solutions.
                    </p>
                    
                    <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                        <button 
                            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                            className="glow-button bg-gradient-to-r from-[var(--secondary)] to-[var(--primary)] text-white px-8 py-3.5 rounded-full font-semibold flex items-center space-x-2 group"
                        >
                            <span>Connect With Me</span>
                            <div className="icon-arrow-right group-hover:translate-x-1 transition-transform"></div>
                        </button>
                        
                        <a 
                            href="https://app.trickle.so/storage/public/images/usr_1d5910cb40000001/2c966e7d-dcc7-4cf0-997c-3480415284be.png" 
                            target="_blank"
                            rel="noopener noreferrer"
                            download="Yusra_Waseem_Resume"
                            className="glass-panel hover:bg-white/10 text-white px-8 py-3.5 rounded-full font-semibold flex items-center space-x-2 transition-all"
                        >
                            <div className="icon-file-download"></div>
                            <span>Download Resume</span>
                        </a>
                    </div>
                </div>

                {/* Image/Avatar Placeholder */}
                <div className="order-1 lg:order-2 flex justify-center lg:justify-end relative z-10">
                    <div className="relative w-64 h-64 md:w-80 md:h-80">
                        {/* Decorative rings */}
                        <div className="absolute inset-0 rounded-full border border-[var(--primary)]/30 animate-[spin_10s_linear_infinite]"></div>
                        <div className="absolute inset-4 rounded-full border border-[var(--secondary)]/40 animate-[spin_15s_linear_infinite_reverse]"></div>
                        
                        {/* Glowing backdrop */}
                        <div className="absolute inset-10 rounded-full bg-gradient-to-tr from-[var(--secondary)] to-[var(--primary)] blur-2xl opacity-40"></div>
                        
                        {/* Actual Image container */}
                        <div className="absolute inset-8 rounded-full bg-gray-900 border-2 border-white/20 overflow-hidden flex items-center justify-center backdrop-blur-xl z-20 shadow-[0_0_30px_rgba(0,240,255,0.3)]">
                            <img src="https://app.trickle.so/storage/public/images/usr_1d5910cb40000001/f61363cd-6b64-467b-bd41-e32f3a3985a7.47 PM" alt="Yusra Waseem Profile" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
