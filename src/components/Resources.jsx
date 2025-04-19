import React from "react";

const Resources = () => {
    return (
        <div className="bg-white text-black px-8 py-12 font-sans">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-6">Resources 📎</h2>

                <ul className="space-y-4 text-lg">
                    <li>
                        <span className="font-semibold">Resume: </span>
                        <a
                            href="https://drive.google.com/your-resume-link"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline hover:text-blue-600"
                        >
                            View on Google Drive
                        </a>
                    </li>

                    <li>
                        <span className="font-semibold">Email: </span>
                        <a
                            href="mailto:youremail@example.com"
                            className="underline hover:text-blue-600"
                        >
                            youremail@example.com
                        </a>
                    </li>

                    <li>
                        <span className="font-semibold">LinkedIn: </span>
                        <a
                            href="https://linkedin.com/in/your-profile"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline hover:text-blue-600"
                        >
                            linkedin.com/in/your-profile
                        </a>
                    </li>

                    <li>
                        <span className="font-semibold">GitHub: </span>
                        <a
                            href="https://github.com/your-github-username"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline hover:text-blue-600"
                        >
                            github.com/your-github-username
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Resources;
