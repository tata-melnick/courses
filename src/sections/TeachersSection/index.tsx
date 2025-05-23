import React, { useState } from "react"
import styles from "./teachersSection.module.css"
import TEACHER from "../../mock/teachers.json"
import Slider from "./components/Slider"
import Tracker from "./components/Tracker"
import cn from "classnames-ts"

const icon = {
    ["Аналитик"]: styles.analyst,
    ["Backend-разработчик"]: styles.back,
    ["Frontend-разработчик"]: styles.front,
}

const TeachersSection: React.FC = () => {
    const teachers = TEACHER
    const [activeSlide, setActiveSlide] = useState<number>(0)

    const teacher = teachers[activeSlide]

    return (
        <section className={styles.section}>
            <h2 className={styles.title}>Преподаватели</h2>
            <div key={teacher.id} className={styles.teacher}>
                <div className={styles.left}>
                    <div className={cn(styles.name, icon[teacher.profession])}>
                        {teacher.name}
                    </div>
                    <div className={styles.description}>
                        {teacher.description}
                    </div>
                </div>
                <div className={styles.avatar}>
                    <div className={styles.gradient}></div>
                    <img src={teacher.img} alt="" />
                </div>
                <div className={styles.right}>
                    <Tracker profession={teacher.profession} />
                    {teacher.skills.map((item, index) => (
                        <div key={index} className={styles.skills}>
                            {item}
                        </div>
                    ))}
                </div>
            </div>
            <Slider
                slides={teachers}
                activeSlide={activeSlide}
                setActiveSlide={setActiveSlide}
            />
        </section>
    )
}

export default TeachersSection
