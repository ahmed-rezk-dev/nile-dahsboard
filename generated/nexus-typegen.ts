/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */

import * as Context from "./../graphql/context"



declare global {
  interface NexusGenCustomOutputProperties<TypeName extends string> {
    crud: NexusPrisma<TypeName, 'crud'>
    model: NexusPrisma<TypeName, 'model'>
  }
}

declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  AuthCreateOneWithoutUserInput: { // input type
    connect?: NexusGenInputs['AuthWhereUniqueInput'] | null; // AuthWhereUniqueInput
    connectOrCreate?: NexusGenInputs['AuthCreateOrConnectWithoutuserInput'] | null; // AuthCreateOrConnectWithoutuserInput
    create?: NexusGenInputs['AuthCreateWithoutUserInput'] | null; // AuthCreateWithoutUserInput
  }
  AuthCreateOrConnectWithoutuserInput: { // input type
    create: NexusGenInputs['AuthCreateWithoutUserInput']; // AuthCreateWithoutUserInput!
    where: NexusGenInputs['AuthWhereUniqueInput']; // AuthWhereUniqueInput!
  }
  AuthCreateWithoutUserInput: { // input type
    id?: string | null; // String
    refreshToken: string; // String!
    tokenExpiry: number; // Int!
  }
  AuthUpdateOneWithoutUserInput: { // input type
    connect?: NexusGenInputs['AuthWhereUniqueInput'] | null; // AuthWhereUniqueInput
    connectOrCreate?: NexusGenInputs['AuthCreateOrConnectWithoutuserInput'] | null; // AuthCreateOrConnectWithoutuserInput
    create?: NexusGenInputs['AuthCreateWithoutUserInput'] | null; // AuthCreateWithoutUserInput
    delete?: boolean | null; // Boolean
    disconnect?: boolean | null; // Boolean
    update?: NexusGenInputs['AuthUpdateWithoutUserInput'] | null; // AuthUpdateWithoutUserInput
    upsert?: NexusGenInputs['AuthUpsertWithoutUserInput'] | null; // AuthUpsertWithoutUserInput
  }
  AuthUpdateWithoutUserInput: { // input type
    id?: NexusGenInputs['StringFieldUpdateOperationsInput'] | null; // StringFieldUpdateOperationsInput
    refreshToken?: NexusGenInputs['StringFieldUpdateOperationsInput'] | null; // StringFieldUpdateOperationsInput
    tokenExpiry?: NexusGenInputs['IntFieldUpdateOperationsInput'] | null; // IntFieldUpdateOperationsInput
  }
  AuthUpsertWithoutUserInput: { // input type
    create: NexusGenInputs['AuthCreateWithoutUserInput']; // AuthCreateWithoutUserInput!
    update: NexusGenInputs['AuthUpdateWithoutUserInput']; // AuthUpdateWithoutUserInput!
  }
  AuthWhereInput: { // input type
    AND?: NexusGenInputs['AuthWhereInput'][] | null; // [AuthWhereInput!]
    id?: NexusGenInputs['StringFilter'] | null; // StringFilter
    NOT?: NexusGenInputs['AuthWhereInput'][] | null; // [AuthWhereInput!]
    OR?: NexusGenInputs['AuthWhereInput'][] | null; // [AuthWhereInput!]
    refreshToken?: NexusGenInputs['StringFilter'] | null; // StringFilter
    tokenExpiry?: NexusGenInputs['IntFilter'] | null; // IntFilter
    user?: NexusGenInputs['UserWhereInput'] | null; // UserWhereInput
    userId?: NexusGenInputs['StringFilter'] | null; // StringFilter
  }
  AuthWhereUniqueInput: { // input type
    id?: string | null; // String
  }
  DateTimeFieldUpdateOperationsInput: { // input type
    set?: NexusGenScalars['DateTime'] | null; // DateTime
  }
  DateTimeFilter: { // input type
    equals?: NexusGenScalars['DateTime'] | null; // DateTime
    gt?: NexusGenScalars['DateTime'] | null; // DateTime
    gte?: NexusGenScalars['DateTime'] | null; // DateTime
    in?: NexusGenScalars['DateTime'][] | null; // [DateTime!]
    lt?: NexusGenScalars['DateTime'] | null; // DateTime
    lte?: NexusGenScalars['DateTime'] | null; // DateTime
    not?: NexusGenInputs['NestedDateTimeFilter'] | null; // NestedDateTimeFilter
    notIn?: NexusGenScalars['DateTime'][] | null; // [DateTime!]
  }
  IntFieldUpdateOperationsInput: { // input type
    decrement?: number | null; // Int
    divide?: number | null; // Int
    increment?: number | null; // Int
    multiply?: number | null; // Int
    set?: number | null; // Int
  }
  IntFilter: { // input type
    equals?: number | null; // Int
    gt?: number | null; // Int
    gte?: number | null; // Int
    in?: number[] | null; // [Int!]
    lt?: number | null; // Int
    lte?: number | null; // Int
    not?: NexusGenInputs['NestedIntFilter'] | null; // NestedIntFilter
    notIn?: number[] | null; // [Int!]
  }
  NestedDateTimeFilter: { // input type
    equals?: NexusGenScalars['DateTime'] | null; // DateTime
    gt?: NexusGenScalars['DateTime'] | null; // DateTime
    gte?: NexusGenScalars['DateTime'] | null; // DateTime
    in?: NexusGenScalars['DateTime'][] | null; // [DateTime!]
    lt?: NexusGenScalars['DateTime'] | null; // DateTime
    lte?: NexusGenScalars['DateTime'] | null; // DateTime
    not?: NexusGenInputs['NestedDateTimeFilter'] | null; // NestedDateTimeFilter
    notIn?: NexusGenScalars['DateTime'][] | null; // [DateTime!]
  }
  NestedIntFilter: { // input type
    equals?: number | null; // Int
    gt?: number | null; // Int
    gte?: number | null; // Int
    in?: number[] | null; // [Int!]
    lt?: number | null; // Int
    lte?: number | null; // Int
    not?: NexusGenInputs['NestedIntFilter'] | null; // NestedIntFilter
    notIn?: number[] | null; // [Int!]
  }
  NestedStringFilter: { // input type
    contains?: string | null; // String
    endsWith?: string | null; // String
    equals?: string | null; // String
    gt?: string | null; // String
    gte?: string | null; // String
    in?: string[] | null; // [String!]
    lt?: string | null; // String
    lte?: string | null; // String
    not?: NexusGenInputs['NestedStringFilter'] | null; // NestedStringFilter
    notIn?: string[] | null; // [String!]
    startsWith?: string | null; // String
  }
  StringFieldUpdateOperationsInput: { // input type
    set?: string | null; // String
  }
  StringFilter: { // input type
    contains?: string | null; // String
    endsWith?: string | null; // String
    equals?: string | null; // String
    gt?: string | null; // String
    gte?: string | null; // String
    in?: string[] | null; // [String!]
    lt?: string | null; // String
    lte?: string | null; // String
    mode?: NexusGenEnums['QueryMode'] | null; // QueryMode
    not?: NexusGenInputs['NestedStringFilter'] | null; // NestedStringFilter
    notIn?: string[] | null; // [String!]
    startsWith?: string | null; // String
  }
  UserCreateInput: { // input type
    auth?: NexusGenInputs['AuthCreateOneWithoutUserInput'] | null; // AuthCreateOneWithoutUserInput
    createdAt?: NexusGenScalars['DateTime'] | null; // DateTime
    email: string; // String!
    firstname: string; // String!
    id?: string | null; // String
    lastname: string; // String!
    password: string; // String!
    phone: string; // String!
    role?: string | null; // String
    updatedAt?: NexusGenScalars['DateTime'] | null; // DateTime
  }
  UserUpdateInput: { // input type
    auth?: NexusGenInputs['AuthUpdateOneWithoutUserInput'] | null; // AuthUpdateOneWithoutUserInput
    createdAt?: NexusGenInputs['DateTimeFieldUpdateOperationsInput'] | null; // DateTimeFieldUpdateOperationsInput
    email?: NexusGenInputs['StringFieldUpdateOperationsInput'] | null; // StringFieldUpdateOperationsInput
    firstname?: NexusGenInputs['StringFieldUpdateOperationsInput'] | null; // StringFieldUpdateOperationsInput
    id?: NexusGenInputs['StringFieldUpdateOperationsInput'] | null; // StringFieldUpdateOperationsInput
    lastname?: NexusGenInputs['StringFieldUpdateOperationsInput'] | null; // StringFieldUpdateOperationsInput
    password?: NexusGenInputs['StringFieldUpdateOperationsInput'] | null; // StringFieldUpdateOperationsInput
    phone?: NexusGenInputs['StringFieldUpdateOperationsInput'] | null; // StringFieldUpdateOperationsInput
    role?: NexusGenInputs['StringFieldUpdateOperationsInput'] | null; // StringFieldUpdateOperationsInput
    updatedAt?: NexusGenInputs['DateTimeFieldUpdateOperationsInput'] | null; // DateTimeFieldUpdateOperationsInput
  }
  UserUpdateManyMutationInput: { // input type
    createdAt?: NexusGenInputs['DateTimeFieldUpdateOperationsInput'] | null; // DateTimeFieldUpdateOperationsInput
    email?: NexusGenInputs['StringFieldUpdateOperationsInput'] | null; // StringFieldUpdateOperationsInput
    firstname?: NexusGenInputs['StringFieldUpdateOperationsInput'] | null; // StringFieldUpdateOperationsInput
    id?: NexusGenInputs['StringFieldUpdateOperationsInput'] | null; // StringFieldUpdateOperationsInput
    lastname?: NexusGenInputs['StringFieldUpdateOperationsInput'] | null; // StringFieldUpdateOperationsInput
    password?: NexusGenInputs['StringFieldUpdateOperationsInput'] | null; // StringFieldUpdateOperationsInput
    phone?: NexusGenInputs['StringFieldUpdateOperationsInput'] | null; // StringFieldUpdateOperationsInput
    role?: NexusGenInputs['StringFieldUpdateOperationsInput'] | null; // StringFieldUpdateOperationsInput
    updatedAt?: NexusGenInputs['DateTimeFieldUpdateOperationsInput'] | null; // DateTimeFieldUpdateOperationsInput
  }
  UserWhereInput: { // input type
    AND?: NexusGenInputs['UserWhereInput'][] | null; // [UserWhereInput!]
    auth?: NexusGenInputs['AuthWhereInput'] | null; // AuthWhereInput
    createdAt?: NexusGenInputs['DateTimeFilter'] | null; // DateTimeFilter
    email?: NexusGenInputs['StringFilter'] | null; // StringFilter
    firstname?: NexusGenInputs['StringFilter'] | null; // StringFilter
    id?: NexusGenInputs['StringFilter'] | null; // StringFilter
    lastname?: NexusGenInputs['StringFilter'] | null; // StringFilter
    NOT?: NexusGenInputs['UserWhereInput'][] | null; // [UserWhereInput!]
    OR?: NexusGenInputs['UserWhereInput'][] | null; // [UserWhereInput!]
    password?: NexusGenInputs['StringFilter'] | null; // StringFilter
    phone?: NexusGenInputs['StringFilter'] | null; // StringFilter
    role?: NexusGenInputs['StringFilter'] | null; // StringFilter
    updatedAt?: NexusGenInputs['DateTimeFilter'] | null; // DateTimeFilter
  }
  UserWhereUniqueInput: { // input type
    id?: string | null; // String
  }
}

export interface NexusGenEnums {
  QueryMode: "default" | "insensitive"
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
  DateTime: any
}

export interface NexusGenObjects {
  Auth: { // root type
    id: string; // String!
    refreshToken: string; // String!
    tokenExpiry: number; // Int!
    userId: string; // String!
  }
  AuthPayload: { // root type
    token: string; // String!
    user?: NexusGenRootTypes['User'] | null; // User
  }
  BatchPayload: { // root type
    count: number; // Int!
  }
  Mutation: {};
  Query: {};
  User: { // root type
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    email: string; // String!
    firstname: string; // String!
    id: string; // String!
    lastname: string; // String!
    password: string; // String!
    phone: string; // String!
    role: string; // String!
    updatedAt: NexusGenScalars['DateTime']; // DateTime!
  }
}

export interface NexusGenInterfaces {
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars & NexusGenEnums

export interface NexusGenFieldTypes {
  Auth: { // field return type
    id: string; // String!
    refreshToken: string; // String!
    tokenExpiry: number; // Int!
    userId: string; // String!
  }
  AuthPayload: { // field return type
    token: string; // String!
    user: NexusGenRootTypes['User'] | null; // User
  }
  BatchPayload: { // field return type
    count: number; // Int!
  }
  Mutation: { // field return type
    createOneUser: NexusGenRootTypes['User']; // User!
    deleteManyUser: NexusGenRootTypes['BatchPayload']; // BatchPayload!
    deleteOneUser: NexusGenRootTypes['User'] | null; // User
    login: NexusGenRootTypes['AuthPayload']; // AuthPayload!
    logout: string; // String!
    refreshToken: string; // String!
    refreshUserToken: NexusGenRootTypes['AuthPayload']; // AuthPayload!
    updateManyUser: NexusGenRootTypes['BatchPayload']; // BatchPayload!
    updateOneUser: NexusGenRootTypes['User'] | null; // User
  }
  Query: { // field return type
    allUsers: Array<NexusGenRootTypes['User'] | null> | null; // [User]
    user: NexusGenRootTypes['User'] | null; // User
    users: NexusGenRootTypes['User'][]; // [User!]!
  }
  User: { // field return type
    auth: NexusGenRootTypes['Auth'] | null; // Auth
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    email: string; // String!
    firstname: string; // String!
    id: string; // String!
    lastname: string; // String!
    password: string; // String!
    phone: string; // String!
    role: string; // String!
    updatedAt: NexusGenScalars['DateTime']; // DateTime!
  }
}

export interface NexusGenFieldTypeNames {
  Auth: { // field return type name
    id: 'String'
    refreshToken: 'String'
    tokenExpiry: 'Int'
    userId: 'String'
  }
  AuthPayload: { // field return type name
    token: 'String'
    user: 'User'
  }
  BatchPayload: { // field return type name
    count: 'Int'
  }
  Mutation: { // field return type name
    createOneUser: 'User'
    deleteManyUser: 'BatchPayload'
    deleteOneUser: 'User'
    login: 'AuthPayload'
    logout: 'String'
    refreshToken: 'String'
    refreshUserToken: 'AuthPayload'
    updateManyUser: 'BatchPayload'
    updateOneUser: 'User'
  }
  Query: { // field return type name
    allUsers: 'User'
    user: 'User'
    users: 'User'
  }
  User: { // field return type name
    auth: 'Auth'
    createdAt: 'DateTime'
    email: 'String'
    firstname: 'String'
    id: 'String'
    lastname: 'String'
    password: 'String'
    phone: 'String'
    role: 'String'
    updatedAt: 'DateTime'
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    createOneUser: { // args
      data: NexusGenInputs['UserCreateInput']; // UserCreateInput!
    }
    deleteManyUser: { // args
      where?: NexusGenInputs['UserWhereInput'] | null; // UserWhereInput
    }
    deleteOneUser: { // args
      where: NexusGenInputs['UserWhereUniqueInput']; // UserWhereUniqueInput!
    }
    login: { // args
      email: string; // String!
      password: string; // String!
    }
    logout: { // args
      userId: string; // String!
    }
    refreshToken: { // args
      userId: string; // String!
    }
    refreshUserToken: { // args
      userId: string; // String!
    }
    updateManyUser: { // args
      data: NexusGenInputs['UserUpdateManyMutationInput']; // UserUpdateManyMutationInput!
      where?: NexusGenInputs['UserWhereInput'] | null; // UserWhereInput
    }
    updateOneUser: { // args
      data: NexusGenInputs['UserUpdateInput']; // UserUpdateInput!
      where: NexusGenInputs['UserWhereUniqueInput']; // UserWhereUniqueInput!
    }
  }
  Query: {
    user: { // args
      where: NexusGenInputs['UserWhereUniqueInput']; // UserWhereUniqueInput!
    }
    users: { // args
      after?: NexusGenInputs['UserWhereUniqueInput'] | null; // UserWhereUniqueInput
      before?: NexusGenInputs['UserWhereUniqueInput'] | null; // UserWhereUniqueInput
      first?: number | null; // Int
      last?: number | null; // Int
    }
  }
}

export interface NexusGenAbstractTypeMembers {
}

export interface NexusGenTypeInterfaces {
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = keyof NexusGenInputs;

export type NexusGenEnumNames = keyof NexusGenEnums;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = never;

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: Context.Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
    /**
     * Whether the type can be null
     * @default (depends on whether nullability is configured in type or schema)
     * @see declarativeWrappingPlugin
     */
    nullable?: boolean
    /**
     * Whether the type is list of values, or just a single value.
     * If list is true, we assume the type is a list. If list is an array,
     * we'll assume that it's a list with the depth. The boolean indicates whether
     * the type is required (non-null), where true = nonNull, false = nullable.
     * @see declarativeWrappingPlugin
     */
    list?: true | boolean[]
    /**
     * Whether the type should be non null, `required: true` = `nullable: false`
     * @default (depends on whether nullability is configured in type or schema)
     * @see declarativeWrappingPlugin
     */
    required?: boolean
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
    /**
     * Whether the type can be null
     * @default (depends on whether nullability is configured in type or schema)
     * @see declarativeWrappingPlugin
     */
    nullable?: boolean
    /**
     * Whether the type is list of values, or just a single value.
     * If list is true, we assume the type is a list. If list is an array,
     * we'll assume that it's a list with the depth. The boolean indicates whether
     * the type is required (non-null), where true = nonNull, false = nullable.
     * @see declarativeWrappingPlugin
     */
    list?: true | boolean[]
    /**
     * Whether the type should be non null, `required: true` = `nullable: false`
     * @default (depends on whether nullability is configured in type or schema)
     * @see declarativeWrappingPlugin
     */
    required?: boolean
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
    /**
     * Whether the type can be null
     * @default (depends on whether nullability is configured in type or schema)
     * @see declarativeWrappingPlugin
     */
    nullable?: boolean
    /**
     * Whether the type is list of values, or just a single value.
     * If list is true, we assume the type is a list. If list is an array,
     * we'll assume that it's a list with the depth. The boolean indicates whether
     * the type is required (non-null), where true = nonNull, false = nullable.
     * @see declarativeWrappingPlugin
     */
    list?: true | boolean[]
    /**
     * Whether the type should be non null, `required: true` = `nullable: false`
     * @default (depends on whether nullability is configured in type or schema)
     * @see declarativeWrappingPlugin
     */
    required?: boolean
  }
}