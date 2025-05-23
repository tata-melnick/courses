import React from "react"
import styles from "./coursesSection.module.css"
import CARDS from "../../mock/cards.json"
import Card from "./components/card"
import { SectionProps } from "../types"

const CoursesSection: React.FC<SectionProps> = ({ style }) => {
    const list = CARDS

    return (
        <section id="courses" style={style} className={styles.section}>
            <h2 className={styles.title}>Наши курсы</h2>
            <div className={styles.cards}>
                {list.map((item) => (
                    <Card detail={item} key={item.id} />
                ))}
            </div>
        </section>
    )
}

export default CoursesSection
