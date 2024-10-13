import { useState } from 'react'
import './InfoForm.css'
import BulletListFeature from 'src/components/common/BulletListFeature'

const ExperienceInfo = () => {
    const [experienceList, setExperienceList] = useState([''])

    return (
        <div>
            <div className="general-info mt-3">
                <div className="name-info">
                    <p
                        className="contenteditable organization-name"
                        data-placeholder="Organization"
                        contentEditable
                    ></p>
                    <p
                        className="title"
                        contentEditable
                        data-placeholder="Position Title"
                    ></p>
                </div>
                <div className="location-date-info flex flex-col items-end">
                    <p
                        className="location w-full text-right"
                        contentEditable
                        data-placeholder="City, Country"
                    ></p>
                    <p className="date">
                        <span
                            className='min-w-[50px] text-right'
                            contentEditable
                            data-placeholder="Month, Year"
                        ></span>
                        <span className='mx-1'>-</span>
                        <span
                            className='min-w-[50px] text-right'
                            contentEditable
                            data-placeholder="Month, Year"
                        ></span>
                    </p>
                </div>
            </div>
            <BulletListFeature
                items={experienceList}
                onChangeItems={(newItems) => setExperienceList(newItems)}
            />
        </div>
    )
}

export default ExperienceInfo
