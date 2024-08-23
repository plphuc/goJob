import { EditOutlined, PlusOutlined } from '@ant-design/icons'
import React from 'react'

const UserSection = ({
    cardTitle,
    title,
    avatar,
    primaryDescription,
    moreInfos,
    customMoreActions,
}) => {
    return (
        <div className="card bg-cardColor">
            <div className="card-body p-5">
                <h2 className="card-title">
                    <p>{cardTitle}</p>
                    <div className="card-actions flex items-center">
                        {customMoreActions ? (
                            customMoreActions
                        ) : (
                            <>
                                <PlusOutlined />
                                <EditOutlined />
                            </>
                        )}
                    </div>
                </h2>
                <div className="flex items-start gap-2">
                    <div>
                        <img className='w-14 h-14 rounded-lg' src={avatar} alt="card-image" />
                    </div>
                    <div className="">
                        <p className='text-base font-medium'>{title}</p>
                        <p>{primaryDescription}</p>
                        {moreInfos.map((info) => (
                            <div className='text-descriptionColor'>{info}</div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserSection
