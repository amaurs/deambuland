/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getEasterEggById = /* GraphQL */ `
  query GetEasterEggById($easterEggId: String!, $authorId: String!) {
    getEasterEggById(easterEggId: $easterEggId, authorId: $authorId) {
      id
      authorId
      description
      name
      latitude
      longitude
    }
  }
`;
export const listEasterEggs = /* GraphQL */ `
  query ListEasterEggs($authorId: String!) {
    listEasterEggs(authorId: $authorId) {
      id
      authorId
      description
      name
      latitude
      longitude
    }
  }
`;
