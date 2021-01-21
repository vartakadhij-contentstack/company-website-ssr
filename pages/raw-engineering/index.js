import RELayout from '../../components/RE_Layout'
import styles from '../../styles/RE_Home.module.css'
import Head from 'next/head'

function RawEngineering () {
    return(
        <div>
            <Head>
                <title>Raw Engieering Home</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <RELayout>
                <div
                    className={styles["bg-image-container"]}
                    style={
                        {
                            backgroundImage: "url(" + `${`/raweng-bg-image.jpg`}` + ")",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                            overflow: "scroll"
                        }
                    }
                    >
                    <div className={styles["bg-text"]}>
                        <h1>Fast Track Innovation <br /> From Vision to Reality</h1>
                    </div>
                    <div className={styles["bg-sub-text"]}>
                        <h1>Raw Engineering’s experienced Strategic <br /> Consultants,
                            Solutions Architects, Designers, and <br /> Developers turn
                            Business Vision into Digital <br /> Reality.
                        </h1>
                    </div>
                </div>   
            </RELayout>
        </div>
    )
}

export default RawEngineering;