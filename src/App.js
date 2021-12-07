import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import routes from "./routes";
import 'antd/dist/antd.css';
import { ConfigProvider } from 'antd';
import viVN from 'antd/lib/locale/vi_VN';
import Header from "./component/layout/Header";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getTokenWhenRefreshPage } from "./redux/action/actLogin";
import Loading from "./component/layout/Loading";



function App() {
  const maproutes = routes.map((route, index) => {
    return (
      <Route
        key={index}
        path={route.path}
        component={route.component}
        exact={route.exact}
      />
    );
  });
  // const authentication = useSelector((state) => state.authentication);
  //   const dispatch = useDispatch();
  //   const [isLoading, setisLoading] = useState(true);
  //   useEffect(() => {
  //       dispatch(getTokenWhenRefreshPage()).then(() => {
  //           setisLoading(false);
  //       });
       
  //   }, [dispatch]);
  return (
    <Router>
      <ConfigProvider locale={viVN}>
      {/* {isLoading && <Loading location="Loading...." /> } */}
        <div className="App">
        
        {/* {authentication.isLoggin && <Header />} */}
            <Switch>{maproutes}</Switch>
       
        </div> 
      </ConfigProvider>
    </Router>
  );
}

export default App;
