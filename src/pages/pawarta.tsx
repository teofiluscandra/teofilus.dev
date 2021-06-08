import { Banner, MainWedding } from 'modules/wedding/';
import { NextSeo } from 'next-seo';

const Pawarta = (): JSX.Element => {
  return (
    <>
      <NextSeo
        title="Pawiwahan Yunita & Teofilus - 3 Juli 2021"
        description="Kanthi andhap asoring manah, kula sami nyuwun lumunturing samodra pangaksami, awit kula mboten saged ngaturi rawuhipun panjenengan ing peneguhan nenikahan anak kula karono pandemi Covid-19."
        openGraph={{
          url: 'https://teofilus.dev/pawarta',
          title: 'Pawiwahan Yunita & Teofilus - 3 Juli 2021',
          description:
            'Kanthi andhap asoring manah, kula sami nyuwun lumunturing samodra pangaksami, awit kula mboten saged ngaturi rawuhipun panjenengan ing peneguhan nenikahan anak kula karono pandemi Covid-19.',
          site_name: 'teofilus.dev',
          images: [
            {
              url: 'https://teofilus.dev/static/icon-web-nikah.png',
              width: 500,
              height: 500,
              alt: 'Foto Prewed',
            },
          ],
        }}
      />
      <Banner />
      <MainWedding isPawarta />
    </>
  );
};

export default Pawarta;
