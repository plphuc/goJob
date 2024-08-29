import React, { useRef } from 'react'
import { editorFormats, editorModules } from '../editor.static'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import 'src/assets/css/createPostModal.css'

const CreatePostEditor = ({content}) => {
    const handleChangeEditor = (value) => {
        content.current = value
    }

    return (
        <ReactQuill
            theme="snow"
            onChange={handleChangeEditor}
            modules={editorModules}
            formats={editorFormats}
            className="h-[50vh] flex flex-col"
        />
    )
}

export default CreatePostEditor
