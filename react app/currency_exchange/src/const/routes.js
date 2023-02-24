import { Contacts } from "../pages/Contacts/Contacts";
import { HomePage } from "../pages/HomePage/HomePage";
import { Location } from "../pages/Location/Location";
import { Order } from "../pages/Order/Order";
import { CONTACTS_ROUTE, HOME_ROUTE, LOCATION_ROUTE, ORDER_ROUTE } from "./constPaths";

export const routes=[
{
    path: HOME_ROUTE,
    Component: HomePage
},
{
    path: CONTACTS_ROUTE,
    Component: Contacts
},
{
    path: ORDER_ROUTE,
    Component: Order
},
{
    path: LOCATION_ROUTE,
    Component: Location
}
]