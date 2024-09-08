import { useEffect, useRef, useState } from 'react';
import './InfoForm.css';

const ExperienceInfo = () => {
    const [experienceList, setExperienceList] = useState(['']);
    const focusExperienceLRef = useRef(null);
    const lastFocusedIndex = useRef(0)

    const handleAddBulletItem = (e) => {
        const currentTabIndex = e.target.tabIndex;

        if (e.keyCode === 8) {
            // Prevent removal if list has 1 item or if the current item is focused
            if (experienceList.length === 1 || currentTabIndex === 0) {
                return;
            }

            // Remove item from the list
            setExperienceList(prevList => [
                ...prevList.slice(0, currentTabIndex),
                ...prevList.slice(currentTabIndex + 1),
            ]);
            lastFocusedIndex.current = currentTabIndex - 1
        } else if (e.keyCode === 13) {
            e.preventDefault();
            setExperienceList(prevList => [
                ...prevList.slice(0, currentTabIndex + 1),
                '',
                ...prevList.slice(currentTabIndex + 1),
            ]);
            lastFocusedIndex.current = currentTabIndex + 1
        }
    };

    useEffect(() => {
        // Focus on the last focused index after list change
        if (focusExperienceLRef.current) {
            focusExperienceLRef.current.focus();
        }
    }, [experienceList]);

    return (
        <div>
            <div className="general-info">
                <div className="name-info">
                    <p className="contenteditable organization-name" data-placeholder="Organization" contentEditable></p>
                    <p className="title" contentEditable data-placeholder="Position Title"></p>
                </div>
                <div className="location-date-info">
                    <p className="location" contentEditable data-placeholder="City, Country"></p>
                    <p className="date">
                        <span contentEditable data-placeholder="Month, Year"></span>
                        <span>-</span>
                        <span contentEditable data-placeholder="Month, Year"></span>
                    </p>
                </div>
            </div>
            <div onKeyDown={handleAddBulletItem}>
                <ul className="detail-info">
                    {experienceList.map((experience, idx) => (
                        <li
                            key={idx}
                            contentEditable
                            tabIndex={idx}
                            ref={el => {
                                if (el?.tabIndex === lastFocusedIndex.current) {
                                    focusExperienceLRef.current = el;
                                }
                            }}
                        >
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ExperienceInfo;
