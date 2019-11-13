import Link from 'next/link';

const Nav = () => (
	<nav className="flex items-center justify-between flex-wrap bg-teal-800 p-4 lg:px-20">
        <div className="w-full block flex-grow flex lg:items-center lg:w-auto">
            <div className="justify-center text-sm flex flex-grow items-center">
                <a href="/" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4">
                    Home
                </a>
                <Link href="/blog">
                    <a className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                        Blog
                    </a>
                </Link>
                <a href="/" className="block w-8 h-8 md:w-16 md:h-16 mx-5 rounded-full border-2 overflow-hidden">
                    <img className="" src={process.env.URL_PHOTO} />
                </a>
                <Link href="/about">
                    <a href="/about" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                        About
                    </a>
                </Link>
                <a href={process.env.URL_MEDIUM} className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
                    Medium
                </a>
            </div>
        </div>
    </nav>
)

export default Nav;
