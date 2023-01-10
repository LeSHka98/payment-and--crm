import { gql } from '@apollo/client';

export const GET_CLIENTS = gql`
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

export const GET_CLIENT_INFO = gql`
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

export const GET_USERS = gql`
query CrmGatewayQuery {
  userPage {
    usersWidget {
      users {
        id,
        userId,
        name,
        role,
        email,
        lastLoginDate,
        status
      },
      total
    }
  }
}
`;

export const GET_USER = gql`
query CrmGatewayQuery($userId: Long!) {
  crmUserDataWidget(administratorId: $userId) {
    administratorId,
    userAccountId,
    firstName,
    secondName,
    lastName,
    email,
    mobilePhone,
    internalPhone,
    role,
    location,
    otherInfo,
    status
  }
}
`;
