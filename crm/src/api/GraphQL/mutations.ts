import { gql } from '@apollo/client';

export const CREATE_USER = gql`
mutation CrmGatewayMutation($user: CrmUserInput!) {
  addUser(user: $user) {
    status,
    errors
  }
}
`;

export const EDIT_USER = gql`
mutation CrmGatewayMutation($user: CrmUserInput!) {
  updateUser(user: $user) {
    status,
    errors
  }
}
`;
