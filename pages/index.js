import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Counter from '../components/Counter';
import GitHub from '../components/GitHub';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className={styles.title}>
        Cameron Oberg welcomes <a href="https://nextjs.org">Next.js!</a>
      </h1>
      <Counter count={0} amount={1}  name={"Down for the count!"} size={1} />
      <Counter count={0} amount={3} name={"This also counts, but by a factor of 3!"} size={3}/>
      <hr
        style={{
          width: "80%",
          marginTop: "1em",
        }}
      />
      <GitHub></GitHub>
      <hr
        style={{
          width: "80%",
          marginTop: "1em",
        }}
      />

      <p>Check out my <Link href="/store" style={{color: "blue", fontStyle: "italic"}}>Fake Store</Link>.</p>
    </div>
  );
}
