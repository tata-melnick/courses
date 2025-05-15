import React from "react"
import styles from "./styles.module.css"
import Button from "../../components/Button"

const Header: React.FC = () => {
    return (
        <div className={styles.header}>
            <div className={styles.wrap}>
                <div className={styles.btn}>
                    <Button type="text">Курсы</Button>
                    <Button type="text">Преподаватели</Button>
                </div>
                <div className={styles.logo}>ЛОГОТИП</div>
                <div className={styles.titleWrap}>
                    <h1 className={styles.title}>
                        Площадка по обучению IT-компетенциям
                    </h1>
                    <p className={styles.text}>
                        Освой профессию мечты, которая позволит
                        <br /> работать с любого уголка земного шара
                    </p>
                    <Button type="filled">Получить консультацию</Button>
                </div>
            </div>
        </div>
    )
}

export default Header
