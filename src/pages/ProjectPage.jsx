import React from "react";

const projects = [
    {
        name: "DevOps Dashboard",
        period: "2024",
        description: "A real-time dashboard for monitoring CI/CD pipelines, deployments, and infrastructure health.",
        stack: ["React", "Node.js", "Docker", "Prometheus", "Grafana"],
        highlights: [
            "Live pipeline status and deployment logs.",
            "Custom alerts for failed builds and downtime.",
            "Integrated with Slack for notifications."
        ]
    },
    {
        name: "Personal Portfolio",
        period: "2023",
        description: "This portfolio site, built to showcase my work, experience, and articles.",
        stack: ["React", "TailwindCSS", "Vite"],
        highlights: [
            "Terminal-inspired UI and neofetch-style homepage.",
            "Fully responsive and fast-loading.",
            "Easy to update with new content."
        ]
    },
    {
        name: "Serverless File Uploader",
        period: "2023",
        description: "A scalable file upload service using AWS Lambda and S3.",
        stack: ["AWS Lambda", "S3", "API Gateway", "Python"],
        highlights: [
            "Handles large files with multipart upload.",
            "Automatic virus scanning and metadata extraction.",
            "Pay-per-use, no server management."
        ]
    }
];

const ProjectsPage = () => (
    <div className="min-h-screen w-full flex items-center justify-center bg-black font-mono pt-8">
        <div className="flex flex-col w-full max-w-4xl p-4">
            <div className="text-green-400 text-lg md:text-2xl font-bold mb-6 border-b border-green-700 pb-2">
                aditya@portfolio:~$ <span className="text-white">projects</span>
            </div>
            <ul className="space-y-8 text-green-300">
                {projects.map((project, idx) => (
                    <li key={idx} className="bg-[#18181a] rounded-md p-4 border border-[#444]">
                        <div className="font-bold text-white mb-1">
                            {project.name} <span className="text-green-400">({project.period})</span>
                        </div>
                        <div className="mb-2 text-green-200">{project.description}</div>
                        <div className="mb-2">
                            <span className="text-white font-semibold">Stack:</span>{" "}
                            <span className="text-green-400">{project.stack.join(", ")}</span>
                        </div>
                        <ul className="list-disc list-inside ml-4 text-green-200 text-base space-y-1">
                            {project.highlights.map((h, i) => (
                                <li key={i}>{h}</li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    </div>
);

export default ProjectsPage;