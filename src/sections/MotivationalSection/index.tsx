import React from "react"
import styles from "./motivationalSection.module.css"
import cn from "classnames-ts"

const MotivationalSection: React.FC = () => {
    return (
        <div className={styles.section}>
            <div className={styles.wrap}>
                <div className={styles.container}>
                    <div className={cn(styles.person, styles.personOne)}>
                        <img src="public/humansImg/human_1.png" alt="" />
                        <div
                            className={cn(styles.question, styles.questionOne)}
                        >
                            Как мне поступить? <br />У меня нет опыта, но есть
                            огромное желание стать востребованным
                            ИТ-специалистом
                        </div>
                    </div>
                    <div className={cn(styles.person, styles.personTwo)}>
                        <img src="public/humansImg/human_2.png" alt="" />
                        <div
                            className={cn(styles.question, styles.questionTwo)}
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
                                styles.questionThree
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
                            className={cn(styles.question, styles.questionFour)}
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
