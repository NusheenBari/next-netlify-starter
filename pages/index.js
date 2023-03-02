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
    
            <section>
              <h2>We specialize in: </h2>
              <ul>
                <li>Communication Skills</li>
                <li>Critical Thinking</li>
                <li>Soft Skills</li>
                <li>Self Development</li>
                <li>Career Development</li>
              </ul>
            </section>
      </main>

      <Footer />
    </div>
  )
}
