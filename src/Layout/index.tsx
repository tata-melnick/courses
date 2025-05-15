import React from "react"
import styles from "./layout.module.css"
import Header from "./components/Header"
import Content from "./components/Content"
import Footer from "./components/Footer"

const Layout: React.FC = () => {
    return (
        <div className={styles.layout}>
            <Header />
            <Content />
            <Footer />
        </div>
    )
}

export default Layout
