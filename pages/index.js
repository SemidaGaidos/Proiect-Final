
import Head from 'next/head'
import Image from 'next/image'
import Navbar from "../components/Navbar"
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title> Semida Gaidos </title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Navbar />
      <main className={styles.main}>
        <h1
           className={styles.title}>
          Blog Personal
        </h1>
        <p className={styles.description}>
          by SEMIDA GAIDOS</p>

        <div className={styles.grid}>
          <a href="/skin" className={styles.card}>
            <h2>Skincare &rarr;</h2>
            <p> Experții de top folosesc aceste formule pentru a reduce ridurile, petele pigmentare și multe altele.  </p>
          </a>

          <a href="/books" className={styles.card}>
            <h2>Books &rarr;</h2>
            <p> Descopera cărți pentru dezvoltarea ta personala, recenzii și interviuri cu autorii tăi preferați</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Lifesyle &rarr;</h2>
            <p> Articol despre 8 vedete care nu au renuntat, desi li s-a spus ca nu vor avea niciodata succes </p>
          </a>

          <a
            href="/healt"
            className={styles.card}
          >
            <h2>Health &rarr;</h2>
            <p> Afla acum care sunt cele 4 lucruri sanatoase pe care un medic le face in fiecare dimineata de ani de zile
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
          Created by SEMIDA Gaidos
      </footer>
    </div>
  )
}