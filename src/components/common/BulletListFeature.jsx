import React, { useEffect, useRef } from 'react'

const BulletListFeature = ({ items, bullet = true, onChangeItems }) => {
    const focusExperienceLRef = useRef(null)
    const lastFocusedIndex = useRef(0)
    
    const handleAddBulletItem = (e) => {
        const currentTabIndex = e.target.tabIndex

        if (e.keyCode === 8) {
            // Prevent removal if list has 1 item or if the current item is the first item
            if (items.length === 1 || currentTabIndex === 0) {
                return
            }
            onChangeItems([
                ...items.slice(0, currentTabIndex),
                ...items.slice(currentTabIndex + 1),
            ])
            lastFocusedIndex.current = currentTabIndex - 1
        } else if (e.keyCode === 13) {
            e.preventDefault()
            onChangeItems([
                ...items.slice(0, currentTabIndex + 1),
                '',
                ...items.slice(currentTabIndex + 1),
            ])
            lastFocusedIndex.current = currentTabIndex + 1
        }
    }

    useEffect(() => {
        // Focus on the last focused index after list change
        if (focusExperienceLRef.current) {
            focusExperienceLRef.current.focus()
        }
    }, [items])

    return (
        <div onKeyDown={handleAddBulletItem}>
            <ul className="my-0 mx-5 py-0">
                {items.map((experience, idx) => (
                    <li
                        className={`${bullet ? 'list-disc' : ''}`}
                        key={idx}
                        contentEditable
                        tabIndex={idx}
                        ref={(el) => {
                            if (el?.tabIndex === lastFocusedIndex.current) {
                                focusExperienceLRef.current = el
                            }
                        }}
                    ></li>
                ))}
            </ul>
        </div>
    )
}

export default BulletListFeature
