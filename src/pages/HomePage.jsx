import { useEffect, useRef } from "react";

const MATRIX_COLUMNS = 32;
const MATRIX_ROWS = 18;

const HomePage = () => {
    const matrixRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            if (!matrixRef.current) return;
            const chars = "01";
            const spans = matrixRef.current.querySelectorAll(".matrix-char");
            spans.forEach((span) => {
                // Randomly change character and opacity for twinkle effect
                span.textContent = chars[Math.floor(Math.random() * chars.length)];
                span.style.opacity = Math.random() > 0.8 ? 0.7 : 0.3 + Math.random() * 0.5;
            });
        }, 1200);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-black font-mono relative overflow-hidden">
            {/* Matrix effect background */}
            <div
                ref={matrixRef}
                className="absolute inset-0 z-0 pointer-events-none select-none"
                aria-hidden="true"
            >
                <div className="w-full h-full grid grid-cols-8 md:grid-cols-16 gap-x-2 gap-y-1 opacity-60">
                    {Array.from({ length: MATRIX_COLUMNS * MATRIX_ROWS }).map((_, i) => (
                        <span
                            key={i}
                            className="matrix-char text-green-400 text-xs md:text-base"
                            style={{
                                filter: "blur(0.5px)",
                                userSelect: "none",
                            }}
                        >
                            {Math.random() > 0.5 ? "0" : "1"}
                        </span>
                    ))}
                </div>
            </div>
            {/* Main content */}
            <div className="flex flex-col w-full max-w-2xl p-6 md:p-10 relative z-10 bg-black/80 rounded-xl shadow-lg">
                <div className="text-green-400 text-2xl md:text-3xl font-bold mb-2">
                    aditya@portfolio:~$ <span className="text-white">whoami</span>
                </div>
                <div className="border-b border-green-700 mb-6 pb-2"></div>
                <div className="text-white text-2xl font-bold mb-2">
                    Hi, I'm Aditya Jha.
                </div>
                <div className="text-green-300 mb-4 text-lg">
                    Backend & DevOps Engineer passionate about building, automating, and scaling systems that empower people and ideas.
                </div>
                <div className="mb-2">
                    <span className="text-white font-bold">Mission : </span>
                    <span className="text-green-400">Turning complexity into simplicity, one deployment at a time.</span>
                </div>
                <div className="mb-2">
                    <span className="text-white font-bold">Stack : </span>
                    <span className="text-green-400">Python, Java, Node.js, AWS, Docker, Kubernetes</span>
                </div>
                <div className="mb-2">
                    <span className="text-white font-bold">Philosophy : </span>
                    <span className="italic text-green-400">"Stay curious. Automate the boring. Launch the bold."</span>
                </div>
                <div className="mt-8 text-green-300 text-xl font-semibold text-center">
                    🚀 Keep pushing boundaries. The next breakthrough is just one commit away.
                </div>
            </div>
        </div>
    );
};

export default HomePage;