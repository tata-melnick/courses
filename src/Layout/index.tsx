import React, { useEffect, useRef, useState } from "react"
import styles from "./layout.module.css"
import Header from "./Header"
import {
    CoursesSection,
    FeedbackSection,
    MotivationalSection,
    OfferSection,
    TeachersSection,
} from "../sections"

const Layout: React.FC = () => {
    const [offsetOffer, setOffsetOffer] = useState<boolean>(false)
    const [offsetCourses, setOffsetCourses] = useState<boolean>(false)
    const prevScrollValue = useRef<number>(0)

    useEffect(() => {
        const onScroll = () => {
            const isUp = prevScrollValue.current > window.scrollY
            prevScrollValue.current = window.scrollY
            if (!isUp && window.scrollY > 3000) {
                setOffsetOffer(true)
            }
            if (isUp && window.scrollY > 3000 && window.scrollY < 3600) {
                setOffsetOffer(false)
            }
            if (!isUp && window.scrollY > 3600) {
                setOffsetCourses(true)
            }
            if (isUp && window.scrollY > 3600 && window.scrollY < 3900) {
                setOffsetCourses(false)
            }
        }

        document.addEventListener("scroll", onScroll)

        return () => document.removeEventListener("scroll", onScroll)
    }, [offsetOffer])

    return (
        <div className={styles.layout}>
            <Header />
            <MotivationalSection />
            <OfferSection style={{ marginTop: offsetOffer ? "-50%" : 0 }} />
            <CoursesSection style={{ marginTop: offsetCourses ? "-50%" : 0 }} />
            <TeachersSection />
            <FeedbackSection />
        </div>
    )
}

export default Layout
