/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type EasterEggInput = {
  description: string,
  name: string,
  latitude: number,
  longitude: number,
  imageUrl: string,
};

export type EasterEgg = {
  __typename: "EasterEgg",
  id?: string,
  description?: string,
  name?: string,
  latitude?: number,
  longitude?: number,
  imageUrl?: string,
};

export type UpdateEasterEggInput = {
  id: string,
  description?: string | null,
  name?: string | null,
  latitude?: number | null,
  longitude?: number | null,
  imageUrl?: string | null,
};

export type CreateEasterEggMutationVariables = {
  easterEgg?: EasterEggInput,
};

export type CreateEasterEggMutation = {
  createEasterEgg?:  {
    __typename: "EasterEgg",
    id: string,
    description: string,
    name: string,
    latitude: number,
    longitude: number,
    imageUrl: string,
  } | null,
};

export type UpdateEasterEggMutationVariables = {
  easterEgg?: UpdateEasterEggInput,
};

export type UpdateEasterEggMutation = {
  updateEasterEgg?:  {
    __typename: "EasterEgg",
    id: string,
    description: string,
    name: string,
    latitude: number,
    longitude: number,
    imageUrl: string,
  } | null,
};

export type DeleteEasterEggMutationVariables = {
  easterEggId?: string,
};

export type DeleteEasterEggMutation = {
  deleteEasterEgg?: string | null,
};

export type GetEasterEggByIdQueryVariables = {
  easterEggId?: string,
};

export type GetEasterEggByIdQuery = {
  getEasterEggById?:  {
    __typename: "EasterEgg",
    id: string,
    description: string,
    name: string,
    latitude: number,
    longitude: number,
    imageUrl: string,
  } | null,
};

export type ListEasterEggsQuery = {
  listEasterEggs?:  Array< {
    __typename: "EasterEgg",
    id: string,
    description: string,
    name: string,
    latitude: number,
    longitude: number,
    imageUrl: string,
  } | null > | null,
};
