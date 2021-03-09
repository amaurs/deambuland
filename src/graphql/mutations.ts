/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createEasterEgg = /* GraphQL */ `
  mutation CreateEasterEgg($easterEgg: EasterEggInput!) {
    createEasterEgg(easterEgg: $easterEgg) {
      id
      authorId
      description
      name
      latitude
      longitude
    }
  }
`;
export const updateEasterEgg = /* GraphQL */ `
  mutation UpdateEasterEgg($easterEgg: UpdateEasterEggInput!) {
    updateEasterEgg(easterEgg: $easterEgg) {
      id
      authorId
      description
      name
      latitude
      longitude
    }
  }
`;
export const deleteEasterEgg = /* GraphQL */ `
  mutation DeleteEasterEgg($easterEggId: String!, $authorId: String!) {
    deleteEasterEgg(easterEggId: $easterEggId, authorId: $authorId)
  }
`;
