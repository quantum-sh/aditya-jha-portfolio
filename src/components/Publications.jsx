import React from "react";

const Publications = () => {
    const publications = [
        {
            title: " A Quantitative Approach for Appraising Quality of Online Education",
            description: "The approach used ML algorithms to quantify how good or bad the quality is.",
            link: "https://sciresol.s3.us-east-2.amazonaws.com/srs-j/jeet/pdf/Volume-38/Issue-2/2.pdf"
        }
    ];

    return (
        <div className="bg-white text-black px-8 py-12 font-sans">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-6">Publications 📝</h2>

                <ul className="space-y-6 text-lg">
                    {publications.map((pub, index) => (
                        <li key={index}>
                            <a
                                href={pub.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline font-semibold hover:text-blue-600"
                            >
                                {pub.title}
                            </a>
                            <p className="text-base mt-1">{pub.description}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Publications;
