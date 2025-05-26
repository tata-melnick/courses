import React from "react"
import styles from "./footer.module.css"
import Button from "../Button"
import { RocketIcon } from "../../icons"
import scrollToElement from "../../helpers/scrollToSection"

const Footer: React.FC = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.info}>
                <div className={styles.contact}>
                    ИНН/ОГРН: 0245963841/1200200037773
                </div>
                <div className={styles.contact}>
                    Телефон: +7 (999) 997-75-99
                </div>
                <div className={styles.contact}>E-mail: info@mismi.tech</div>
            </div>
            <div className={styles.info}>
                <div className={styles.adress}>г. Москва, Проспект 2</div>
                <div className={styles.copyright}>© 2025 ООО "КУРС"</div>
                <Button link="public/documents/confidentiality.txt" download>
                    Политика конфиденциальности
                </Button>
            </div>
            <Button
                link=""
                onClick={() => scrollToElement("header", 80)}
                className={styles.btnRocket}
            >
                <RocketIcon />
            </Button>
        </div>
    )
}

export default Footer
