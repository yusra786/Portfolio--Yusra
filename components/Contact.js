function Contact() {
    const contactLinks = [
        {
            label: "LinkedIn",
            value: "linkedin.com/in/yusra-waseem54",
            href: "https://linkedin.com/in/yusra-waseem54",
            icon: "icon-briefcase"
        },
        {
            label: "Email",
            value: "yusrawaseem954@gmail.com",
            href: "mailto:yusrawaseem954@gmail.com",
            icon: "icon-mail"
        },
        {
            label: "GitHub",
            value: "github.com/yusra786",
            href: "https://github.com/yusra786",
            icon: "icon-github"
        },
        {
            label: "Phone",
            value: "+91 8439389372",
            href: "tel:+918439389372",
            icon: "icon-phone"
        }
    ];

    return (
        <section id="contact" className="py-20 px-6 scroll-mt-20" data-name="contact" data-file="components/Contact.js">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-4 glow-text">Get In Touch</h2>
                <p className="text-gray-400 mb-12 text-lg">
                    Whether you have a question, a project opportunity, or just want to say hi, I'll try my best to get back to you!
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                    {contactLinks.map((link, idx) => (
                        <a 
                            key={idx} 
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="glass-panel p-6 flex items-center space-x-6 hover:bg-white/10 hover:border-[var(--secondary)]/50 transition-all group"
                        >
                            <div className="w-12 h-12 rounded-full bg-[var(--secondary)]/20 flex items-center justify-center text-[var(--secondary)] group-hover:text-[var(--primary)] group-hover:bg-[var(--primary)]/20 transition-colors">
                                <div className={`${link.icon} text-xl`}></div>
                            </div>
                            <div>
                                <h3 className="text-sm text-gray-400 mb-1">{link.label}</h3>
                                <p className="text-white font-medium break-all">{link.value}</p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
