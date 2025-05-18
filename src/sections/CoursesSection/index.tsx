import React from "react"
import styles from "./coursesSection.module.css"
import GRANTS from "../../mock/card.json"
import Card from "./components/card"

const CoursesSection: React.FC = () => {
    const list = GRANTS

    return (
        <div className={styles.section}>
            <h2 className={styles.title}>Наши курсы</h2>
            <div className={styles.cards}>
                {list.map((item) => (
                    <Card detail={item} key={item.id} />
                ))}
            </div>
        </div>
    )
}

export default CoursesSection
