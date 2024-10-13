import React, { useState } from 'react'
import BulletListFeature from 'src/components/common/BulletListFeature'

const ProjectInfo = () => {
    const [projectList, setProjectList] = useState([['']])
    return (
        <div>
            <div className="general-info mt-3">
                <div className="name-info min-w-[100px]">
                    <p
                        className="contenteditable w-full"
                        data-placeholder="Name"
                        contentEditable
                    ></p>
                </div>
                <div className="location-date-info">
                    <p className="date">
                        <span
                            className='min-w-[50px] text-right'
                            contentEditable
                            data-placeholder="Month, Year"
                        ></span>
                        <span className="mx-1">-</span>
                        <span
                            className='min-w-[50px] text-right'
                            contentEditable
                            data-placeholder="Month, Year"
                        ></span>
                    </p>
                </div>
            </div>
            {projectList.map((project, idx) => {
                return (
                    <BulletListFeature
                        key={idx}
                        items={project}
                        onChangeItems={(newProject) =>
                            setProjectList((projectListPrev) =>
                                projectListPrev.map(
                                    (projectToUpdate, idxToUpdate) => {
                                        return idx === idxToUpdate
                                            ? newProject
                                            : projectToUpdate
                                    }
                                )
                            )
                        }
                    />
                )
            })}
        </div>
    )
}

export default ProjectInfo
