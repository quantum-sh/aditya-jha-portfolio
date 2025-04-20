const InterestingStuff = () => {
    const links = [
        {
            label: "MultiThreading(Java Memory Model, Race Conditions, Inter Thread Communication)",
            url: "https://www.youtube.com/playlist?list=PLL8woMHwr36EDxjUoCzboZjedsnhLP1j4"
        },
        {
            label: "Low Level Design",
            url: "https://refactoring.guru/"
        },
        {
            label: "Understanding Event Loop in JavaScript",
            url: "https://www.youtube.com/watch?v=8aGhZQkoFbQ"
        },
        {
            label: "System Design Interview Prep",
            url: "https://www.youtube.com/playlist?list=PL5q3E8eRUieWtYLmRU3z94-vGRcwKr9tM"
        }
    ];

    return (
        <div className="bg-white text-black px-8 py-12 font-sans">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-6">Interesting Stuff 🌱</h2>

                <ul className="space-y-4 text-lg">
                    {links.map((item, index) => (
                        <li key={index}>
                            <a
                                href={item.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline hover:text-blue-600"
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default InterestingStuff;
