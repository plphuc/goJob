import React from 'react'

const ProjectInfo = () => {
    return (
        <div>
            <div className="general-info">
                <div className="name-info min-w-[100px]">
                    <p className="contenteditable organization-name w-full" data-placeholder="Name" contentEditable></p>
                </div>
                <div className="location-date-info">
                    <p className="date">
                        <span contentEditable data-placeholder="Month, Year"></span>
                        <span>-</span>
                        <span contentEditable data-placeholder="Month, Year"></span>
                    </p>
                </div>
            </div>
            <div className="education-details">
                <p
                    contentEditable
                    data-placeholder="Describe your project"
                    onInput={(e) => {
                        console.log(e)
                    }}
                ></p>
            </div>
        </div>
    );
}

export default ProjectInfo
