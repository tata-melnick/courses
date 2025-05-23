import React from "react"
import styles from "./card.module.css"
import { CardType } from "../../types"
import Button from "../../../components/Button"
import scrollToElement from "../../../helpers/scrollToSection"

interface ICardProps {
    detail: CardType
}

const Card: React.FC<ICardProps> = ({ detail }) => {
    const { name, img, term, sum } = detail

    const getIssues = (num: number): string => {
        const lastNum = num % 10
        if (lastNum === 1) return "месяц"
        if (lastNum > 1 && lastNum < 5) return "месяца"
        if (lastNum > 4 || !num || (num > 10 && num < 20)) return "месяцев"
        return ""
    }

    return (
        <div className={styles.card}>
            <h3 className={styles.title}>{name}</h3>
            <div className={styles.img}>
                <img src={img} alt="" />
            </div>
            <div className={styles.term}>
                <div className={styles.number}>
                    {term} {getIssues(term)}
                </div>
                <div className={styles.text}>Срок обучения</div>
            </div>
            <div className={styles.sum}>
                <div className={styles.number}>{sum} ₽</div>
                <div className={styles.text}>Стоимость</div>
            </div>
            <Button
                type="filled"
                onClick={() => scrollToElement("feedback", 80)}
                uppercase
                className={styles.btn}
            >
                Записаться
            </Button>
        </div>
    )
}

export default Card
