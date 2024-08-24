import { Layout } from 'antd'
import React from 'react'
import SiderLayout from '../layout/SiderLayout'
import RightSider from '../layout/RightSider'
import { Photo } from '../assets/svg/Svg'
import Post from '../components/Post'
import MainLayout from '../layout/MainLayout'

const HomePage = () => {
    return (
        <MainLayout>
            <div className="flex-1 gap-5 overflow-y-hidden bg-backgroundColor mt-2 grid 2xl:grid-cols-12">
                <div
                    className="h-full col-start-1 2xl:col-span-3 overflow-y-hidden"
                    style={{ background: '#05151d' }}
                >
                    <SiderLayout />
                </div>
                <div className="h-full overflow-y-auto no-scrollbar flex gap-5 bg-backgroundColor pb-4 2xl:col-start-4 2xl:col-end-13">
                    <div className="bg-backgroundColor h-full">
                        <div className="h-full">
                            <div className="main-content">
                                {/* post area */}
                                <div className="card shadow-xl w-full bg-cardColor p-4 flex justify-start flex-row gap-5 mb-4">
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
                                            <kbd className="kbd kbd-sm bg-transparent border-none">
                                                <Photo customClassName="h-6 w-6" />
                                            </kbd>
                                        </label>
                                    </div>
                                </div>
                                {/* new feed */}
                                <div className="new-feed flex gap-2 flex-col pb-5">
                                    <Post />
                                    <Post />
                                    <Post />
                                </div>
                            </div>
                            <div className="right-content"></div>
                        </div>
                    </div>
                    <div style={{ background: '#05151d' }}>
                        <RightSider />
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

export default HomePage
