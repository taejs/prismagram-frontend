import {gql} from 'apollo-boost';

export const LOG_IN = gql`
   mutation requestSecret($email: String!) {
    requestSecret(email:$email)
   }
`

export const LOG_IN = gql`
   mutation createAccount($user: User!) {
    createAccount(user:$user)
   }
`