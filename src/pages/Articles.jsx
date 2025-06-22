import { Link } from "react-router-dom";

const articles = [
    {
        title: "How to Build a Matrix Effect in React",
        slug: "/articles/matrix-effect",
        summary: "A step-by-step guide to creating a cool Matrix-style background animation using React and TailwindCSS.",
        date: "2024-06-01"
    },
    {
        title: "DevOps for Beginners: Automate Everything",
        slug: "/articles/devops-automation",
        summary: "Learn the basics of DevOps and how automation can supercharge your workflow.",
        date: "2024-05-15"
    },
    {
        title: "Understanding Docker Networking",
        slug: "/articles/docker-networking",
        summary: "A practical introduction to Docker networking concepts for developers.",
        date: "2024-04-28"
    }
];

const Articles = () => {
    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-black via-[#18181a] to-[#232326] font-mono pt-8">
            <div className="w-full max-w-2xl mx-auto p-6 md:p-10">
                <div className="text-green-400 text-3xl font-extrabold mb-10 tracking-wider text-center drop-shadow-lg">
                    📚 My Articles
                </div>
                <ul className="space-y-6 relative">
                    {articles.map((article, idx) => (
                        <li key={idx} className="group relative pl-8">
                            <span className="absolute left-0 top-2 w-4 h-4 rounded-full bg-green-700 group-hover:bg-green-400 transition-colors duration-300 shadow-lg animate-pulse"></span>
                            <Link
                                to={article.slug}
                                className="block transition-all duration-300 group-hover:translate-x-2"
                            >
                                <div className="text-white text-xl font-bold group-hover:text-green-400 transition-colors duration-300">
                                    {article.title}
                                </div>
                                <div className="text-green-300 text-sm mb-1">{article.date}</div>
                                <div className="text-green-200 text-base group-hover:text-white transition-colors duration-300">
                                    {article.summary}
                                </div>
                            </Link>
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-60 text-4xl transition-all duration-300 pointer-events-none select-none">
                                🡆
                            </div>
                        </li>
                    ))}
                    {/* Vertical line for timeline effect */}
                    <div className="absolute left-2 top-6 bottom-0 w-1 bg-gradient-to-b from-green-900/40 via-green-700/20 to-transparent rounded-full pointer-events-none"></div>
                </ul>
            </div>
            <style>{`
                .animate-pulse {
                    animation: pulse 2s cubic-bezier(.4,0,.6,1) infinite;
                }
                @keyframes pulse {
                    0%, 100% { opacity: 0.7; }
                    50% { opacity: 1; }
                }
            `}</style>
        </div>
    );
};

export default Articles;