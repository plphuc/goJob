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

export const LOG_IN = gql`
    mutation Login($input: LogInInput!) {
        login(input: $input) {
            _id,
            username,
            name
        }
    }
`