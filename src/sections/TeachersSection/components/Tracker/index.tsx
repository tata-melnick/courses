import React from "react"
import styles from "./tracker.module.css"
import cn from "classnames-ts"

type TrackerProps = { profession: string }

const trackerActive = {
    ["Аналитик"]: styles.analyst,
    ["Backend-разработчик"]: styles.back,
    ["Frontend-разработчик"]: "front",
}

const Tracker: React.FC<TrackerProps> = ({ profession }) => {
    return (
        <>
            <h4 className={cn(styles.profession, trackerActive[profession])}>
                {profession}
            </h4>
            <div className={styles.track}>
                <div className={styles.img}>
                    <img
                        src={
                            trackerActive[profession] === "front"
                                ? "public/professionImg/front-colored.png"
                                : "professionImg/front.png"
                        }
                        alt=""
                    />
                </div>
                <div className={styles.img}>
                    <img
                        src={
                            trackerActive[profession] === styles.analyst
                                ? "public/professionImg/analysis-colored.png"
                                : "public/professionImg/analysis.png"
                        }
                        alt=""
                    />
                </div>
                <div className={styles.img}>
                    <img src="public/professionImg/designer.png" alt="" />
                </div>
                <div className={styles.img}>
                    <img
                        src={
                            trackerActive[profession] === styles.back
                                ? "public/professionImg/back-colored.png"
                                : "public/professionImg/back.png"
                        }
                        alt=""
                    />
                </div>
            </div>
        </>
    )
}

export default Tracker
