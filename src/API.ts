/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type EasterEggInput = {
  id: string,
  authorId: string,
  description: string,
  name: string,
  latitude: number,
  longitude: number,
};

export type EasterEgg = {
  __typename: "EasterEgg",
  id?: string,
  authorId?: string,
  description?: string,
  name?: string,
  latitude?: number,
  longitude?: number,
};

export type UpdateEasterEggInput = {
  id: string,
  authorId: string,
  description?: string | null,
  name?: string | null,
  latitude?: number | null,
  longitude?: number | null,
};

export type CreateEasterEggMutationVariables = {
  easterEgg?: EasterEggInput,
};

export type CreateEasterEggMutation = {
  createEasterEgg?:  {
    __typename: "EasterEgg",
    id: string,
    authorId: string,
    description: string,
    name: string,
    latitude: number,
    longitude: number,
  } | null,
};

export type UpdateEasterEggMutationVariables = {
  easterEgg?: UpdateEasterEggInput,
};

export type UpdateEasterEggMutation = {
  updateEasterEgg?:  {
    __typename: "EasterEgg",
    id: string,
    authorId: string,
    description: string,
    name: string,
    latitude: number,
    longitude: number,
  } | null,
};

export type DeleteEasterEggMutationVariables = {
  easterEggId?: string,
  authorId?: string,
};

export type DeleteEasterEggMutation = {
  deleteEasterEgg?: string | null,
};

export type GetEasterEggByIdQueryVariables = {
  easterEggId?: string,
  authorId?: string,
};

export type GetEasterEggByIdQuery = {
  getEasterEggById?:  {
    __typename: "EasterEgg",
    id: string,
    authorId: string,
    description: string,
    name: string,
    latitude: number,
    longitude: number,
  } | null,
};

export type ListEasterEggsQueryVariables = {
  authorId?: string,
};

export type ListEasterEggsQuery = {
  listEasterEggs?:  Array< {
    __typename: "EasterEgg",
    id: string,
    authorId: string,
    description: string,
    name: string,
    latitude: number,
    longitude: number,
  } | null > | null,
};
