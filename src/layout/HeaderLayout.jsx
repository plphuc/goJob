import React from 'react'
import { Logo, Search } from '../assets/svg/Svg'
import {
    BellFilled,
    HomeOutlined,
    PlusCircleFilled,
    TeamOutlined,
} from '@ant-design/icons'

const HeaderLayout = () => {
    return (
        <div className="h-full flex-center justify-between">
            <div className="left-header flex items-center gap-3 justify-between">
                <div className="logo h-full max-h-[50px] max-w-[50px]">
                    <Logo />
                </div>
                <div className="search flex-1 w-[400px]">
                    <label className="input input-bordered flex items-center gap-2 bg-cardColor">
                        <input
                            type="text"
                            className="grow text-textColor"
                            placeholder="Search"
                        />
                        <Search customClassName="text-textColor w-[20px] h-[20px]" />
                    </label>
                </div>
            </div>
            <div className="right-header flex items-center">
                <div className="navbar flex items-center gap-3 mr-3">
                    <button className="btn rounded-full px-1 mr-2">
                        <a href="/" className="min-w-[70px]">
                            <HomeOutlined />
                            <p className="mt-1">Home</p>
                        </a>
                    </button>
                    <button className="btn btn-ghost text-textColor px-2">
                        <a href="/my-network">
                            <TeamOutlined className="text-2xl" />
                            <p className="mt-1">My Network</p>
                        </a>
                    </button>
                    <button className="btn btn-ghost text-textColor px-2">
                        <a href="/createCv">
                            <PlusCircleFilled className="text-2xl" />
                            <p className="mt-1">Create CV</p>
                        </a>
                    </button>
                    <button className="btn btn-ghost text-textColor px-2">
                        <a href="/my-network">
                            <BellFilled className="text-2xl" />
                            <p className="mt-1">Notifications</p>
                        </a>
                    </button>
                </div>
                <div className="profile flex items-center cursor-pointer">
                    <div className="avatar">
                        <div className="w-[40px] h-[40px] rounded-full">
                            <img
                                src="https://images6.alphacoders.com/133/thumb-1920-1333611.jpeg"
                                alt="avatar"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderLayout
