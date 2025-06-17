const Navbar = () => {
    return (
        <>
            <nav className="bg-white text-black px-8 py-4 font-sans shadow">
                <div className="max-w-4xl mx-auto flex items-center justify-between">
                    <div className="text-2xl font-bold">Aditya Jha</div>
                    <a
                        href="https://your-blog-link.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                            bg-black text-white px-6 py-2 rounded-full
                            transition-all duration-200
                            hover:bg-neutral-800 hover:scale-105 hover:shadow-lg
                            focus:outline-none focus:ring-2 focus:ring-black
                            text-lg font-semibold
                        "
                        style={{ boxShadow: "0 1.5px 8px 0 rgba(0,0,0,0.08)" }}
                    >
                        My Articles
                    </a>
                </div>
            </nav>
            <div className="border-b border-neutral-200" />
        </>
    );
};

export default Navbar;