import Alert from './Alert'
import { initGA, logPageView } from '../lib/analytics';
import { useEffect } from 'react'

type Props = {
    preview?: boolean
    children: React.ReactNode
}

declare global {
    interface Window {
        GA_INITIALIZED?: boolean;
    }
}

const Layout = ({ preview, children }: Props) => {
    useEffect(() => {
        if (typeof window !== 'undefined' && !window.GA_INITIALIZED) {
            initGA();
            window.GA_INITIALIZED = true;
          }
          logPageView();
   }, [])
   
    return (
        <>
            <div className="min-h-screen">
                <Alert preview={preview} />
                <main>{children}</main>
            </div>
        </>
    )
}

export default Layout