import React from "react";

const Projects = () => {
    const projects = [
        {
            title: "Parallel-Merge-Sort",
            description: "Merge sort which uses threads to sort a array using recursive calls",
            link: "https://github.com/aditya-amlesh-jha/ParallelMergeSort"
        },
        {
            title: "ThreadPool",
            description: "Scratch implementation of threadPool using blocking queue and fixed size thread pool",
            link: "https://github.com/aditya-amlesh-jha/threadPool"
        },
        {
            title: "Multithreaded Server",
            description: "Java based Server which uses thread pool to serve requests",
            link: "https://github.com/aditya-amlesh-jha/MultiThreadedServer"
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
