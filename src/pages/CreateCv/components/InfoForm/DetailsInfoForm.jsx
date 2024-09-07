import { useEffect, useRef, useState } from 'react'
import './InfoForm.css'

const DetailsInfoForm = () => {
    const [experienceList, setExperienceList] = useState([''])
    const focusExperienceLRef = useRef('')

    const handleAddBulletItem = (e) => {
        if (e.keyCode === 13) {
            e.preventDefault()
            setExperienceList([
                ...experienceList.slice(0, focusExperienceLRef.tabIndex + 1),
                '',
                ...experienceList.slice(focusExperienceLRef.tabIndex + 2),
            ])
        }
    }

    useEffect(() => {
        console.log(focusExperienceLRef.current)
        if (focusExperienceLRef.current) {
            focusExperienceLRef.current.focus()
        }
    }, [experienceList])

    return (
        <div>
            <div className="general-info">
                <div className="name-info">
                    <div
                        className="contenteditable organization-name"
                        data-placeholder="Enter your organization's name"
                    >
                        <p contentEditable></p>
                    </div>
                    <p
                        className="title"
                        contentEditable
                        data-placeholder="Enter your position"
                    ></p>
                </div>
                <div className="location-date-info">
                    <p
                        className="location"
                        contentEditable
                        data-placeholder="Enter your work location"
                    ></p>
                    <p className="date">
                        <span
                            contentEditable
                            data-placeholder="Enter start date"
                        ></span>
                        <span>-</span>
                        <span
                            contentEditable={true}
                            data-placeholder="Enter end date"
                        ></span>
                    </p>
                </div>
            </div>
            <div onKeyDown={handleAddBulletItem}>
                <ul className="detail-info">
                    {experienceList.map((experience, idx) => {
                        return (
                            <li
                                key={idx}
                                contentEditable={true}
                                value={experience}
                                tabIndex={idx}
                                onFocus={(input) =>
                                    (focusExperienceLRef.current = input.target)
                                }
                                ref={
                                    (focusExperienceLRef.current === '' || idx === focusExperienceLRef.current?.tabIndex)  + 1
                                        ? (input) => focusExperienceLRef.current = input
                                        : undefined
                                }
                            ></li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default DetailsInfoForm
