import Alert from './Alert'

type Props = {
    preview?: boolean
    children: React.ReactNode
}

const Layout = ({ preview, children }: Props) => {
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