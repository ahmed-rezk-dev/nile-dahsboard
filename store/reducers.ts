import { Constants } from './constants';
import { SidebarType } from '@/components/Sidebar/sidebar.type';
import { ActionsType } from './actions';

// Product

export type ProductType = {
    id: number;
    name: string;
    price: number;
};

export const productReducer = (state: ProductType[], action: ActionsType) => {
    switch (action.type) {
        case Constants.Create:
            return [
                ...state,
                {
                    id: action.payload.id,
                    name: action.payload.name,
                    price: action.payload.price,
                },
            ];
        case Constants.Delete:
            return [...state.filter((product) => product.id !== action.payload.id)];
        default:
            return state;
    }
};

export const shoppingCartReducer = (state: number, action: ActionsType) => {
    switch (action.type) {
        case Constants.Add:
            return state + 1;
        default:
            return state;
    }
};

export const sidebarReducer = (state: SidebarType, action: ActionsType): SidebarType => {
    switch (action.type) {
        case Constants.MenuToggle:
            return { ...state, toggle: action.payload.toggle };
        default: {
            return exhaustiveCheck(state);
        }
    }
};

const exhaustiveCheck = (type: never | SidebarType): never => {
    throw new Error(`Missing type ${type}`);
};
