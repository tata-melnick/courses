import React, { useRef, useState } from "react"
import cn from "classnames-ts"
import styles from "./form.module.css"
import Button from "../Button"
import Checkbox from "../Checkbox"
import ReCAPTCHA from "react-google-recaptcha"

interface IFormProps {
    children?: React.ReactNode
}

const Form: React.FC<IFormProps> = ({ children }) => {
    const [hover, setHover] = useState(false)
    const recaptchaRef = useRef<ReCAPTCHA>(null)

    const onMouseEnter = () => setHover(true)
    const onMouseLeave = () => setHover(false)

    const onSubmit = () => {
        const token = recaptchaRef.current.getValue()
        console.log("reCAPTCHA token:", token) // Здесь можно отправить токен на сервер для верификации
    }

    return (
        <form onSubmit={onSubmit} className={cn("form", styles.container)}>
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
                <ReCAPTCHA
                    sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                    ref={recaptchaRef}
                />
                <Button type="filled" submit uppercase className={styles.btn}>
                    Отправить
                </Button>
            </div>
        </form>
    )
}

export default Form
