/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCar = /* GraphQL */ `
  query GetCar($id: ID!) {
    getCar(id: $id) {
      id
      user
      title
      description
      make
      model
      price
      createdAt
      updatedAt
    }
  }
`;
export const listCars = /* GraphQL */ `
  query ListCars(
    $filter: ModelCarFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCars(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        user
        title
        description
        make
        model
        price
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getHouse = /* GraphQL */ `
  query GetHouse($id: ID!) {
    getHouse(id: $id) {
      id
      user
      title
      description
      year
      style
      bed
      bath
      price
      createdAt
      updatedAt
    }
  }
`;
export const listHouses = /* GraphQL */ `
  query ListHouses(
    $filter: ModelHouseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listHouses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        user
        title
        description
        year
        style
        bed
        bath
        price
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getJob = /* GraphQL */ `
  query GetJob($id: ID!) {
    getJob(id: $id) {
      id
      user
      title
      description
      hours
      wage
      createdAt
      updatedAt
    }
  }
`;
export const listJobs = /* GraphQL */ `
  query ListJobs(
    $filter: ModelJobFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listJobs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        user
        title
        description
        hours
        wage
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
