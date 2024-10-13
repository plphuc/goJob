import React, { useEffect, useRef, useState } from 'react'
import parse from 'html-react-parser'

const TextInput = ({ id, name, rows = 5, value, onTextChange }) => {
    const wrapperRef = useRef(null)
    const [content, setContent] = useState(value)

    const handleClickOutside = (event) => {
        if (!wrapperRef.current.contains(event.target)) {
            setContent(wrapperRef.current.innerHTML.toString())
        }
    }
    console.log(content);
    
    useEffect(() => {
        document.addEventListener('click', handleClickOutside)
        wrapperRef.current.innerHTML = content
        return () => {
            document.removeEventListener('click', handleClickOutside)
        }
    }, [])

    return (
        <div
            ref={wrapperRef}
            contentEditable
            suppressContentEditableWarning={true}
        >
        </div>
    )
}

export default TextInput
