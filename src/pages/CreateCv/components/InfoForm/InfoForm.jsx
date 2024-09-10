import React from 'react'
import './InfoForm.css'
import ExperienceInfo from './ExperienceInfo'
import ContactInfo from './ContactInfo'
import EducationInfo from './EducationInfo'
import ProjectInfo from './ProjectInfo'
import { CAREER_OBJECTIVE_PLACEHOLDER } from 'src/assets/constant'

const InfoForm = () => {
    const handleChangeText = (e) => {
        console.log(e.target.innerText)
    }
    return (
       <div className='info-form-wrapper bg-white my-8 w-[210mm] h-[297mm] inline-block p-12 self-center'>
            <div className="flex flex-col items-center ">
                <div className="field-form name">
                    <p
                        className="!text-sm !text-center font-semibold input-form"
                        contentEditable={true}
                        onInput={handleChangeText}
                        data-placeholder="FirstName LastName"
                    ></p>
                </div>
                <div className="separator"></div>
                <div className="field-form persona-info"><ContactInfo /></div>
                <div className="field-form career-object mt-3">
                    <p className='title-field'>Career Objective</p>
                    <p
                        className="input-form !text-justify"
                        contentEditable={true}
                        onChange={handleChangeText}
                        data-placeholder={CAREER_OBJECTIVE_PLACEHOLDER}
                    ></p>
                </div>
                <div className="field-form education mt-3">
                    <p className="title-field">Education</p>
                    <EducationInfo />
                </div>
                <div className="field-form experience mt-3">
                    <p className="title-field">Experience</p>
                    <ExperienceInfo />
                </div>
                <div className="field-form project mt-3">
                    <p className="title-field">Projects</p>
                    <ProjectInfo />
                </div>
                <div className="field-form skills mt-3">
                    <p className="title-field">Skills</p>
    
                    <p
                        className="input-form"
                        contentEditable={true}
                        onChange={handleChangeText}
                    ></p>
                </div>
            </div>
       </div>
    )
}

export default InfoForm
