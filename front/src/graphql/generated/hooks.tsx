import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {};
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
  recentSheets: Array<Sheet>;
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
  notes?: Maybe<Scalars['String']>;
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
  username: Scalars['String'];
  sheets: Array<Sheet>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addUserToSheet: Scalars['Boolean'];
  createSheet: Sheet;
  updateSheet: Scalars['Boolean'];
  deleteSheet: Scalars['Boolean'];
  signUp: LoginOrSignUpResponse;
  login: LoginOrSignUpResponse;
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

export type MutationSignUpArgs = {
  confirmPassword: Scalars['String'];
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
  notes?: Maybe<Scalars['String']>;
  year?: Maybe<Scalars['String']>;
};

export type UpdateSheetInput = {
  title?: Maybe<Scalars['String']>;
  artist?: Maybe<Scalars['String']>;
  year?: Maybe<Scalars['String']>;
};

export type LoginOrSignUpResponse = {
  __typename?: 'LoginOrSignUpResponse';
  token: Scalars['String'];
  user: User;
};

export type AddSheetMutationVariables = Exact<{
  artist: Scalars['String'];
  title: Scalars['String'];
  year?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
}>;

export type AddSheetMutation = {
  __typename?: 'Mutation';
  createSheet: { __typename?: 'Sheet'; id: string; title: string };
};

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;

export type LoginMutation = {
  __typename?: 'Mutation';
  login: { __typename?: 'LoginOrSignUpResponse'; token: string };
};

export type SignUpMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
  confirmPassword: Scalars['String'];
}>;

export type SignUpMutation = {
  __typename?: 'Mutation';
  signUp: { __typename?: 'LoginOrSignUpResponse'; token: string };
};

export type FilterSheetsQueryVariables = Exact<{
  searchString: Scalars['String'];
}>;

export type FilterSheetsQuery = {
  __typename?: 'Query';
  filterSheets: Array<{
    __typename?: 'Sheet';
    artist: string;
    createdAt: any;
    id: string;
    notes?: Maybe<string>;
    title: string;
    year?: Maybe<string>;
    users: Array<{ __typename?: 'User'; email: string; id: string; username: string }>;
  }>;
};

export type MySheetsQueryVariables = Exact<{ [key: string]: never }>;

export type MySheetsQuery = {
  __typename?: 'Query';
  getUserSheets: Array<{
    __typename?: 'Sheet';
    artist: string;
    id: string;
    createdAt: any;
    title: string;
    notes?: Maybe<string>;
    year?: Maybe<string>;
  }>;
};

export type RecentSheetsQueryVariables = Exact<{ [key: string]: never }>;

export type RecentSheetsQuery = {
  __typename?: 'Query';
  recentSheets: Array<{
    __typename?: 'Sheet';
    artist: string;
    createdAt: any;
    id: string;
    title: string;
    notes?: Maybe<string>;
    year?: Maybe<string>;
    users: Array<{ __typename?: 'User'; email: string; id: string; username: string }>;
  }>;
};

export const AddSheetDocument = gql`
  mutation AddSheet($artist: String!, $title: String!, $year: String, $notes: String) {
    createSheet(data: { artist: $artist, title: $title, year: $year, notes: $notes }) {
      id
      title
    }
  }
`;
export type AddSheetMutationFn = Apollo.MutationFunction<
  AddSheetMutation,
  AddSheetMutationVariables
>;

/**
 * __useAddSheetMutation__
 *
 * To run a mutation, you first call `useAddSheetMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddSheetMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addSheetMutation, { data, loading, error }] = useAddSheetMutation({
 *   variables: {
 *      artist: // value for 'artist'
 *      title: // value for 'title'
 *      year: // value for 'year'
 *      notes: // value for 'notes'
 *   },
 * });
 */
export function useAddSheetMutation(
  baseOptions?: Apollo.MutationHookOptions<AddSheetMutation, AddSheetMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<AddSheetMutation, AddSheetMutationVariables>(AddSheetDocument, options);
}
export type AddSheetMutationHookResult = ReturnType<typeof useAddSheetMutation>;
export type AddSheetMutationResult = Apollo.MutationResult<AddSheetMutation>;
export type AddSheetMutationOptions = Apollo.BaseMutationOptions<
  AddSheetMutation,
  AddSheetMutationVariables
>;
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
export function useLoginMutation(
  baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
}
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<
  LoginMutation,
  LoginMutationVariables
>;
export const SignUpDocument = gql`
  mutation SignUp($email: String!, $password: String!, $confirmPassword: String!) {
    signUp(email: $email, password: $password, confirmPassword: $confirmPassword) {
      token
    }
  }
`;
export type SignUpMutationFn = Apollo.MutationFunction<SignUpMutation, SignUpMutationVariables>;

/**
 * __useSignUpMutation__
 *
 * To run a mutation, you first call `useSignUpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignUpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signUpMutation, { data, loading, error }] = useSignUpMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *      confirmPassword: // value for 'confirmPassword'
 *   },
 * });
 */
export function useSignUpMutation(
  baseOptions?: Apollo.MutationHookOptions<SignUpMutation, SignUpMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<SignUpMutation, SignUpMutationVariables>(SignUpDocument, options);
}
export type SignUpMutationHookResult = ReturnType<typeof useSignUpMutation>;
export type SignUpMutationResult = Apollo.MutationResult<SignUpMutation>;
export type SignUpMutationOptions = Apollo.BaseMutationOptions<
  SignUpMutation,
  SignUpMutationVariables
>;
export const FilterSheetsDocument = gql`
  query FilterSheets($searchString: String!) {
    filterSheets(searchString: $searchString) {
      artist
      createdAt
      id
      notes
      title
      year
      users {
        email
        id
        username
      }
    }
  }
`;

/**
 * __useFilterSheetsQuery__
 *
 * To run a query within a React component, call `useFilterSheetsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFilterSheetsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFilterSheetsQuery({
 *   variables: {
 *      searchString: // value for 'searchString'
 *   },
 * });
 */
export function useFilterSheetsQuery(
  baseOptions: Apollo.QueryHookOptions<FilterSheetsQuery, FilterSheetsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<FilterSheetsQuery, FilterSheetsQueryVariables>(
    FilterSheetsDocument,
    options
  );
}
export function useFilterSheetsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<FilterSheetsQuery, FilterSheetsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<FilterSheetsQuery, FilterSheetsQueryVariables>(
    FilterSheetsDocument,
    options
  );
}
export type FilterSheetsQueryHookResult = ReturnType<typeof useFilterSheetsQuery>;
export type FilterSheetsLazyQueryHookResult = ReturnType<typeof useFilterSheetsLazyQuery>;
export type FilterSheetsQueryResult = Apollo.QueryResult<
  FilterSheetsQuery,
  FilterSheetsQueryVariables
>;
export const MySheetsDocument = gql`
  query MySheets {
    getUserSheets {
      artist
      id
      createdAt
      title
      notes
      year
    }
  }
`;

/**
 * __useMySheetsQuery__
 *
 * To run a query within a React component, call `useMySheetsQuery` and pass it any options that fit your needs.
 * When your component renders, `useMySheetsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMySheetsQuery({
 *   variables: {
 *   },
 * });
 */
export function useMySheetsQuery(
  baseOptions?: Apollo.QueryHookOptions<MySheetsQuery, MySheetsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<MySheetsQuery, MySheetsQueryVariables>(MySheetsDocument, options);
}
export function useMySheetsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<MySheetsQuery, MySheetsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<MySheetsQuery, MySheetsQueryVariables>(MySheetsDocument, options);
}
export type MySheetsQueryHookResult = ReturnType<typeof useMySheetsQuery>;
export type MySheetsLazyQueryHookResult = ReturnType<typeof useMySheetsLazyQuery>;
export type MySheetsQueryResult = Apollo.QueryResult<MySheetsQuery, MySheetsQueryVariables>;
export const RecentSheetsDocument = gql`
  query RecentSheets {
    recentSheets {
      artist
      createdAt
      id
      title
      notes
      year
      users {
        email
        id
        username
      }
    }
  }
`;

/**
 * __useRecentSheetsQuery__
 *
 * To run a query within a React component, call `useRecentSheetsQuery` and pass it any options that fit your needs.
 * When your component renders, `useRecentSheetsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRecentSheetsQuery({
 *   variables: {
 *   },
 * });
 */
export function useRecentSheetsQuery(
  baseOptions?: Apollo.QueryHookOptions<RecentSheetsQuery, RecentSheetsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<RecentSheetsQuery, RecentSheetsQueryVariables>(
    RecentSheetsDocument,
    options
  );
}
export function useRecentSheetsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<RecentSheetsQuery, RecentSheetsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<RecentSheetsQuery, RecentSheetsQueryVariables>(
    RecentSheetsDocument,
    options
  );
}
export type RecentSheetsQueryHookResult = ReturnType<typeof useRecentSheetsQuery>;
export type RecentSheetsLazyQueryHookResult = ReturnType<typeof useRecentSheetsLazyQuery>;
export type RecentSheetsQueryResult = Apollo.QueryResult<
  RecentSheetsQuery,
  RecentSheetsQueryVariables
>;
