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
                        data-placeholder="Degree"
                    ></p>
                </div>
                <div className="location-date-info">
                    <p
                        className="location"
                        contentEditable
                        data-placeholder="City, Country"
                    ></p>
                    <p className="date">
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
                    data-placeholder="Describe your study"
                    onInput={(e) => {
                        console.log(e)
                    }}
                ></p>
            </div>
        </div>
    )
}

export default EducationInfo
