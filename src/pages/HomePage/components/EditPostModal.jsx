import React, { useEffect, useState } from 'react'
import { editorFormats, editorModules } from '../editor.static'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import 'src/assets/css/createPostModal.css'
import { Modal } from 'antd'
import { Photo } from 'src/assets/svg/Svg'

const EditPostModal = ({
    content,
    onChangeContent,
    isOpenCreatePostModal,
    onCloseModal,
    onUploadFile,
    onSubmitPost,
    title,
    onChangeTitle,
    edit = false,
}) => {
    const [isInitialRender, setIsInitialRender] = useState(true)

    useEffect(() => {
        setIsInitialRender(false)
    }, [])

    return (
        <Modal
            className="create-post-modal"
            destroyOnClose={true}
            open={isOpenCreatePostModal}
            onCancel={onCloseModal}
            footer={
                <div className="flex justify-between items-center gap-2 rounded-xl">
                    <div
                        className={`input input-bordered flex items-center px-1 gap-2 flex-1`}
                    >
                        <Photo customClassName="h-6 w-6 m-1" />
                        <input
                            type="text"
                            className="grow"
                            placeholder="Enter image's URL or upload image"
                            onChange={onUploadFile}
                        />
                    </div>
                    <div className="flex items-center gap-1 justify-end">
                        <button
                            className="btn btn-sm btn-outline w-[70px] rounded-full border-textLinkColor"
                            onClick={() => onCloseModal()}
                        >
                            Cancel
                        </button>
                        <button
                            className="btn btn-sm btn-active w-[70px] rounded-full bg-textLinkColor border-textLinkColor"
                            onClick={onSubmitPost}
                        >
                            Post
                        </button>
                    </div>
                </div>
            }
            title={
                <>
                    <p className="bg-white text-xl mb-3 font-semibold">
                        {edit ? 'Edit' : 'Create a'} Post
                    </p>
                    <input
                        onChange={(e) => onChangeTitle(e.target.value)}
                        defaultValue={title}
                        type="text"
                        placeholder="Enter post's title"
                        className="input input-bordered w-full rounded-xl"
                    />
                </>
            }
        >
            <ReactQuill
                theme="snow"
                value={content}
                onChange={(value) => onChangeContent(value)}
                modules={editorModules}
                formats={editorFormats}
                className="h-[50vh] flex flex-col"
            />
        </Modal>
    )
}

export default EditPostModal
