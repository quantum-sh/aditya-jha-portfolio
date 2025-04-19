const InterestingStuff = () => {
    const links = [
        {
            label: "Understanding Event Loop in JavaScript",
            url: "https://www.youtube.com/watch?v=8aGhZQkoFbQ"
        },
        {
            label: "Designing Data-Intensive Applications (book summary)",
            url: "https://medium.com/some-article"
        },
        {
            label: "Clean Architecture GitHub Repo",
            url: "https://github.com/your-github-username/clean-architecture"
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
