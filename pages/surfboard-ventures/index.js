import SBLayout from '../../components/SB_Layout.jsx'
import styles from '../../styles/SB_Home.module.css'
import Head from 'next/head'

function SurfboardVentures () {
    return(
        <div>
            <Head>
                <title>Surfboard Ventures Home</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <SBLayout>
                <div
                    className={styles["bg-image-container"]}
                    style={
                        {
                            backgroundImage: "url(" + `${`/surfboard-bg-image.jpg`}` + ")",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                            overflow: "scroll"
                        }
                    }
                    >
                    <div className={styles["bg-text"]}>
                        <h1>The Entrepreneur’s Surfboard</h1>
                    </div>
                    <div className={styles["bg-sub-text"]}>
                        <h1>Entrepreneurship isn’t just about the end game.
                            It’s about the journey. <br /> There are ups and downs. 
                            Your resilience stands tall against the <br /> roughest seas. 
                            Sometimes you prevail. Sometimes you wipe out. 
                            We are <br /> here to help remarkable entrepreneurs to 
                            “just keep paddling” and <br /> provide the courage they need 
                            to ride the highest of waves.
                        </h1>
                    </div>
                </div>     
            </SBLayout>
        </div>
    )
}

export default SurfboardVentures;