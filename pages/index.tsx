import type {NextPage} from 'next'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Next.js App</title>
                <meta name="description" content="Generated by create next app"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Welcome to <a href="https://nextjs.org">Next.js!</a>
                </h1>

                <p className={styles.description}>
                    This app is running in a
                    <code className={styles.code}>nginx</code>
                    server with
                    <code className={styles.code}>docker</code>
                </p>

                <div className={styles.grid}>
                    <Link href="/version">
                        <a className={styles.card}>
                            <h2>Version &rarr;</h2>
                            <p>View current app version!</p>
                        </a>
                    </Link>
                </div>
            </main>
        </div>
    )
}

export default Home
