import { gql } from '@apollo/client'

export const CREATE_POST = gql`
    mutation CreatePost($input: CreatePostInput!) {
        createPost(input: $input) {
            _id
            title
            content
            createdDate
            imageId
        }
    }
`

export const EDIT_POST = gql`
    mutation editPost($input: EditPostInput!) {
        editPost(input: $input) {
            title
            createdDate
            content
            imageId
        }
    }
`

export const DELETE_POST = gql`
    mutation deletePost($input: DeletePostInput!) {
        deletePost(input: $input) {
            _id
        }
    }
`
