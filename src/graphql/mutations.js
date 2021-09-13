/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCar = /* GraphQL */ `
  mutation CreateCar(
    $input: CreateCarInput!
    $condition: ModelCarConditionInput
  ) {
    createCar(input: $input, condition: $condition) {
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
export const updateCar = /* GraphQL */ `
  mutation UpdateCar(
    $input: UpdateCarInput!
    $condition: ModelCarConditionInput
  ) {
    updateCar(input: $input, condition: $condition) {
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
export const deleteCar = /* GraphQL */ `
  mutation DeleteCar(
    $input: DeleteCarInput!
    $condition: ModelCarConditionInput
  ) {
    deleteCar(input: $input, condition: $condition) {
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
export const createHouse = /* GraphQL */ `
  mutation CreateHouse(
    $input: CreateHouseInput!
    $condition: ModelHouseConditionInput
  ) {
    createHouse(input: $input, condition: $condition) {
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
export const updateHouse = /* GraphQL */ `
  mutation UpdateHouse(
    $input: UpdateHouseInput!
    $condition: ModelHouseConditionInput
  ) {
    updateHouse(input: $input, condition: $condition) {
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
export const deleteHouse = /* GraphQL */ `
  mutation DeleteHouse(
    $input: DeleteHouseInput!
    $condition: ModelHouseConditionInput
  ) {
    deleteHouse(input: $input, condition: $condition) {
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
export const createJob = /* GraphQL */ `
  mutation CreateJob(
    $input: CreateJobInput!
    $condition: ModelJobConditionInput
  ) {
    createJob(input: $input, condition: $condition) {
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
export const updateJob = /* GraphQL */ `
  mutation UpdateJob(
    $input: UpdateJobInput!
    $condition: ModelJobConditionInput
  ) {
    updateJob(input: $input, condition: $condition) {
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
export const deleteJob = /* GraphQL */ `
  mutation DeleteJob(
    $input: DeleteJobInput!
    $condition: ModelJobConditionInput
  ) {
    deleteJob(input: $input, condition: $condition) {
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
