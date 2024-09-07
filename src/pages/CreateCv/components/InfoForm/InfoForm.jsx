import React from 'react'
import './InfoForm.css'
import DetailsInfoForm from './DetailsInfoForm'

const InfoForm = () => {
    const handleChangeText = (e) => {
        console.log(e.target.innerText)
    }
    return (
        <div className="info-form-wrapper p-12 bg-white my-8 flex flex-col items-center">
            <div className="field-form name">
                <p
                    className="!text-3xl !text-center font-semibold input-form"
                    contentEditable={true}
                    onInput={handleChangeText}
                    data-placeholder="Enter your name"
                ></p>
            </div>
            <div className="separator"></div>
            <div className="field-form persona-info">
                <p
                    className="input-form  !text-center"
                    contentEditable={true}
                    onChange={handleChangeText}
                    data-placeholder="Enter your contact information"
                ></p>
            </div>
            <div className="field-form career-object">
                <p className='title-field'>Career Objective</p>
                <p
                    className="input-form !text-center"
                    contentEditable={true}
                    onChange={handleChangeText}
                ></p>
            </div>
            <div className="field-form education">
                <p className="title-field">Education</p>
                <p
                    className="input-form"
                    contentEditable={true}
                    onChange={handleChangeText}
                    data-placeholder="Enter your educations"
                ></p>
            </div>
            <div className="field-form experience">
                <p className="title-field">Experience</p>
                <DetailsInfoForm />
            </div>
            <div className="field-form project">
                <p className="title-field">Projects</p>
                <p
                    className="input-form"
                    contentEditable={true}
                    onChange={handleChangeText}
                    data-placeholder="Enter your projects"
                ></p>
            </div>
            <div className="field-form skills">
                <p className="title-field">Skills</p>

                <p
                    className="input-form"
                    contentEditable={true}
                    onChange={handleChangeText}
                ></p>
            </div>
        </div>
    )
}

export default InfoForm
