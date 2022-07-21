import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Album = {
  __typename?: 'Album';
  artist: Array<Scalars['String']>;
  id: Scalars['ID'];
  imgSrc: Scalars['String'];
  name: Scalars['String'];
  rating: Scalars['Float'];
};

export type Mutation = {
  __typename?: 'Mutation';
  userByEmailPassword: Scalars['Boolean'];
  userByProvider: Scalars['Boolean'];
};


export type MutationUserByEmailPasswordArgs = {
  displayName: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};


export type MutationUserByProviderArgs = {
  displayName: Scalars['String'];
  identifier: Scalars['String'];
  token: Scalars['String'];
  username: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  albums: Array<Album>;
  user?: Maybe<User>;
  users: Array<User>;
};


export type QueryAlbumsArgs = {
  token: Scalars['String'];
};


export type QueryUserArgs = {
  username: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  username: Scalars['ID'];
};

export type GetAlbumsQueryVariables = Exact<{
  token: Scalars['String'];
}>;


export type GetAlbumsQuery = { __typename?: 'Query', albums: Array<{ __typename?: 'Album', id: string, name: string, artist: Array<string>, rating: number, imgSrc: string }> };

export type CreateUserByEmailPasswordMutationVariables = Exact<{
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
  displayName: Scalars['String'];
}>;


export type CreateUserByEmailPasswordMutation = { __typename?: 'Mutation', userByEmailPassword: boolean };

export type CreateUserByProviderMutationVariables = Exact<{
  username: Scalars['String'];
  identifier: Scalars['String'];
  displayName: Scalars['String'];
  token: Scalars['String'];
}>;


export type CreateUserByProviderMutation = { __typename?: 'Mutation', userByProvider: boolean };

export type UserByUsernameQueryVariables = Exact<{
  username: Scalars['String'];
}>;


export type UserByUsernameQuery = { __typename?: 'Query', user?: { __typename?: 'User', username: string } | null };

export type GetUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersQuery = { __typename?: 'Query', users: Array<{ __typename?: 'User', username: string }> };


export const GetAlbumsDocument = gql`
    query getAlbums($token: String!) {
  albums(token: $token) {
    id
    name
    artist
    rating
    imgSrc
  }
}
    `;
export const CreateUserByEmailPasswordDocument = gql`
    mutation createUserByEmailPassword($username: String!, $email: String!, $password: String!, $displayName: String!) {
  userByEmailPassword(
    username: $username
    email: $email
    password: $password
    displayName: $displayName
  )
}
    `;
export const CreateUserByProviderDocument = gql`
    mutation createUserByProvider($username: String!, $identifier: String!, $displayName: String!, $token: String!) {
  userByProvider(
    username: $username
    identifier: $identifier
    displayName: $displayName
    token: $token
  )
}
    `;
export const UserByUsernameDocument = gql`
    query userByUsername($username: String!) {
  user(username: $username) {
    username
  }
}
    `;
export const GetUsersDocument = gql`
    query getUsers {
  users {
    username
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    getAlbums(variables: GetAlbumsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetAlbumsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetAlbumsQuery>(GetAlbumsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getAlbums', 'query');
    },
    createUserByEmailPassword(variables: CreateUserByEmailPasswordMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreateUserByEmailPasswordMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateUserByEmailPasswordMutation>(CreateUserByEmailPasswordDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createUserByEmailPassword', 'mutation');
    },
    createUserByProvider(variables: CreateUserByProviderMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreateUserByProviderMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateUserByProviderMutation>(CreateUserByProviderDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createUserByProvider', 'mutation');
    },
    userByUsername(variables: UserByUsernameQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UserByUsernameQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<UserByUsernameQuery>(UserByUsernameDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'userByUsername', 'query');
    },
    getUsers(variables?: GetUsersQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetUsersQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetUsersQuery>(GetUsersDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getUsers', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;