import React, { ChangeEvent, useState } from "react"
import styles from "./feedbackSection.module.css"
import Button from "../../components/Button"
import { TelegramIcon, WhatsAppIcon } from "../../icons"
import { Footer, Form } from "../../components"
import { Input } from "../../components"

const FeedbackSection: React.FC = () => {
    const [name, setName] = useState<string>("")
    const [phone, setPhone] = useState<string>("")
    const [email, setEmail] = useState<string>("")

    const handleSetName = (e: ChangeEvent<HTMLInputElement>) =>
        setName(e.target.value)
    const handleSetPhone = (e: ChangeEvent<HTMLInputElement>) =>
        setPhone(e.target.value)
    const handleSetEmail = (e: ChangeEvent<HTMLInputElement>) =>
        setEmail(e.target.value)

    return (
        <section className={styles.section}>
            <div className={styles.wrap}>
                <div className={styles.contactWrap}>
                    <h2 className={styles.title}>
                        Заинтересовались?
                        <br /> Остались вопросы?
                        <br /> Свяжитесь с нами
                    </h2>
                    <div className={styles.contacts}>
                        <Button link="#" className={styles.contact}>
                            +7 (000) 000-00-00
                        </Button>
                        <Button link="#" className={styles.contact}>
                            info@curs.ru
                        </Button>
                        <div className={styles.social}>
                            <Button link="#" className={styles.icon}>
                                <WhatsAppIcon />
                            </Button>
                            <Button link="#" className={styles.icon}>
                                <TelegramIcon />
                            </Button>
                        </div>
                    </div>
                </div>
                <Form>
                    <Input
                        type="name"
                        placeholder="Имя"
                        value={name}
                        place="modal"
                        onChange={handleSetName}
                    />
                    <Input
                        type="name"
                        placeholder="Телефон"
                        value={phone}
                        place="modal"
                        onChange={handleSetPhone}
                    />
                    <Input
                        type="email"
                        placeholder="E-mail"
                        place="modal"
                        value={email}
                        onChange={handleSetEmail}
                    />
                </Form>
            </div>
            <Footer />
        </section>
    )
}

export default FeedbackSection
