import React, { Dispatch, SetStateAction, useEffect, useState } from "react"
import styles from "./slider.module.css"
import cn from "classnames-ts"
import Button from "../../../../components/Button"
import { ArrowIcon } from "../../../../icons"
import { ListTeacher } from "../../../types"

interface ISliderProps {
    slides: ListTeacher
    activeSlide: number
    setActiveSlide: Dispatch<SetStateAction<number>>
}

const Slider: React.FC<ISliderProps> = ({
    slides,
    setActiveSlide,
    activeSlide,
}) => {
    const lastIndex = slides.length - 1
    const [prevSlides, setPrevSlides] = useState<ListTeacher>([])
    const [nextSlides, setNextSlides] = useState<ListTeacher>([])

    const prevSlide = () => {
        setActiveSlide((prevState) =>
            prevState === 0 ? lastIndex : prevState - 1
        )
    }

    const nextSlide = () => {
        setActiveSlide((prevState) =>
            prevState === lastIndex ? 0 : prevState + 1
        )
    }

    useEffect(() => {
        const mutableSliders = [...slides]
        if (activeSlide === 0) {
            setPrevSlides(slides.slice(lastIndex - 1))
            setNextSlides(mutableSliders.splice(1, 2))
        } else if (activeSlide === 1) {
            setPrevSlides([slides[lastIndex], slides[0]])
            const next = mutableSliders.splice(2, 2)
            if (next.length === 1) next.push(mutableSliders[0])
            setNextSlides(next)
        } else if (activeSlide === lastIndex - 1) {
            const prev = mutableSliders
                .splice(lastIndex - 3, 2)
                .filter((slide) => slide.id !== slides[activeSlide].id)
            if (prev.length === 1) prev.unshift(slides[lastIndex])
            setPrevSlides(prev)
            setNextSlides([slides[lastIndex], slides[0]])
        } else if (activeSlide === lastIndex) {
            setPrevSlides(mutableSliders.splice(lastIndex - 2, 2))
            setNextSlides(slides.slice(0, 2))
        } else {
            setPrevSlides(mutableSliders.splice(activeSlide - 2, 2))
            setNextSlides(slides.slice(activeSlide + 1, activeSlide + 3))
        }
    }, [activeSlide, slides])

    return (
        <div className={styles.slider}>
            <Button onClick={prevSlide}>
                <ArrowIcon />
            </Button>
            <div className={styles.slides}>
                {prevSlides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={cn(
                            styles.photo,
                            index === 1 && styles.secondaryPhoto
                        )}
                    >
                        <img src={slide.img} alt="" />
                    </div>
                ))}
                <div className={cn(styles.photo, styles.activePhoto)}>
                    <img src={slides[activeSlide].img} alt="" />
                </div>
                {nextSlides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={cn(
                            styles.photo,
                            index === 0 && styles.secondaryPhoto
                        )}
                    >
                        <img src={slide.img} alt="" />
                    </div>
                ))}
            </div>
            <Button onClick={nextSlide} className={styles.nextBtn}>
                <ArrowIcon />
            </Button>
        </div>
    )
}

export default Slider
