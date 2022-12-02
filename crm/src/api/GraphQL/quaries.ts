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

export const GET_USER_INFO = gql`
query CrmGatewayQuery($borrowerId: Long!) {
  mainPage {
    passportWidget(borrowerId: $borrowerId) {
      passport {
        number,
        issuerName,
        issuer,
        issueDate,
        valid,
        birthPlace
      }
    },
    personalDataWidget(borrowerId: $borrowerId) {
      personalData {
        identificationStatus,
        borrowerId,
        firstName,
        lastName, 
        birthdate,
        sex,
        inn,
        snils,
        phoneNumber,
        email,
        registrationAddress,
        realAddress,
        timezoneUtcOffset,
        dateWithOffset,
        publicOfficial,
        foreignPublicOfficial,
        associatedWithPublicOfficial,
        beneficialOwner,
        otherBeneficiaries,
        foreignTaxResident,
        usTaxResident,
      }
    }
  }
}
`;
