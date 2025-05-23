import React, { useState } from "react"
import cn from "classnames-ts"
import styles from "./checkbox.module.css"

interface ICheckboxProps {
    value?: string
}

const Checkbox: React.FC<ICheckboxProps> = ({ value }) => {
    const [checked, setChecked] = useState<boolean>(false)

    const handleChange = () => {
        setChecked(!checked)
    }
    return (
        <div className={styles.label}>
            <label
                className={cn(styles.checkbox, checked && styles.checkboxOn)}
            >
                <input
                    hidden
                    type="checkbox"
                    checked={checked}
                    onChange={handleChange}
                />
            </label>
            <span
                className={cn(styles.labelText, checked && styles.checkboxOn)}
            >
                {value}
            </span>
        </div>
    )
}

export default Checkbox
