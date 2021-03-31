import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type AffectedRowsOutput = {
  __typename?: 'AffectedRowsOutput';
  count?: Maybe<Scalars['Int']>;
};

export type Auth = {
  __typename?: 'Auth';
  id?: Maybe<Scalars['String']>;
  refreshToken?: Maybe<Scalars['String']>;
  tokenExpiry?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
};

export type AuthCreateNestedOneWithoutUserInput = {
  create?: Maybe<AuthCreateWithoutUserInput>;
  connectOrCreate?: Maybe<AuthCreateOrConnectWithoutUserInput>;
  connect?: Maybe<AuthWhereUniqueInput>;
};

export type AuthCreateOrConnectWithoutUserInput = {
  where: AuthWhereUniqueInput;
  create: AuthCreateWithoutUserInput;
};

export type AuthCreateWithoutUserInput = {
  id?: Maybe<Scalars['String']>;
  refreshToken: Scalars['String'];
  tokenExpiry: Scalars['String'];
};

export type AuthPayload = {
  __typename?: 'AuthPayload';
  token: Scalars['String'];
  user?: Maybe<User>;
};

export type AuthUpdateOneWithoutUserInput = {
  create?: Maybe<AuthCreateWithoutUserInput>;
  connectOrCreate?: Maybe<AuthCreateOrConnectWithoutUserInput>;
  upsert?: Maybe<AuthUpsertWithoutUserInput>;
  connect?: Maybe<AuthWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<AuthUpdateWithoutUserInput>;
};

export type AuthUpdateWithoutUserInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  refreshToken?: Maybe<StringFieldUpdateOperationsInput>;
  tokenExpiry?: Maybe<StringFieldUpdateOperationsInput>;
};

export type AuthUpsertWithoutUserInput = {
  update: AuthUpdateWithoutUserInput;
  create: AuthCreateWithoutUserInput;
};

export type AuthWhereInput = {
  AND?: Maybe<Array<AuthWhereInput>>;
  OR?: Maybe<Array<AuthWhereInput>>;
  NOT?: Maybe<Array<AuthWhereInput>>;
  id?: Maybe<StringFilter>;
  refreshToken?: Maybe<StringFilter>;
  tokenExpiry?: Maybe<StringFilter>;
  user?: Maybe<UserWhereInput>;
  userId?: Maybe<StringFilter>;
};

export type AuthWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};


export type DateTimeFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['DateTime']>;
};

export type DateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeFilter>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createOneUser?: Maybe<User>;
  deleteOneUser?: Maybe<User>;
  deleteManyUser?: Maybe<AffectedRowsOutput>;
  updateOneUser?: Maybe<User>;
  updateManyUser?: Maybe<AffectedRowsOutput>;
  login: AuthPayload;
  refreshToken: AuthPayload;
  logout: Scalars['Boolean'];
};


export type MutationCreateOneUserArgs = {
  data: UserCreateInput;
};


export type MutationDeleteOneUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationDeleteManyUserArgs = {
  where?: Maybe<UserWhereInput>;
};


export type MutationUpdateOneUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpdateManyUserArgs = {
  data: UserUpdateManyMutationInput;
  where?: Maybe<UserWhereInput>;
};


export type MutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationLogoutArgs = {
  userId: Scalars['String'];
};

export type NestedDateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeFilter>;
};

export type NestedStringFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringFilter>;
};

export type Query = {
  __typename?: 'Query';
  allUsers?: Maybe<Array<Maybe<User>>>;
  user: User;
  users: Array<User>;
};


export type QueryUsersArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<UserWhereUniqueInput>;
  after?: Maybe<UserWhereUniqueInput>;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type StringFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['String']>;
};

export type StringFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  mode?: Maybe<QueryMode>;
  not?: Maybe<NestedStringFilter>;
};

export type User = {
  __typename?: 'User';
  id?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  firstname?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
  auth?: Maybe<Auth>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserCreateInput = {
  id?: Maybe<Scalars['String']>;
  firstname: Scalars['String'];
  lastname: Scalars['String'];
  email: Scalars['String'];
  phone: Scalars['String'];
  password: Scalars['String'];
  role?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  auth?: Maybe<AuthCreateNestedOneWithoutUserInput>;
};

export type UserUpdateInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  firstname?: Maybe<StringFieldUpdateOperationsInput>;
  lastname?: Maybe<StringFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  phone?: Maybe<StringFieldUpdateOperationsInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
  role?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  auth?: Maybe<AuthUpdateOneWithoutUserInput>;
};

export type UserUpdateManyMutationInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  firstname?: Maybe<StringFieldUpdateOperationsInput>;
  lastname?: Maybe<StringFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  phone?: Maybe<StringFieldUpdateOperationsInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
  role?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserWhereInput = {
  AND?: Maybe<Array<UserWhereInput>>;
  OR?: Maybe<Array<UserWhereInput>>;
  NOT?: Maybe<Array<UserWhereInput>>;
  id?: Maybe<StringFilter>;
  firstname?: Maybe<StringFilter>;
  lastname?: Maybe<StringFilter>;
  email?: Maybe<StringFilter>;
  phone?: Maybe<StringFilter>;
  password?: Maybe<StringFilter>;
  role?: Maybe<StringFilter>;
  auth?: Maybe<AuthWhereInput>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type UserWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type UserFragmentFragment = (
  { __typename?: 'User' }
  & Pick<User, 'id' | 'firstname' | 'lastname' | 'email' | 'password' | 'phone' | 'createdAt' | 'updatedAt'>
);

export type AuthFragmentFragment = (
  { __typename?: 'Auth' }
  & Pick<Auth, 'id' | 'refreshToken' | 'tokenExpiry' | 'userId'>
);

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'AuthPayload' }
    & Pick<AuthPayload, 'token'>
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id'>
    )> }
  ) }
);

export type UserQueryVariables = Exact<{ [key: string]: never; }>;


export type UserQuery = (
  { __typename?: 'Query' }
  & { user: (
    { __typename?: 'User' }
    & { auth?: Maybe<(
      { __typename?: 'Auth' }
      & AuthFragmentFragment
    )> }
    & UserFragmentFragment
  ) }
);

export type AllUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type AllUsersQuery = (
  { __typename?: 'Query' }
  & { allUsers?: Maybe<Array<Maybe<(
    { __typename?: 'User' }
    & { auth?: Maybe<(
      { __typename?: 'Auth' }
      & AuthFragmentFragment
    )> }
    & UserFragmentFragment
  )>>> }
);

export const UserFragmentFragmentDoc = gql`
    fragment UserFragment on User {
  id
  firstname
  lastname
  email
  password
  phone
  createdAt
  updatedAt
}
    `;
export const AuthFragmentFragmentDoc = gql`
    fragment AuthFragment on Auth {
  id
  refreshToken
  tokenExpiry
  userId
}
    `;
export const LoginDocument = gql`
    mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      id
    }
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
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const UserDocument = gql`
    query User {
  user {
    ...UserFragment
    auth {
      ...AuthFragment
    }
  }
}
    ${UserFragmentFragmentDoc}
${AuthFragmentFragmentDoc}`;

/**
 * __useUserQuery__
 *
 * To run a query within a React component, call `useUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useUserQuery(baseOptions?: Apollo.QueryHookOptions<UserQuery, UserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserQuery, UserQueryVariables>(UserDocument, options);
      }
export function useUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserQuery, UserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserQuery, UserQueryVariables>(UserDocument, options);
        }
export type UserQueryHookResult = ReturnType<typeof useUserQuery>;
export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>;
export type UserQueryResult = Apollo.QueryResult<UserQuery, UserQueryVariables>;
export const AllUsersDocument = gql`
    query AllUsers {
  allUsers {
    ...UserFragment
    auth {
      ...AuthFragment
    }
  }
}
    ${UserFragmentFragmentDoc}
${AuthFragmentFragmentDoc}`;

/**
 * __useAllUsersQuery__
 *
 * To run a query within a React component, call `useAllUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllUsersQuery(baseOptions?: Apollo.QueryHookOptions<AllUsersQuery, AllUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllUsersQuery, AllUsersQueryVariables>(AllUsersDocument, options);
      }
export function useAllUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllUsersQuery, AllUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllUsersQuery, AllUsersQueryVariables>(AllUsersDocument, options);
        }
export type AllUsersQueryHookResult = ReturnType<typeof useAllUsersQuery>;
export type AllUsersLazyQueryHookResult = ReturnType<typeof useAllUsersLazyQuery>;
export type AllUsersQueryResult = Apollo.QueryResult<AllUsersQuery, AllUsersQueryVariables>;