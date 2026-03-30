class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-[#070514] text-white">
          <div className="text-center glass-panel p-8 max-w-md">
            <h1 className="text-2xl font-bold text-[var(--primary)] mb-4">Something went wrong</h1>
            <p className="text-gray-400 mb-6">An unexpected error occurred in the application.</p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-2 rounded-full bg-gradient-to-r from-[var(--secondary)] to-[var(--primary)] text-white font-medium"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

function App() {
  try {
    return (
      <div className="flex flex-col min-h-screen text-[var(--text-main)]" data-name="app" data-file="app.js">
        <Navbar />
        <main className="flex-grow pt-20">
          <Hero />
          
          <div id="about" className="max-w-7xl mx-auto px-6 py-20 scroll-mt-20">
             <div className="glass-panel p-8 md:p-12 text-center animate-fade-in-up">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 glow-text">About Me</h2>
                <p className="text-lg text-[var(--text-muted)] leading-relaxed max-w-4xl mx-auto">
                  I am a driven Computer Science Engineering student with a strong passion for turning complex data into meaningful, actionable insights. 
                  My journey blends software development with data analytics, allowing me to build intelligent, AI-driven solutions.
                  Whether I'm analyzing datasets with Python and Power BI, or developing innovative chatbots, I thrive on solving real-world problems through technology.
                </p>
             </div>
          </div>

          <Skills />
          <Projects />
          <Timeline />
          <Contact />
        </main>
        
        <footer className="border-t border-white/10 py-8 mt-20 text-center text-sm text-[var(--text-muted)] backdrop-blur-md bg-black/20">
            <p>&copy; {new Date().getFullYear()} Yusra Waseem. All rights reserved.</p>
            <p className="mt-2 text-xs">Designed with ❤️ and Code.</p>
        </footer>
      </div>
    );
  } catch (error) {
    console.error('App component error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);