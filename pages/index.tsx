import Layout from '../components/Layout'
import Container from '../components/Container'
import Head from 'next/head'
import { useEffect } from 'react'

const Index = () => {
    
    useEffect(() => {
        setInterval(() => {
            document.getElementById('vegas')?.classList.toggle("text-shadow");
        }, 3000);
    }, [])

    return (
        <>
            <Head>
                <title>👋Hey!</title>
            </Head>
            <Layout preview={true}>
                <Container>
                    <div className="flex justify-center items-center h-screen">
                        <h1 id="vegas" className="vegas-text text-shadow">teofilus candra</h1>
                    </div>
                </Container>
            </Layout>
        </>
    )
}

export default Index