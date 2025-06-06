import React, { useEffect, useRef } from "react"
import styles from "./header.module.css"
import Button from "../../components/Button"
import mp4 from "./video.mp4"
import scrollToElement from "../../helpers/scrollToSection"

const Header: React.FC = () => {
    const ref = useRef<HTMLVideoElement>(null)

    useEffect(() => {
        ref.current.play()
    }, [])

    return (
        <div id="header" className={styles.header}>
            <video
                ref={ref}
                id="video"
                className={styles.video}
                src={mp4}
                loop
                muted
            />
            <div className={styles.wrap}>
                <div className={styles.btns}>
                    <Button
                        onClick={() => scrollToElement("courses", 1750)}
                        link=""
                        className={styles.btn}
                    >
                        Курсы
                    </Button>
                    <Button
                        onClick={() => scrollToElement("teachers", 750)}
                        link=""
                        className={styles.btn}
                    >
                        Преподаватели
                    </Button>
                </div>
                <div className={styles.logo}>ЛОГОТИП</div>
            </div>
            <div className={styles.titleWrap}>
                <h1 className={styles.title}>
                    Площадка по обучению IT-компетенциям
                </h1>
                <p className={styles.text}>
                    Освой профессию мечты, которая позволит
                    <br /> работать с любого уголка земного шара
                </p>
                <Button
                    type="filled"
                    onClick={() => scrollToElement("feedback", 80)}
                >
                    Получить консультацию
                </Button>
            </div>
        </div>
    )
}

export default Header
