const books = [
    {
        title: "Linux Kernel Development",
        author: "Robert Love",
        img: "https://learning.oreilly.com/library/cover/9780768696974/250w/"
    },
    {
        title: "Database Internals",
        author: "Alex Petrov",
        img: "https://learning.oreilly.com/library/cover/9781492040330/250w/"
    },
    {
        title: "Head First Design Patterns",
        author: "Eric Freeman & Elisabeth Robson",
        img: "https://learning.oreilly.com/library/cover/0596007124/250w/"
    }
];

const publications = [
    {
        title: "A Quantitative Approach for Appraising Quality of Online Education",
        year: 2024,
        summary: "The approach used ML algorithms to quantify how good or bad the quality is.",
        link: "https://sciresol.s3.us-east-2.amazonaws.com/srs-j/jeet/pdf/Volume-38/Issue-2/2.pdf"
    },
];

const InterestingStuff = () => {
    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-black via-[#18181a] to-[#232326] font-mono pt-8">
            <div className="flex flex-col w-full max-w-3xl p-6 md:p-10 items-center">
                
                <div className="w-full mb-12">
                    <div className="text-green-400 text-2xl font-bold mb-6 text-center tracking-wide">
                        📝 Publications
                    </div>
                    <div className="flex flex-col gap-6">
                        {publications.map((pub, idx) => (
                            <a
                                key={idx}
                                href={pub.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group bg-[#18181a] border border-[#2e2e2e] rounded-xl p-5 shadow-lg transition-all duration-300 hover:bg-gradient-to-r hover:from-green-900/40 hover:to-green-400/10 hover:scale-[1.03] hover:border-green-400 relative overflow-hidden cursor-pointer no-underline"
                            >
                                <div className="flex items-center gap-3 mb-1">
                                    <span className="text-green-300 text-lg font-bold group-hover:text-green-400 transition-colors">{pub.title}</span>
                                    <span className="bg-green-900/40 text-green-300 text-xs px-2 py-0.5 rounded-full ml-auto group-hover:bg-green-400/30 transition-colors">{pub.year}</span>
                                </div>
                                <div className="text-green-200 group-hover:text-white transition-colors">{pub.summary}</div>
                                <div className="absolute -top-4 -right-4 opacity-0 group-hover:opacity-40 text-[6rem] pointer-events-none select-none transition-all duration-300">
                                    📝
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
                {/* Books Section */}
                <div className="w-full mb-12">
                    <div className="text-green-400 text-2xl font-bold mb-6 text-center tracking-wide">
                        📚 Books I Recommend
                    </div>
                    <div className="flex flex-col md:flex-row justify-center items-stretch gap-8">
                        {books.map((book, idx) => (
                            <div
                                key={idx}
                                className="group bg-[#18181a] border border-[#2e2e2e] rounded-xl p-4 shadow-lg flex-1 flex flex-col items-center transition-all duration-300 hover:scale-105 hover:border-green-400 hover:shadow-green-900/30 relative overflow-hidden"
                            >
                                <img
                                    src={book.img}
                                    alt={book.title}
                                    className="w-28 h-40 object-cover rounded mb-3 shadow-md border border-[#333] group-hover:scale-110 transition-transform duration-300"
                                />
                                <div className="text-white font-bold text-lg text-center mb-1 group-hover:text-green-400 transition-colors">{book.title}</div>
                                <div className="text-green-400 text-center">{book.author}</div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mt-4 text-green-400 text-center text-xl font-semibold italic">
                    Stay curious. Build boldly. Share generously.
                </div>
            </div>
        </div>
    );
};

export default InterestingStuff;