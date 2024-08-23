import React from 'react'
import UserProfile from '../components/UserProfile'

const RightSider = () => {
    return (
        <div className="w-full h-full flex flex-col gap-4 pb-4">
            <div className="card shadow-xl w-full bg-cardColor overflow-hidden">
                <div className="card-body py-5 h-full">
                    <h2 className="card-title mb-3">Pages you may like</h2>
                    <div className='flex flex-col gap-3 flex-wrap w-full h-full overflow-x-hidden'>
                        <UserProfile />
                        <UserProfile />
                        <UserProfile />
                        <UserProfile />
                        <UserProfile />
                        <UserProfile />
                        <UserProfile />
                    </div>
                    <a href='/network' className='text-cyan-600'>Show more</a>
                </div>
            </div>
        </div>
    )
}

export default RightSider
