import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Career Coach</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Are you Looking to Advance Your Career?" />
        <p className="description">
          Career Coach offers specialized courses for working professionals. 
        </p>
      </main>

      <Footer />
    </div>
  )
}
