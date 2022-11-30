import { gql } from '@apollo/client';

export const GET_COUNTRIES = gql`
query Kek {
    countries {
      name
      capital
      languages {
        name
      }
    }
  }
`