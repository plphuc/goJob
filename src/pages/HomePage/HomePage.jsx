import React, { useState } from 'react'
import SiderLayout from 'src/layout/SiderLayout'
import RightSider from 'src/layout/RightSider'
import Post from 'src/components/Post'
import MainLayout from 'src/layout/MainLayout'
import { SendOutlined } from '@ant-design/icons'
import 'src/assets/css/createPostModal.css'
import toast from 'react-hot-toast'
import { useMutation, useQuery } from '@apollo/client'
import { CREATE_POST } from 'src/graphql/mutations/post.mutation'
import { GET_POSTS } from 'src/graphql/queries/post.query'
import EditPostModal from './components/EditPostModal'

const HomePage = () => {
    const [content, setContent] = useState(undefined)
    const [title, setTitle] = useState(undefined)
    const [postImage, setPostImage] = useState(undefined)
    const [isOpenCreatePostModal, setIsOpenEditPostModal] = useState(false)

    const { data: posts, loading, error } = useQuery(GET_POSTS)
    const [createPost] = useMutation(CREATE_POST, {
        refetchQueries: [GET_POSTS ]
    })

    const handleUploadFile = (e) => {
        setPostImage(e.target.value)
    }

    const handleSubmitPost = async () => {
        if (title === '') {
            toast.error('Title is required')
            return
        }
        if (content === '<p><br></p>' && !postImage) {
            toast.error('Post must have at least content or image')
            return
        }
        // const formData = new FormData()
        // if (postImage) {
        //     formData.append('file', postImage)
        // }

        try {
            // let postImageId = ''
            // if (postImage) {
            //     const postImageResponse = await axiosHelper({
            //         url: '/file',
            //         method: 'POST',
            //         body: formData,
            //     })
            //     postImageId = await postImageResponse.json()
            // }

            await createPost({
                variables: {
                    input: {
                        title,
                        content,
                        imageUrl: postImage,
                    },
                },
            })
            toast.success('Create post successfully')
        } catch (error) {
            console.error(error.message)
            toast.error("Can't create post")
        } finally {
            setTitle(undefined)
            setContent(undefined)
            setPostImage(undefined)
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
                <div className="h-full overflow-y-auto flex gap-5 bg-backgroundColor pb-4 2xl:col-start-4 2xl:col-end-13">
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
                                                setIsOpenEditPostModal(true)
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
                                        <EditPostModal
                                            content={content}
                                            onChangeContent={(value) =>
                                                setContent(value)
                                            }
                                            isOpenCreatePostModal={
                                                isOpenCreatePostModal
                                            }
                                            onCloseModal={() => {
                                                setTitle(undefined)
                                                setContent(undefined)
                                                setPostImage(undefined)
                                                setIsOpenEditPostModal(false)
                                            }}
                                            onUploadFile={handleUploadFile}
                                            onSubmitPost={handleSubmitPost}
                                            title={title}
                                            onChangeTitle={(value) =>
                                                setTitle(value)
                                            }
                                        />
                                    </div>
                                </div>
                                {/* new feed */}
                                <div className="new-feed flex gap-2 flex-col pb-5">
                                    {posts &&
                                        posts.getPosts.map((post) => (
                                            <Post key={post._id} post={post} />
                                        ))}
                                </div>
                            </div>
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
