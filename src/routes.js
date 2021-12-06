import Dashbroad from "./pages/Dashbroad";
import LoginPage from "./pages/LoginPage";
const routes = [
    { path: ["/"], component: LoginPage, exact: true },
    { path: ["/dashbroad"], component: Dashbroad, exact: true },
   
        
   
];
export default routes

