import Head from './Head'
import Nav from './Nav'
import Footer from './Footer'
import "../style.css";

const Layout = props => (
    <>
        <Head />
        <Nav />
        <div className="w-full py-24 px-6 relative z-10 max-w-2xl mx-auto text-left">
            {props.children}
        </div>
        <Footer />
    </>
)

export default Layout;