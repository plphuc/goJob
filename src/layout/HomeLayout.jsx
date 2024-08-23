import React from 'react'
import { Photo } from '../assets/svg/Svg'
import Post from '../components/Post'

const HomeLayout = () => {
    return (
        <div className="h-full">
            <div className="main-content">
                {/* post area */}
                <div className="card shadow-xl w-full bg-cardColor p-4 flex justify-start flex-row gap-5 mb-5">
                    <div className="avt">
                        <div className="avatar">
                            <div className="w-[50px] h-[50px] rounded-full">
                                <img
                                    src="https://images6.alphacoders.com/133/thumb-1920-1333611.jpeg"
                                    alt="avatar"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex-1">
                        <label className="input input-bordered flex items-center gap-2 bg-btnColor">
                            <input
                                type="text"
                                className="grow text-textColor"
                                placeholder="Share your thoughts"
                            />
                            <kbd className="kbd kbd-sm bg-transparent border-none"><Photo customClassName="h-6 w-6" /></kbd>
                        </label>
                    </div>
                </div>
                {/* new feed */}
                <div className='new-feed flex gap-5 flex-col pb-5'>
                    <Post />
                    <Post />
                    <Post />
                </div>
            </div>
            <div className="right-content"></div>
        </div>
    )
}

export default HomeLayout
