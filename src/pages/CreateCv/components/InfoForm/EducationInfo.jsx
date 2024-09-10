import { DEGREE_EDUCATION_PLACEHOLDER, DESCRIBE_EDUCATION_PLACEHOLDER } from 'src/assets/constant'
import './InfoForm.css'

const EducationInfo = () => {
    return (
        <div>
            <div className="general-info">
                <div className="name-info">
                    <p
                        className="contenteditable organization-name"
                        data-placeholder="Institution"
                        contentEditable
                    ></p>
                    <p
                        className="title"
                        contentEditable
                        data-placeholder={DEGREE_EDUCATION_PLACEHOLDER}
                    ></p>
                </div>
                <div className="location-date-info flex flex-col items-end">
                    <p
                        className="location w-full text-right"
                        contentEditable
                        data-placeholder="City, Country"
                    ></p>
                    <p className="date w-full text-right">
                        <span
                            className="w-full"
                            contentEditable
                            data-placeholder="Graduation Date"
                        ></span>
                    </p>
                </div>
            </div>
            <div className="education-details">
                <p
                    contentEditable
                    data-placeholder={DESCRIBE_EDUCATION_PLACEHOLDER}
                    onInput={(e) => {
                        console.log(e)
                    }}
                ></p>
            </div>
        </div>
    )
}

export default EducationInfo
