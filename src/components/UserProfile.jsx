import React from 'react'

const UserProfile = ({name, username, avatar}) => {
    return (
        <div className="user-profile flex-center justify-between gap-3">
            <div className="avt">
                <div className="avatar">
                    <div className="w-[40px] h-[40px] rounded-full">
                        <img
                            src="https://images6.alphacoders.com/133/thumb-1920-1333611.jpeg"
                            alt="avatar"
                        />
                    </div>
                </div>
            </div>
            <div className="user-info flex-1">
                <a
                    href="/profile/:userId"
                    className="name text-textColor font-semibold"
                >
                    Peppa Pig
                </a>
                <p className="username text-descriptionColor">@peppapig</p>
            </div>
            <button className="btn btn-sm btn-active w-[70px] rounded-full">
                Follow
            </button>
        </div>
    )
}

export default UserProfile
