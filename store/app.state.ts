import { SidebarType } from './../components/Sidebar/sidebar.type';
import { ProductType } from './reducers';
export type AppState = {
    products: ProductType[];
    shoppingCart: number;
    sidebar: SidebarType;
};
