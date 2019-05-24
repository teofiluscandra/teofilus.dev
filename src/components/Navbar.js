import Link from 'next/link'

const Navbar = () => (
    <nav class="absolute pin-t w-full">
        <div class="container relative">
            <div class="absolute pin-t w-full flex items-center">
                <div class="inline-block mx-auto transition">
                </div>
            </div>
            <div class="relative w-full flex flex-col sm:flex-row items-center justify-center sm:justify-between pt-4 sm:h-16">
                <div class="my-2 sm:my-0">
                    <Link href="/"><a class="no-underline inline-flex items-center text-white px-2 py-2 hover:bg-dark-200 rounded transition hover:-translateY-sm uppercase font-bold text-xs">Home</a></Link>
                    <Link href="/about"><a class="no-underline inline-flex items-center text-white px-2 py-2 hover:bg-dark-200 rounded transition hover:-translateY-sm uppercase font-bold text-xs" data-location="header">About</a></Link>
                    <Link href="/now"><a class="no-underline inline-flex items-center text-white px-2 py-2 hover:bg-dark-200 rounded transition hover:-translateY-sm uppercase font-bold text-xs" data-location="header">Now</a></Link>
                    <Link href="/blog"><a class="no-underline inline-flex items-center text-white px-2 py-2 hover:bg-dark-200 rounded transition hover:-translateY-sm uppercase font-bold text-xs" data-location="header">Blog</a></Link>
                </div>
                <div class="flex items-center">
                    <form action="#" method="GET" class="mr-2 md:mr-8">
                        <input type="search" name="s" class="border-white bg-light-200 rounded-full px-4 py-2 text-sm text-cyan-900 outline-none focus:shadow focus:bg-white focus:text-black" placeholder="Search" value=""/>
                        <button class="hidden" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </div>
    </nav>
)

export default Navbar