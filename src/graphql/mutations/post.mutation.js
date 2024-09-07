import { gql } from '@apollo/client'

export const CREATE_POST = gql`
    mutation CreatePost($input: CreatePostInput!) {
        createPost(input: $input) {
            _id
            title
            content
            createdDate
            imageUrl
        }
    }
`

export const EDIT_POST = gql`
    mutation EditPost($input: EditPostInput!) {
        editPost(input: $input) {
            title
            createdDate
            content
            imageUrl
        }
    }
`

export const DELETE_POST = gql`
    mutation DeletePost($input: DeletePostInput!) {
        deletePost(input: $input) {
            _id
        }
    }
`
