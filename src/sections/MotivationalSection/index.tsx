import React, { useEffect, useState } from "react"
import styles from "./motivationalSection.module.css"
import cn from "classnames-ts"

const defaultScrolled: Record<number, boolean> = {
    1: false,
    2: false,
    3: false,
    4: false,
}

const MotivationalSection: React.FC = () => {
    const [scrolled, setScrolled] = useState(defaultScrolled)

    useEffect(() => {
        const updateScroll = () => {
            if (window.scrollY < 200) {
                setScrolled(defaultScrolled)
                return
            }
            if (window.scrollY > 300 && !scrolled[1]) {
                setScrolled((prev) => ({ ...prev, 1: true }))
            }
            if (window.scrollY > 800 && !scrolled[2]) {
                setScrolled((prev) => ({ ...prev, 2: true }))
            }
            if (window.scrollY > 1300 && !scrolled[3]) {
                setScrolled((prev) => ({ ...prev, 3: true }))
            }
            if (window.scrollY > 1800 && !scrolled[4]) {
                setScrolled((prev) => ({ ...prev, 4: true }))
            }
        }

        window.addEventListener("scroll", updateScroll)

        return () => {
            window.removeEventListener("scroll", updateScroll)
        }
    }, [scrolled])

    return (
        <div className={styles.section}>
            <div className={styles.wrap}>
                <div className={styles.container}>
                    <div className={cn(styles.person, styles.personOne)}>
                        <img src="public/humansImg/human_1.png" alt="" />
                        <div
                            className={cn(
                                styles.question,
                                styles.questionOne,
                                scrolled[1] && styles.active
                            )}
                        >
                            Как мне поступить? <br />У меня нет опыта, но есть
                            огромное желание стать востребованным
                            ИТ-специалистом
                        </div>
                    </div>
                    <div className={cn(styles.person, styles.personTwo)}>
                        <img src="public/humansImg/human_2.png" alt="" />
                        <div
                            className={cn(
                                styles.question,
                                styles.questionTwo,
                                scrolled[2] && styles.active
                            )}
                        >
                            Черт, я не знаю с чего начать? <br /> Давно хочу
                            сменить сферу деятельности и стать специалистом в
                            области ИТ
                        </div>
                    </div>
                    <div className={cn(styles.person, styles.personThree)}>
                        <img src="public/humansImg/human_3.png" alt="" />
                        <div
                            className={cn(
                                styles.question,
                                styles.questionThree,
                                scrolled[3] && styles.active
                            )}
                        >
                            Где же мне взять необходимые навыки? <br /> Работаю
                            в сфере ИТ, но не понимаю, каких навыков мне не
                            хватает и где их приобрести
                        </div>
                    </div>
                    <div className={cn(styles.person, styles.personFour)}>
                        <img src="public/humansImg/human_4.png" alt="" />
                        <div
                            className={cn(
                                styles.question,
                                styles.questionFour,
                                scrolled[4] && styles.active
                            )}
                        >
                            Что же мне делать? <br /> Прошёл несколько курсов,
                            но так и не перешёл в практику
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MotivationalSection
