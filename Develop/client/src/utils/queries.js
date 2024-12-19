import { gql } from '@apollo/client';

export const GET_ME = gql`
    {
        me {
        _id
        username
        email
        bookCount
        savedBooks {
            bookId
            authors
            description
            title
            image
            link
        }
        }
    }
    `;

export const LOGIN_USER = gql`
    {
        login(email: $email, password: $password) {
        token
        user {
            _id
            username
        }
        }
    }
    `;