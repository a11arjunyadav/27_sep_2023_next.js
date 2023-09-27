import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container a_tbdr p-0">
        <header className="a_tbdr d-flex align-items-center">
          <h1 className="text-white">Chayna</h1>
        </header>
        <main className="a_tbdr">
          <div className="row">
            <div className="col-3">
              <ul class="nav flex-column mt-5">
                <li class="nav-item">
                  <a class="nav-link active a_b" aria-current="page" href="#">The Flight</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link a_b mt-3" href="#">The City</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link a_b mt-3" href="#">The Island</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link a_b mt-3" aria-disabled="true">The Food</a>
                </li>
              </ul>
            </div>
            <div className="col-6">
              <h1>The Flight</h1>
              <p>Flight SQ833 was due to fly from Shanghai to Singapore on 6 August, departing at 4.50pm and landing at 10.20pm.
                The flight pushed back on time and taxied to the runway, but take-off was aborted when a technical issue was discovered, reports The Straits Times.
                The aircraft returned to the gate, where engineers tried to diagnose the problem. According to one passenger, Chee Yang, a 32-year-old port operation executive who was travelling with his wife, the pilot said they would be waiting onboard for 30 minutes, then one hour.</p>
            </div>
            <div className="col-3 a_t a_b">
              <h2 className="d-flex align-items-center">What?</h2>
              <p>Chayna is a city on the island of crete.</p>
              <h2 className="d-flex align-items-center">Where?</h2>
              <p>Crete is a greek island in themediterranean sea.</p>
              <h2 className="d-flex align-items-center">How?</h2>
              <p>You can reach chayna airport in the island.</p>
            </div>
          </div>
        </main>
        <footer className="a_tbdr"></footer>
      </div>
    </div>
  )
}
