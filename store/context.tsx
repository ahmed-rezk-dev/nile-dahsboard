import React, { createContext, useReducer, Dispatch } from 'react';
import { ActionsType } from './actions';
import { AppState } from './app.state';
import { productReducer, shoppingCartReducer, sidebarReducer } from './reducers';

const initialState: AppState = {
    products: [],
    shoppingCart: 0,
    sidebar: { toggle: false },
};

const AppContext = createContext<{
    state: AppState;
    dispatch: Dispatch<ActionsType>;
}>({
    state: initialState,
    dispatch: () => null,
});

const mainReducer = ({ products, shoppingCart, sidebar }: AppState, action: ActionsType) => ({
    products: productReducer(products, action),
    shoppingCart: shoppingCartReducer(shoppingCart, action),
    sidebar: sidebarReducer(sidebar, action),
});

const AppProvider: React.FC = ({ children }) => {
    const [state, dispatch] = useReducer(mainReducer, initialState);

    return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>;
};

export { AppProvider, AppContext };
