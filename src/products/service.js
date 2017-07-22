import {gql} from 'react-apollo'

export const fetchAllProducts = gql `{
  allProducts{
  id
  description
  name
  price
  }
}`
