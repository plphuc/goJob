const { gql } = require("@apollo/client");

export const GET_POSTS = gql`
    query GetPosts {
        getPosts {
            _id,
            title,
            createdDate,
            content,
            imageUrl,
            user {
                username,
                name,
                profilePicture
            },
        }
    }
`

