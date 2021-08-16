import Head from 'next/head'
import Row from '../components/Row/Row'

import request from '../components/Hooks/request';
import Banner from '../components/Banner/Banner';

export default function Home() {
  return (
    <div>
      <Head>
        <title>React Netflix Clone</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Nav*/}
      {/* Banner */}
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={request.fetchNetflixOriginals}
        isLargeRow
      />
      <Row
        title="Trending Now"
        fetchUrl={request.fetchTrending}
      />
      <Row
        title="Top Rated Now"
        fetchUrl={request.fetchTopRated}
      />
      <Row
        title="Action Movies"
        fetchUrl={request.fetchActionMovies}
      />
      <Row
        title="Comedy Movies"
        fetchUrl={request.fetchComedyMovies}
      />
      <Row
        title="Horror Movies"
        fetchUrl={request.fetchHorrorMovies}
      />
      <Row
        title="Romance Movies"
        fetchUrl={request.fetchRomanceMovies}
      />
      <Row
        title="Documentaries Movies"
        fetchUrl={request.fetchDocumentaries}
      />
    </div>
  )
}
