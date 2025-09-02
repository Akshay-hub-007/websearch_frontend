const Header = () => {
    return (
        <header className="relative flex items-center justify-between px-8 py-5 bg-gradient-to-r from-[#4A3F71] to-[#5E507F] z-10 shadow-md">
            <div className="absolute inset-0 bg-[url('/api/placeholder/100/100')] opacity-5 mix-blend-overlay"></div>
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

            <div className="flex items-center relative">
                <img src="/globe.svg" alt="Logo" className="w-8 h-8 mr-3" />
                <span className="font-bold text-white text-2xl tracking-tight drop-shadow">Perplexity 2.0</span>
            </div>

            <nav className="flex items-center space-x-2">
                <a className="flex items-center gap-1 text-white/90 text-sm px-4 py-2 font-semibold hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200 cursor-pointer active:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/30">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0h6" /></svg>
                    HOME
                </a>
                <a className="flex items-center gap-1 text-white bg-white/10 text-sm px-4 py-2 font-semibold rounded-lg transition-all duration-200 cursor-pointer shadow-inner">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M8 10h.01M12 10h.01M16 10h.01M9 16h6" /></svg>
                    CHAT
                </a>
                <a className="flex items-center gap-1 text-white/80 text-sm px-4 py-2 font-semibold hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200 cursor-pointer">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87M16 3.13a4 4 0 010 7.75M8 3.13a4 4 0 010 7.75" /></svg>
                    CONTACTS
                </a>
                <a className="flex items-center gap-1 text-white/80 text-sm px-4 py-2 font-semibold hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200 cursor-pointer">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 8v4l3 3M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    SETTINGS
                </a>
            </nav>

            {/* Optional user avatar/profile */}
            <div className="ml-4 flex items-center">
                <img src="/vercel.svg" alt="User" className="w-8 h-8 rounded-full border-2 border-white/30 shadow" />
            </div>
        </header>
    )
}

export default Header