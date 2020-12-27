import { AuthConstants, Constants } from './constants';
import { SidebarType } from '@/components/Sidebar/sidebar.type';
import { AuthType } from 'interfaces';

type ActionMap<M extends { [index: string]: any }> = {
    [Key in keyof M]: M[Key] extends undefined
        ? {
              type: Key;
          }
        : {
              type: Key;
              payload: M[Key];
          };
};

// Product
type ProductPayload = {
    [Constants.Create]: {
        id: number;
        name: string;
        price: number;
    };
    [Constants.Delete]: {
        id: number;
    };
};

export type ProductActions = ActionMap<ProductPayload>[keyof ActionMap<ProductPayload>];

// ShoppingCart
type ShoppingCartPayload = {
    [Constants.Add]: undefined;
};

export type ShoppingCartActions = ActionMap<ShoppingCartPayload>[keyof ActionMap<ShoppingCartPayload>];

// Sidebar
type SidebarPayload = {
    [Constants.MenuToggle]: SidebarType;
};

export type MenuToggleActionType = ActionMap<SidebarPayload>[keyof ActionMap<SidebarPayload>];

export const MenuToggleAction = (payload: SidebarType): MenuToggleActionType => {
    return {
        type: Constants.MenuToggle,
        payload,
    };
};

// Auth

type AuthPayload = {
    [Constants.SetAuth]: AuthType;
};
export type AuthActionType = ActionMap<AuthPayload>[keyof ActionMap<AuthPayload>];
export const setAuthAction = (payload: AuthType): AuthActionType => {
    return {
        type: Constants.SetAuth,
        payload,
    };
};

// Action types
export type ActionsType = ProductActions | ShoppingCartActions | MenuToggleActionType | AuthActionType;
