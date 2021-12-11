import Dashbroad from "./pages/Dashbroad";
import LoginPage from "./pages/LoginPage";
import Register from "./pages/Register";
const routes = [
    { path: ["/"], component: LoginPage, exact: true },
    { path: ["/dashboard"], component: Dashbroad, exact: true },
    { path: ["/register"], component: Register, exact: true },
   
        
   
];
export default routes

