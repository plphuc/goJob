import { useEffect, useRef, useState } from 'react'
import parse from 'html-react-parser'

const Skills = ({ skills, onChangeSkills }) => {
    const wrapperRef = useRef(null)
    const [content, setContent] = useState(skills)
    const [isEditing, setIsEditing] = useState(false)

    const handleChangeText = (e) => {
        setContent(e.target.value)
    }

    const handleClickOutside = (event) => {
        if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
            console.log(wrapperRef.current.innerHTML)
            onChangeSkills(content)
            setIsEditing(false)
        }
    }

    useEffect(() => {
        document.addEventListener('click', handleClickOutside)
        return () => {
            document.removeEventListener('click', handleClickOutside)
        }
    }, [wrapperRef])

    return (
        <div 
        >
            {isEditing ? (
                <p
                    className="outline-dotted outline-1 mt-3"
                    contentEditable
                    ref={wrapperRef}
                    onInput={handleChangeText}
                    value={content}
                ></p>
            ) : (
                <p 
                    onClick={() => setIsEditing(true)}
                >
                    <p><b>Technical</b>: List computer software and programming languages and your level of fluency</p>
                    <p><b>Language</b>: List foreign languages and your level of fluency</p>
                    <p><b>Laboratory</b>: List scientific / research lab techniques or tools [If Applicable]</p>
                    <p><b>Interests</b>: List activities you enjoy that may spark interview conversation</p>
                </p>
            )}
        </div>
    )
}

export default Skills
