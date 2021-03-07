import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
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
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

export type Query = {
  __typename?: 'Query';
  sheet?: Maybe<Sheet>;
  filterSheets: Array<Sheet>;
  getUserSheets: Array<Sheet>;
  getSheetUsers: Array<User>;
  findUser?: Maybe<User>;
};


export type QuerySheetArgs = {
  id: Scalars['Int'];
};


export type QueryFilterSheetsArgs = {
  searchString: Scalars['String'];
};


export type QueryGetSheetUsersArgs = {
  id: Scalars['Int'];
};


export type QueryFindUserArgs = {
  id: Scalars['Int'];
};

export type Sheet = Base & {
  __typename?: 'Sheet';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  artist: Scalars['String'];
  title: Scalars['String'];
  users: Array<User>;
  year?: Maybe<Scalars['String']>;
};

export type Base = {
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};


export type User = Base & {
  __typename?: 'User';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  email: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  sheets: Array<Sheet>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addUserToSheet: Scalars['Boolean'];
  createSheet: Sheet;
  updateSheet: Scalars['Boolean'];
  deleteSheet: Scalars['Boolean'];
  register: LoginOrRegisterResponse;
  login: LoginOrRegisterResponse;
};


export type MutationAddUserToSheetArgs = {
  id: Scalars['Int'];
};


export type MutationCreateSheetArgs = {
  data: CreateSheetInput;
};


export type MutationUpdateSheetArgs = {
  data: UpdateSheetInput;
  id: Scalars['Int'];
};


export type MutationDeleteSheetArgs = {
  id: Scalars['Int'];
};


export type MutationRegisterArgs = {
  name: Scalars['String'];
  password: Scalars['String'];
  email: Scalars['String'];
};


export type MutationLoginArgs = {
  password: Scalars['String'];
  email: Scalars['String'];
};

export type CreateSheetInput = {
  title: Scalars['String'];
  artist: Scalars['String'];
  year?: Maybe<Scalars['String']>;
};

export type UpdateSheetInput = {
  title?: Maybe<Scalars['String']>;
  artist?: Maybe<Scalars['String']>;
  year?: Maybe<Scalars['String']>;
};

export type LoginOrRegisterResponse = {
  __typename?: 'LoginOrRegisterResponse';
  token: Scalars['String'];
  user: User;
};

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'LoginOrRegisterResponse' }
    & Pick<LoginOrRegisterResponse, 'token'>
  ) }
);


export const LoginDocument = gql`
    mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, baseOptions);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;