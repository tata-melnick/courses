import { CSSProperties } from "react"

export type SectionProps = { style?: CSSProperties }

export type CardType = {
    id: string
    name: string
    img: string
    term: number
    sum: number
}

export type TeacherType = {
    id: string
    name: string
    description: string
    img: string
    profession: string
    skills: string[]
}

export type ListTeacher = Array<TeacherType>
