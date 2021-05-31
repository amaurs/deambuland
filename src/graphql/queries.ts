/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getEasterEggById = /* GraphQL */ `
  query GetEasterEggById($easterEggId: String!) {
    getEasterEggById(easterEggId: $easterEggId) {
      id
      description
      name
      latitude
      longitude
      imageUrl
    }
  }
`;
export const listEasterEggs = /* GraphQL */ `
  query ListEasterEggs {
    listEasterEggs {
      id
      description
      name
      latitude
      longitude
      imageUrl
    }
  }
`;
