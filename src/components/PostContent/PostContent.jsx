import parse from 'html-react-parser'
import './postContent.css'

const PostContent = ({content}) => {    
  return (
    <div className='unset'>{parse(content)}</div>
  )
}

export default PostContent
