import React from 'react'

const Post = () => {
    return (
        <div className="card shadow-xl w-full bg-cardColor p-5 flex justify-start flex-row gap-5">
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
            <div className="post-content">
                <div>
                    <p>HYPEBEAST</p>
                    <p>@HYPEBEAST</p>
                </div>
                <p>2 hours ago</p>
                <p>Sole Mates: Hello world</p>
            </div>
        </div>
    )
}

export default Post
