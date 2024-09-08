import React, { useEffect, useRef, useState } from 'react'
import './InfoForm.css'

const ContactInfo = () => {
    const currentContactInfoRef = useRef('')
    const lastFocusedIndex = useRef(0)

    const [contactInfoList, setContactInfoList] = useState([''])
    const [isFocus, setIsFocus] = useState(false)

    const handleModifyContactInfoList = (e) => {
        const currentTabIndex = e.target.tabIndex
        if (e.keyCode === 8) {
            // not allow remove when list has 1 item/Current Ref in tabIndex 0
            if (contactInfoList.length === 1 || e.target.tabIndex === 0) {
                return
            }            

            setContactInfoList((prevList) => [
                ...prevList.slice(0, currentTabIndex),
                ...prevList.slice(currentTabIndex + 1),
            ])

            lastFocusedIndex.current = currentTabIndex - 1
        }
        if (e.keyCode === 13) {
            e.preventDefault()
            setContactInfoList((prevList) => [
                ...prevList.slice(0, currentTabIndex + 1),
                '',
                ...prevList.slice(currentTabIndex + 1),
            ])

            lastFocusedIndex.current = currentTabIndex + 1
        }
    }

    useEffect(() => {
        if (currentContactInfoRef.current) {
            currentContactInfoRef.current.focus()
        }
    }, [contactInfoList])

    return (
        <div className="flex items-center mt-1">
            <div
                className="flex justify-center flex-1"
                onKeyDown={handleModifyContactInfoList}
                onClick={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
            >
                {(contactInfoList.length > 1 && contactInfoList[0] === '') ||  isFocus === true
                ? contactInfoList.map((contactInfo, idx) => {
                    return (
                        <li key={idx} className="list-disc min-w-[100px]">
                            <span
                                key={idx}
                                className="input-form !w-unset focus:outline-none relative -left-3"
                                contentEditable={true}
                                defaultValue={contactInfo}
                                tabIndex={idx}
                                ref={(el) => {
                                    if (el?.tabIndex === lastFocusedIndex.current) {
                                        currentContactInfoRef.current = el
                                    }
                                }}
                            ></span>
                        </li>
                    )
                }) 
                : <p>Detail Contact Information</p>}
            </div>
        </div>
    )
}

export default ContactInfo
