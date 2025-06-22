import homeArt from '../assets/homeArt.js';

const HomePage = () => {
    return (
        <div className="min-h-screen w-full flex items-center bg-black font-mono">
            <div className="flex flex-col md:flex-row items-center w-full p-4 gap-4 md:gap-8">
                {/* Rocket Launch ASCII Art - Extreme left on desktop/tablet, top on mobile */}
                <div className="flex-shrink-0 md:pl-4">
                    <pre className="text-green-400 text-[8px] md:text-base select-text leading-none">
                        {homeArt}
                    </pre>
                </div>
                
                {/* Motivational & Role Info - Right side with auto margin to push right */}
                <div className="text-green-400 text-base select-text font-normal max-w-xl md:ml-auto md:pr-4">
                    <div>
                        <span className="font-bold text-white text-lg">aditya@portfolio</span>
                    </div>
                    <div>--------------------------------------</div>
                    <div className="mb-4 mt-2 text-white font-semibold">
                        Hi, I'm Aditya Jha.<br />
                        <span className="text-green-400 font-normal">
                            I build, automate, and scale systems that empower people and ideas.<br />
                            Every day is a new launch—let's make it count!
                        </span>
                    </div>
                    <div>
                        <span className="text-white font-bold">Role</span>: Backend & DevOps Engineer
                    </div>
                    <div>
                        <span className="text-white font-bold">Mission</span>: Turning complexity into simplicity, one deployment at a time.
                    </div>
                    <div>
                        <span className="text-white font-bold">Stack</span>: Python, Java, Node.js, AWS, Docker, Kubernetes
                    </div>
                    <div>
                        <span className="text-white font-bold">Philosophy</span>: <span className="italic">"Stay curious. Automate the boring. Launch the bold."</span>
                    </div>
                    <div className="mt-4 text-green-300">
                        🚀 Keep pushing boundaries. The next breakthrough is just one commit away.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;