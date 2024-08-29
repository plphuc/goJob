import React, { useState } from 'react'
import { editorFormats, editorModules } from '../editor.static'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import 'src/assets/css/createPostModal.css'

const CreatePostEditor = () => {
    const [value, setValue] = useState('')
    const handleChangeEditor = (value) => {
        setValue(value)
    }
    return (
        <ReactQuill
            theme="snow"
            value={value}
            onChange={handleChangeEditor}
            modules={editorModules}
            formats={editorFormats}
            className="h-[50vh] flex flex-col"
        />
    )
}

export default CreatePostEditor
