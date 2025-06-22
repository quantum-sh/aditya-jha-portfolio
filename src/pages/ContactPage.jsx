import React from "react";

const EMAIL = "18aditya.jha@gmail.com"
const LINKEDIN_USERNAME = "quantum-sh"
const GITHUB_USERNAME = "quantum-sh"

const ContactPage = () => {
    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-black font-mono pt-8">
            <div className="flex flex-col w-full max-w-2xl p-4">
                <div className="text-green-400 text-lg md:text-2xl font-bold mb-6 border-b border-green-700 pb-2">
                    aditya@portfolio:~$ <span className="text-white">contact</span>
                </div>
                <div className="bg-[#18181a] rounded-md p-6 border border-[#444] text-green-300">
                    <div className="mb-4 text-white font-semibold">
                        Let's connect! Feel free to reach out for collaboration, questions, or just to say hi.
                    </div>
                    <ul className="space-y-2 text-green-200 text-base">
                        <li>
                            <span className="text-green-400 font-bold">Email:</span>{" "}
                            <a
                                href={`mailto:${EMAIL}`}
                                className="underline hover:text-green-300"
                            >
                                {EMAIL}
                            </a>
                        </li>
                        <li>
                            <span className="text-green-400 font-bold">LinkedIn:</span>{" "}
                            <a
                                href={`https://www.linkedin.com/in/${LINKEDIN_USERNAME}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline hover:text-green-300"
                            >
                                linkedin.com/in/{LINKEDIN_USERNAME}
                            </a>
                        </li>
                        <li>
                            <span className="text-green-400 font-bold">GitHub:</span>{" "}
                            <a
                                href={`https://github.com/${GITHUB_USERNAME}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline hover:text-green-300"
                            >
                                github.com/{GITHUB_USERNAME}
                            </a>
                        </li>
                    </ul>
                    <div className="mt-6 text-green-300">
                        🚀 Open to new opportunities and interesting conversations!
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactPage;