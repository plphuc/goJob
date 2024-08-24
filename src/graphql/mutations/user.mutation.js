const { gql } = require('@apollo/client')

export const SIGN_UP = gql`
    mutation SignUp($input: SignUpInput!) {
        signUp(input: $input) {
            _id
            username
            name
            profilePicture
        }
    }
`
