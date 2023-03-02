import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Career Coach</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
    <header>
        <nav>
          <Image
              src='/Career_Coach_logo.png'
              alt='Career Coach'
              width={200}
              height={80} 
              />
          </nav>
        </header>

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

 <article>
                <a className='py-3 px-3' href="https://www.linkedin.com/in/career-coach-2299b0264">
                    <Image  src="/icons8-linkedin-circled.svg"
                    alt = "LinkedIn"
                    width={30}
                    height={30}
                    />
                  </a>

                  <a href="tel:08197410859">
                    <button className='py-3 px-6 bg-blue-900 text-white font-medium rounded-md'>Contact us</button>
                  </a>
            </article>

      </main>

      <Footer />
    </div>
  )
}
