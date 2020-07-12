type Props = {
    preview?: boolean
    children: React.ReactNode
}

const Layout = ({ preview, children }: Props) => {
    return (
        <>
            <div className="min-h-screen">
                <h1 className="font-semibold">teofilus.dev</h1>
            </div>
        </>
    )
}

export default Layout