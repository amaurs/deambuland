/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createEasterEgg = /* GraphQL */ `
  mutation CreateEasterEgg($easterEgg: EasterEggInput!) {
    createEasterEgg(easterEgg: $easterEgg) {
      id
      description
      name
      latitude
      longitude
      imageUrl
    }
  }
`;
export const updateEasterEgg = /* GraphQL */ `
  mutation UpdateEasterEgg($easterEgg: UpdateEasterEggInput!) {
    updateEasterEgg(easterEgg: $easterEgg) {
      id
      description
      name
      latitude
      longitude
      imageUrl
    }
  }
`;
export const deleteEasterEgg = /* GraphQL */ `
  mutation DeleteEasterEgg($easterEggId: String!) {
    deleteEasterEgg(easterEggId: $easterEggId)
  }
`;
