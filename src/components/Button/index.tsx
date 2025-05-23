import React, { SyntheticEvent } from "react"
import cn from "classnames-ts"
import styles from "./button.module.css"

interface IButtonProps {
    type?: "filled" | "text" | "link"
    submit?: boolean
    link?: string
    className?: string
    children?: React.ReactNode
    onClick?(): void
    uppercase?: boolean
    onMouseEnter?(): void
    onMouseLeave?(): void
    download?: boolean
}

const Button: React.FC<IButtonProps> = ({
    children,
    onClick,
    className,
    type = "text",
    link,
    submit,
    uppercase,
    onMouseEnter,
    onMouseLeave,
    download,
}) => {
    const handleClickLink = (e: SyntheticEvent) => {
        e.preventDefault()
        onClick()
    }

    if (link || type === "link")
        return (
            <a
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                onClick={onClick ? handleClickLink : undefined}
                href={link}
                download={download}
                className={cn(styles.link, className)}
            >
                {children && children}
            </a>
        )
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
