import { PlusOutlined } from '@ant-design/icons'
import React, { useEffect, useRef, useState } from 'react'
import './InfoForm.css'

const ContactInfo = () => {
    const currentContactInfoRef = useRef('')
    const [contactInfoList, setContactInfoList] = useState([''])

    const handleModifyContactInfoList = (e) => {
        if (e.keyCode === 8) {
            // not allow remove when list has 1 item/Current Ref in tabIndex 0
            if (contactInfoList.length === 1 || e.target.tabIndex === 0) {
                return
            }

            setContactInfoList([
                ...contactInfoList.slice(0, currentContactInfoRef.current.tabIndex),
                ...contactInfoList.slice(currentContactInfoRef.current.tabIndex + 1),
            ])
            return
        }
        if (e.keyCode === 13) {
            e.preventDefault()
            setContactInfoList([
                ...contactInfoList.slice(0, currentContactInfoRef.current.tabIndex + 1),
                '',
                ...contactInfoList.slice(currentContactInfoRef.current.tabIndex + 2),
            ])
            return
        }
    }

    // useEffect(() => {
    //     if (currentContactInfoRef.current) {
    //         currentContactInfoRef.current.focus()
    //     }
    // }, [contactInfoList])

    return (
        <div
            onKeyDown={handleModifyContactInfoList}
            className="flex items-center mt-1"
        >
            {/* <div className="flex justify-center flex-1">
                {contactInfoList.map((contactInfo, idx) => {
                    return (
                        <li key={idx} className="list-disc">
                            <span
                                key={idx}
                                className="input-form !w-unset focus:outline-none relative -left-3"
                                contentEditable={true}
                                defaultValue={contactInfo}
                                ref={
                                    currentContactInfoRef.current === '' ||
                                    idx === currentContactInfoRef.current?.tabIndex + 1
                                        ? (input) => {
                                              currentContactInfoRef.current = input
                                              currentContactInfoRef.current.focus()
                                          }
                                        : undefined
                                }
                            ></span>
                        </li>
                    )
                })}
            </div> */}
            <PlusOutlined className="cursor-pointer" />
        </div>
    )
}

export default ContactInfo
