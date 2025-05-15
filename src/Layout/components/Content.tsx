import React from "react"
import styles from "./styles.module.css"
import {
    CoursesSection,
    FeedbackSection,
    MotivationalSection,
    OfferSection,
    TeachersSection,
} from "../../sections"

const Content: React.FC = () => {
    return (
        <div>
            <MotivationalSection />
            <OfferSection />
            <CoursesSection />
            <TeachersSection />
            <FeedbackSection />
        </div>
    )
}

export default Content
