import React, { useState } from "react"
import cn from "classnames-ts"
import styles from "./form.module.css"
import Button from "../Button"
import Checkbox from "../Checkbox"

interface IFormProps {
    children?: React.ReactNode
    submitForm?(): void
}

const Form: React.FC<IFormProps> = ({ children, submitForm }) => {
    const [hover, setHover] = useState(false)

    const onMouseEnter = () => setHover(true)
    const onMouseLeave = () => setHover(false)

    return (
        <form onSubmit={submitForm} className={cn("form", styles.container)}>
            <div className={styles.input}>{children}</div>
            <div className={styles.text}>
                <Checkbox
                    value={""}
                    // checked={} onChange={}
                />
                Ознакомлен с
                <Button
                    link="public/documents/confidentiality.txt"
                    download
                    className={cn(styles.link, hover && styles.linkPersonal)}
                    onMouseLeave={onMouseLeave}
                    onMouseEnter={onMouseEnter}
                >
                    Политикой в области обработки
                </Button>
                <Button
                    link="public/documents/confidentiality.txt"
                    download
                    className={cn(styles.link, hover && styles.linkPersonal)}
                    onMouseLeave={onMouseLeave}
                    onMouseEnter={onMouseEnter}
                >
                    персональных данных
                </Button>
                и даю
                <Button
                    link="public/documents/consent-to-processing.txt"
                    download
                    className={styles.link}
                >
                    согласие на их обработку
                </Button>
            </div>
            <div className={styles.wrap}>
                <div className={styles.captcha}></div>
                <Button type="filled" uppercase className={styles.btn}>
                    Отправить
                </Button>
            </div>
        </form>
    )
}

export default Form
