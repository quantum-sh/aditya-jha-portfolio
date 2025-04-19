import React from "react";

const Experience = () => {
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
            company: "Wiley Edge",
            role: "SRE",
            tasks: [
                "Handled production incidents and improved system reliability.",
                "Automated recurring support tasks with Python scripts.",
                "Collaborated with developers to identify root causes of issues.",
                "Improved alerting and monitoring using Grafana and Prometheus."
            ]
        }
    ];

    return (
        <div className="bg-white text-black px-8 py-12 font-sans">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-6">Experience 💼</h2>

                <ul className="space-y-8 text-lg">
                    {experiences.map((exp, index) => (
                        <li key={index}>
                            <div className="font-semibold">
                                {exp.start} – {exp.end}: {exp.role} at <span className="italic">{exp.company}</span>
                            </div>
                            <ul className="list-disc list-inside mt-2 text-base space-y-1">
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

export default Experience;
