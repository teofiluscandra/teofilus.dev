import Layout from '../components/Layout'
import Container from '../components/Container'
import Head from 'next/head'
import { useEffect, useState } from 'react';
import currency from '../lib/currency';
import {URL_GITHUB, URL_IG, URL_TWITTER} from '../lib/constants';
import {parseISO, format} from 'date-fns';

const Index = () => {
    
    const [covidData, setCovidData] = useState({
        confirmed: '-----',
        recovered: '----',
        deaths: '----',
        ongoing: '----',
        lastUpdate: '-----'
    })

    useEffect(() => {
        setTimeout(() => {
            document.getElementById('vegas')?.classList.toggle("text-shadow");
        }, 3000);

        async function fetchData() {
            const data = await fetch('https://covid19.mathdro.id/api/countries/ID');
            const item = await data.json();
            setCovidData({
                confirmed: currency(item.confirmed.value),
                recovered: currency(item.recovered.value),
                deaths: currency(item.deaths.value),
                ongoing: currency((parseInt(item.confirmed.value) - (parseInt(item.recovered.value) + parseInt(item.deaths.value))).toString()),
                lastUpdate: format(parseISO(item.lastUpdate), 'dd-MM-yyyy hh:mm OOOO')
            });
        }

        fetchData();

    }, [])

    return (
        <>
            <Head>
                <title>👋Hey!</title>
            </Head>
            <Layout preview={true}>
                <Container>
                    <div className="flex justify-center items-center h-screen">
                        <h1 id="vegas" className="vegas-text">teofilus candra</h1>
                    </div>
                    
                    <div className="font-mono shadow bg-white text-black p-5 rounded-sm -mt-40 mb-5">
                        <div className="mb-5">
                            <h1 className="font-semibold text-xl">Jumlah kasus COVID19 di Indonesia</h1>
                        </div>
                        <div className="shadow flex text-center flex-wrap">
                            <div className="shadow border-white p-3 w-full xl:w-1/4">
                                <h1 className="text-2xl">{covidData.confirmed}</h1>
                                <h5>Terkonfirmasi</h5>
                            </div>
                            <div className="shadow border-white p-3 w-full xl:w-1/4">
                                <h1 className="text-2xl">{covidData.ongoing}</h1>
                                <h5>Dalam Perawatan</h5>
                            </div>
                            <div className="shadow border-white p-3 w-full xl:w-1/4">
                                <h1 className="text-2xl">{covidData.recovered}</h1>
                                <h5>Sembuh</h5>
                            </div>
                            <div className="shadow border-white p-3 w-full xl:w-1/4">
                                <h1 className="text-2xl">{covidData.deaths}</h1>
                                <h5>Meninggal</h5>
                            </div>
                        </div>
                        <div className="mt-2">
                            <h5 className="text-xs">Pembaruan Terakhir : {covidData.lastUpdate}</h5>
                        </div>

                        <div className="mt-5 mb-5">
                            <h1>Software Engineer & Co-op</h1>
                            <h1>Bali, Indonesia</h1>
                            <a href={URL_GITHUB}>Github</a> . <a href={URL_IG}>Instagram</a> . <a href={URL_TWITTER}>Twitter</a>
                        </div>
                        <div className="text-center text-3xl">❤️</div>
                    </div>
                </Container>
            </Layout>
        </>
    )
}

export default Index