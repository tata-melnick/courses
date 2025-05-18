import React from "react"
import cn from "classnames-ts"
import styles from "./button.module.css"

interface IButtonProps {
    type?: "filled" | "text"
    submit?: boolean
    link?: string
    className?: string
    children?: React.ReactNode
    onClick?(): void
    uppercase?: boolean
}

const Button: React.FC<IButtonProps> = ({
    children,
    onClick,
    className,
    type = "text",
    submit,
    uppercase,
}) => {
    return (
        <button
            onClick={onClick}
            type={submit ? "submit" : "button"}
            className={cn(
                styles.btn,
                type === "text" && styles.btnText,
                type === "filled" && styles.btnFilled,
                uppercase && styles.uppercase,
                className
            )}
        >
            {children && children}
        </button>
    )
}

export default Button
