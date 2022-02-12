import type {NextPage} from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from "next/link";

const Version: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Next.js App</title>
                <meta name="description" content="Generated by create next app"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    <a href="https://nextjs.org">Next.js!</a>
                </h1>

                <p className={styles.description}>
                    Current app version{' '}
                    <code className={styles.code}>{process.env.NEXT_PUBLIC_APP_VERSION}</code>
                </p>

                <div className={styles.grid}>
                    <Link href="/">
                        <a className={styles.card}>
                            <h2>Home &rarr;</h2>
                            <p>Go back to home!</p>
                        </a>
                    </Link>
                </div>
            </main>
        </div>
    )
}

export default Version
