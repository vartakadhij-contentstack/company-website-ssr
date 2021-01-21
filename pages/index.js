import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'

function Home () {
  return(
    <div className={styles["main-container"]}>
      <Head>
        <title>Home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
    <div className={styles["body-container"]}>
      <div className={styles["home-heading"]}>
        <p className={styles["welcome-line"]}>Welcome!</p>
        <p className={styles["home-sub-heading"]}>Our amazing group of companies</p>
      </div>
      <div className={styles["companies-card-container"]}>
        <Link href={`/raw-engineering`}>
          <a>
            <div className={styles["re-card-container"]}>
              <div className={styles["re-image-container"]}>
                <Image
                  src={`/raweng.png`}
                  width="80%"
                  height="100%"
                  className={styles["re-image"]}
                >
                </Image>
              </div>
              <div className={styles["re-title"]}>
                <span>Raw Engineering</span>
              </div>
              </div>
            </a>
          </Link>
        <Link href={`/contentstack`}>
          <a>
            <div className={styles["cs-card-container"]}>
              <div className={styles["cs-image-container"]}>
                <Image
                  src={`/contentstack.png`}
                  width="80%"
                  height="100%"
                  className={styles["cs-image"]}
                >
                </Image>
              </div>
              <div className={styles["cs-title"]}>
                <span>Contentstack</span>
              </div>
            </div>
          </a>
        </Link>
        <Link href={`/surfboard-ventures`}>
          <a>
            <div className={styles["sb-card-container"]}>
              <div className={styles["sb-image-container"]}>
                <Image
                  src={`/surfboard.jpeg`}
                  width="80%"
                  height="100%"
                  className={styles["sb-image"]}
                >
                </Image>
              </div>
              <div className={styles["sb-title"]}>
                <span>Surfboard</span>
              </div>
            </div>
          </a>
        </Link>
      </div>
    </div>
    </div>
  )
}

export default Home;