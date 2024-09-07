import React, { useMemo, useState } from 'react'
import { CommentIcon, Love, ShareIcon } from '../assets/svg/Svg'
import '../assets/css/post.css'
import { MoreOutlined } from '@ant-design/icons'
import { timestampToWeekDate } from 'src/utils/formatTimestamp'
import PostContent from './PostContent/PostContent'
import { Dropdown, Modal } from 'antd'
import EditPostModal from 'src/pages/HomePage/components/EditPostModal'
import toast from 'react-hot-toast'
import { useMutation } from '@apollo/client'
import { DELETE_POST, EDIT_POST } from 'src/graphql/mutations/post.mutation'
import { GET_POSTS } from 'src/graphql/queries/post.query'

const Post = ({ post }) => {
    const {
        _id,
        title,
        content,
        imageUrl,
        createdDate,
        user: { username, name, profilePicture },
    } = post

    const [isOpenRemoveModal, setIsOpenRemoveModal] = useState(false)
    const [isOpenEditModal, setIsOpenEditModal] = useState(false)
    const [postImage, setPostImage] = useState(imageUrl)
    const [contentPost, setContent] = useState(content)
    const [titlePost, setTitle] = useState(title)
    const [editPost, { loadingEdit }] = useMutation(EDIT_POST, {
        refetchQueries: [GET_POSTS],
    })

    const [removePost, { loadingRemove }] = useMutation(DELETE_POST, {
        refetchQueries: [GET_POSTS],
    })

    const editPostItems = useMemo(() => {
        return [
            {
                key: '1',
                label: (
                    <p
                        onClick={() => setIsOpenEditModal(true)}
                        className="font-semibold"
                    >
                        Edit Post
                    </p>
                ),
            },
            {
                key: '2',
                label: (
                    <p
                        onClick={() => setIsOpenRemoveModal(true)}
                        className="font-semibold"
                    >
                        Remove Post
                    </p>
                ),
            },
        ]
    }, [])

    const handleRemovePost = async () => {
        try {
            await removePost({
                variables: {
                    input: {
                        _id,
                    },
                },
            })
        } catch (error) {
            console.error(error.message)
            toast.error("Can't remove post")
        } finally {
            setIsOpenRemoveModal(false)
        }
    }

    const handleSubmitEditedPost = async () => {
        if (title === '') {
            toast.error('Title is required')
            return
        }
        if (content === '<p><br></p>' && !postImage) {
            toast.error('Post must have at least content or image')
            return
        }
        try {
            await editPost({
                variables: {
                    input: {
                        _id: _id,
                        title: titlePost,
                        content: contentPost,
                        imageUrl: postImage,
                    },
                },
            })
            toast.success("Edit post successfully")
            setIsOpenEditModal(false)
        } catch (error) {
            console.error(error.message)
            toast.error("Can't edit post")
        }
    }

    return (
        <div className="card shadow-xl w-full bg-cardColor p-5 justify-start">
            <div className="flex flex-row gap-5">
                <div className="avt">
                    <div className="avatar">
                        <div className="w-[50px] h-[50px] rounded-full">
                            <img src={profilePicture} alt="avatar" />
                        </div>
                    </div>
                </div>
                <div className="post-content flex flex-col gap-4">
                    <div className="">
                        <div className="post-info flex items-start justify-between">
                            <div>
                                <div className="flex gap-2 items-center">
                                    <p className="font-bold text-textColor">
                                        {name}
                                    </p>
                                    <p className="text-xs text-descriptionColor font-medium">
                                        @{username}
                                    </p>
                                </div>
                                <p className="text-xs text-descriptionColor">
                                    {timestampToWeekDate(createdDate)}
                                </p>
                            </div>
                            <Dropdown menu={{ items: editPostItems }}>
                                <MoreOutlined
                                    className="text-descriptionColor text-2xl cursor-pointer"
                                    rotate={90}
                                />
                            </Dropdown>
                        </div>
                    </div>
                    <div className="post-main-content text-textColor">
                        <h1 className="font-bold text-2xl text-[#a875d7] mb-2">{title}</h1>
                        {content && <PostContent content={content} />}
                        {imageUrl && (
                            <img
                                className="mt-4 rounded-xl"
                                src={imageUrl}
                                alt="as"
                            />
                        )}
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
            <Modal
                title="Remove Post 🥞"
                open={isOpenRemoveModal}
                onOk={handleRemovePost}
                onCancel={() => setIsOpenRemoveModal(false)}
                okType="danger"
            >
                <p>
                    Are you sure you want to remove{' '}
                    <span className="font-semibold">{title}</span>
                </p>
            </Modal>
            <EditPostModal
                content={content}
                onChangeContent={(value) => setContent(value)}
                isOpenCreatePostModal={isOpenEditModal}
                onCloseModal={() => setIsOpenEditModal(false)}
                onUploadFile={(e) => setPostImage(e.target.value)}
                onSubmitPost={handleSubmitEditedPost}
                title={title}
                onChangeTitle={(value) => setTitle(value)}
                edit={true}
            />
        </div>
    )
}

export default Post
