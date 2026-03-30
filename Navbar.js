function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false);
    const [scrolled, setScrolled] = React.useState(false);

    const navItems = [
        { label: 'Home', id: 'home' },
        { label: 'About', id: 'about' },
        { label: 'Skills', id: 'skills' },
        { label: 'Projects', id: 'projects' },
        { label: 'Training', id: 'training' },
        { label: 'Education', id: 'education' },
        { label: 'Certifications', id: 'certifications' },
        { label: 'Extra Curricular', id: 'extra-curricular' },
        { label: 'Contact', id: 'contact' },
    ];

    React.useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        setIsOpen(false);
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#070514]/80 backdrop-blur-lg border-b border-white/10 py-3' : 'bg-transparent py-5'}`} data-name="navbar" data-file="components/Navbar.js">
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <a 
                    href="#home" 
                    onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
                    className="text-2xl font-bold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]"
                >
                    Y.W
                </a>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center space-x-6">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className="text-sm text-gray-300 hover:text-[var(--primary)] transition-colors duration-200 uppercase tracking-wider font-medium"
                        >
                            {item.label}
                        </button>
                    ))}
                </div>

                {/* Mobile Menu Toggle */}
                <button 
                    className="lg:hidden text-white focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <div className={isOpen ? "icon-x text-2xl" : "icon-menu text-2xl"}></div>
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="lg:hidden absolute top-full left-0 w-full bg-[#070514]/95 backdrop-blur-xl border-b border-white/10 py-4 px-6 flex flex-col space-y-4 shadow-2xl">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className="text-left text-lg text-gray-300 hover:text-[var(--primary)] transition-colors w-full py-2 border-b border-white/5"
                        >
                            {item.label}
                        </button>
                    ))}
                </div>
            )}
        </nav>
    );
}