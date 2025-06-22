import React from "react";

const experiences = [
        {
            start: "09/2023",
            end: "Present",
            company: "{}",
            role: "Software Engineer",
            tasks: [
                "Built and maintained backend services using Java and Spring Boot.",
                "Optimized database queries and improved API response times by 30%.",
                "Worked on system design for scalable features handling thousands of users.",
                "Collaborated cross-functionally with product and QA teams."
            ]
        },
        {
            start: "05/2023",
            end: "08/2023",
            company: "{}",
            role: "SRE Trainee",
            tasks: [
                "Handled production incidents and improved system reliability.",
                "Automated recurring support tasks with Python scripts.",
                "Collaborated with developers to identify root causes of issues.",
                "Improved alerting and monitoring using Grafana and Prometheus."
            ]
        }
    ];

const ExperiencePage = () => {
    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-black font-mono pt-8">
            <div className="flex flex-col w-full max-w-4xl p-4">
                <div className="text-green-400 text-lg md:text-2xl font-bold mb-6 border-b border-green-700 pb-2">
                    aditya@portfolio:~$ <span className="text-white">experience</span>
                </div>
                <ul className="space-y-8 text-green-300">
                    {experiences.map((exp, index) => (
                        <li key={index} className="bg-[#18181a] rounded-md p-4 border border-[#444]">
                            <div className="font-bold text-white mb-2">
                                {exp.start} – {exp.end} <span className="text-green-400">{exp.role}</span>
                                <span className="text-green-300"> @ {exp.company}</span>
                            </div>
                            <ul className="list-disc list-inside ml-4 text-green-200 text-base space-y-1">
                                {exp.tasks.map((task, i) => (
                                    <li key={i}>{task}</li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ExperiencePage;