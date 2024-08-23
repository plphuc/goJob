import React from 'react'
import { postsMock } from '../mock/postMock'
import parse from 'html-react-parser'
import { CommentIcon, Love, ShareIcon } from '../assets/svg/Svg'
import '../assets/css/post.css'
import { MoreOutlined } from '@ant-design/icons'

const mockData = postsMock[0]

const Post = () => {
    return (
        <div className="card shadow-xl w-full bg-cardColor p-5 justify-start">
            <div className="flex flex-row gap-5">
                <div className="avt">
                    <div className="avatar">
                        <div className="w-[50px] h-[50px] rounded-full">
                            <img src={mockData.avatar} alt="avatar" />
                        </div>
                    </div>
                </div>
                <div className="post-content flex flex-col gap-4">
                    <div className=''>
                        <div className="post-info flex items-start justify-between">
                            <div>
                                <div className="flex gap-2 items-center">
                                    <p className="font-bold text-textColor">
                                        CONAN EDOGAWA
                                    </p>
                                    <p className="text-xs text-descriptionColor font-medium">
                                        @fujifujigo
                                    </p>
                                </div>
                                <p className="text-xs text-descriptionColor">
                                    2 hours ago
                                </p>
                            </div>
                            <div><MoreOutlined className='text-descriptionColor text-2xl' rotate={90}/></div>
                        </div>
                    </div>
                    <div className="post-main-content text-textColor">
                        {parse(mockData.content)}
                        {mockData?.postImage && <img className='mt-4 rounded-xl' src={mockData.postImage} alt='as'/>}
                    </div>
                    <div className="actions flex-center justify-evenly gap-5">
                        <div className="action btn btn-active">
                            <Love customClassName="action-icon" />
                            <p>Love</p>
                        </div>
                        <div className="action btn btn-active">
                            <CommentIcon customClassName="action-icon" />
                            <p>Comment</p>
                        </div>
                        <div className="action btn btn-active">
                            <ShareIcon customClassName="action-icon" />
                            <p>Share</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post
