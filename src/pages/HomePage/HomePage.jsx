import React, { useRef, useState } from 'react'
import SiderLayout from 'src/layout/SiderLayout'
import RightSider from 'src/layout/RightSider'
import Post from 'src/components/Post'
import MainLayout from 'src/layout/MainLayout'
import { SendOutlined } from '@ant-design/icons'
import { Modal, Upload } from 'antd'
import 'src/assets/css/createPostModal.css'
import CreatePostEditor from './components/CreatePostEditor'
import { Photo } from 'src/assets/svg/Svg'
import toast from 'react-hot-toast'
import { useMutation } from '@apollo/client'
import { CREATE_POST } from 'src/graphql/mutations/post.mutation'

const HomePage = () => {
    const content = useRef()
    const title = useRef()
    const [isOpenCreatePostModal, setIsOpenCreatePostModal] = useState(false)
    const [postImage, setPostImage] = useState(null)
    const [createPost, { loading, error }] = useMutation(CREATE_POST)

    const handleUploadImage = ({ fileList }) => {
        setPostImage(fileList[0].originFileObj)
    }

    const handleSubmitPost = async () => {
        const formData = new FormData()
        if (postImage) {
            formData.append('file', postImage)
        }

        try {
            let postImageId = ''
            console.log(1)

            if (postImage) {
                console.log(2)

                const postImageResponse = await fetch(
                    'http://localhost:4000/file',
                    {
                        method: 'POST',
                        body: formData,
                    }
                )
                postImageId = await postImageResponse.json()
                console.log(3)
            }
            console.log(4)
            console.log(title.current.value)
            console.log(content.current)
            console.log(postImageId)

            await createPost({
                variables: {
                    input: {
                        title: title.current.value,
                        content: content.current,
                        imageId: postImageId,
                    },
                },
            })
        } catch (error) {
            console.error(error.message)
            toast.error("Can't create post")
        }
    }

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
                                        <div
                                            className="input input-bordered flex items-center gap-2 bg-btnColor"
                                            onClick={() =>
                                                setIsOpenCreatePostModal(true)
                                            }
                                        >
                                            <input
                                                type="text"
                                                className="grow text-textColor cursor-pointer"
                                                placeholder="Share your thoughts"
                                            />
                                            <kbd className="kbd kbd-sm bg-transparent border-none cursor-pointer">
                                                <SendOutlined className="text-lg" />
                                            </kbd>
                                        </div>
                                    </div>
                                </div>
                                {/* new feed */}
                                <div className="new-feed flex gap-2 flex-col pb-5">
                                    <Post />
                                    <Post />
                                    <Post />
                                </div>
                            </div>
                            <Modal
                                className="create-post-modal"
                                destroyOnClose={true}
                                open={true}
                                onCancel={() => setIsOpenCreatePostModal(false)}
                                footer={
                                    <div className="flex justify-between items-center">
                                        <Upload
                                            beforeUpload={() => false}
                                            onChange={handleUploadImage}
                                            className="cursor-pointer flex items-center justify-center rounded-md border"
                                            maxCount={1}
                                        >
                                            <Photo customClassName="h-6 w-6 m-1" />
                                        </Upload>
                                        <div className="flex items-center gap-1 justify-end">
                                            <button
                                                className="btn btn-sm btn-outline w-[70px] rounded-full border-textLinkColor"
                                                onClick={() =>
                                                    setIsOpenCreatePostModal(
                                                        false
                                                    )
                                                }
                                            >
                                                Cancel
                                            </button>
                                            <button
                                                className="btn btn-sm btn-active w-[70px] rounded-full bg-textLinkColor border-textLinkColor"
                                                onClick={handleSubmitPost}
                                            >
                                                Post
                                            </button>
                                        </div>
                                    </div>
                                }
                                title={
                                    <>
                                        <p className="bg-white text-xl mb-3 font-semibold">
                                            Create a Post
                                        </p>
                                        <input
                                            ref={title}
                                            type="text"
                                            placeholder="Enter post's title"
                                            className="input input-bordered w-full"
                                        />
                                    </>
                                }
                            >
                                <CreatePostEditor content={content} />
                            </Modal>
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
