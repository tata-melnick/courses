import React, { useEffect, useState } from "react"
import styles from "./offerSection.module.css"
import Button from "../../components/Button"
import cn from "classnames-ts"
import { SectionProps } from "../types"
import scrollToElement from "../../helpers/scrollToSection"

const OfferSection: React.FC<SectionProps> = ({ style }) => {
    const [scrolled, setScrolled] = useState<boolean>(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 3000) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        })
    }, [scrolled])

    return (
        <section style={style} className={styles.section}>
            <div className={styles.offer}>
                <div className={styles.messageWrap}>
                    <div
                        className={cn(
                            styles.message,
                            scrolled && styles.messageOne
                        )}
                    >
                        Я не знаю с чего начать ?
                    </div>
                    <div
                        className={cn(
                            styles.message,
                            scrolled && styles.messageTwo
                        )}
                    >
                        Пройди программу обучения на нашей площадке
                    </div>
                    <div
                        className={cn(
                            styles.message,
                            scrolled && styles.messageThree
                        )}
                    >
                        Выбери курс и оставь заявку на сайте. Администратор
                        свяжеться с тобой и поможет определиться с направлением
                        и дальнейшей траекторией развития
                    </div>
                </div>
            </div>
            <div className={styles.question}>
                <div>
                    <h2 className={styles.title}>Как превратить желания в</h2>
                    <div className={styles.emphasis}> действия?</div>
                </div>
                <Button
                    type="filled"
                    onClick={() => scrollToElement("courses", 800)}
                    uppercase
                    className={styles.btn}
                >
                    Выбрать курс
                </Button>
            </div>
        </section>
    )
}

export default OfferSection
