import { gql } from '@apollo/client';

export const GET_USERS = gql`
query CrmGatewayQuery($entries: [BorrowerFilterEntry!]!, $limit: Long, $offset: Long, $sort:BorrowerSortEntry) {
  mainPage {
    borrowersWidget(borrowersFilterInput: {entries :  $entries, , limit: $limit, offset: $offset, sort:$sort}) {
      borrowers {
        id,
        fullName,
        birthdate,
        passportNumber,
        identificationStatus,
        phone
      },
      recordsAmount
    }
  }
}
`;
