import React from "react";

const Projects = () => {
    const projects = [
        {
            title: "Netflix Clone",
            description: "A full-stack movie platform using Next.js and NestJS with IMDB integration.",
            link: "https://github.com/your-github-username/netflix-clone"
        },
        {
            title: "Multithreaded Stock Aggregator",
            description: "Java-based tool for concurrent stock price aggregation with caching.",
            link: "https://github.com/your-github-username/stock-aggregator"
        },
        {
            title: "URL Shortener",
            description: "A minimal URL shortener built with Go, REST, and Docker support.",
            link: "https://github.com/your-github-username/url-shortener"
        }
    ];

    return (
        <div className="bg-white text-black px-8 py-12 font-sans">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-6">Personal Projects 💡</h2>
                <ul className="space-y-4">
                    {projects.map((project, index) => (
                        <li key={index}>
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-semibold underline hover:text-blue-600"
                            >
                                {project.title}
                            </a>{" — "}
                            <span className="text-base">{project.description}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Projects;
