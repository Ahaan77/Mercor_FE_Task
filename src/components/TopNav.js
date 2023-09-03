
function TopNav() {

    return (
        <>
           <div className='flex lg:gap-10 md:gap-7 sm:gap-5 xs:gap-2 items-center text-white Base lg:text-[12px] md:text-[9px] sm:text-[6px] xs:text-[0px] z-10 '>
                <button className="hover:scale-110 hover:transition duration-200">
                    SIGN IN
                </button>
                <button className="hover:scale-110 hover:transition duration-200">
                    LEGAL
                </button>
                <button className="hover:scale-110 hover:transition duration-200">
                    LICENSES
                </button>
                <button className="hover:scale-110 hover:transition duration-200">
                    SECURITY
                </button>
                <button className="hover:scale-110 hover:transition duration-200">
                    CAREERS
                </button>
                <button className="hover:scale-110 hover:transition duration-200">
                    PRESS
                </button>
                <button className="hover:scale-110 hover:transition duration-200">
                    SUPPORT
                </button>
                <button className="hover:scale-110 hover:transition duration-200">
                    STATUS
                </button>
                <button className="hover:scale-110 hover:transition duration-200">
                    CODEBLOG
                </button>
            </div>
        </>
    );
}

export default TopNav;
