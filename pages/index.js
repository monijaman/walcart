import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Layout from '../components/Layout'
import Category from '../components/Categories/'
import Navigation from '../components/Navigation/'
import Slider from '../components/Slider/'
import Adblock from '../components/Adblock/'

export default function Home() {

  return (
    <Layout>
      <div className={styles.container}>
        <Head>
          <title>Walcart</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
 
        <section className="container bodycontainer">
          <div className="row">
            <Navigation />
            <div className="main ">
              <Slider />
              <Adblock />
            </div>
          </div>
        </section>
        
        <Category />
      </div>
    </Layout>
  )
}
