import "./App.css";
import "antd/dist/antd.css";
import SignUpPage from "./Pages/SignUpPage/SignUpPage";
import SignInPage from "./Pages/SignInPage/SignInPage";
import PageHome from "./Pages/Home/PageHome";
import DetailFilm from "./Pages/Home/ListPhim/ItemPhim/DetailFilm/DetailFilm";
import Layout from "./HOC/Templates/Layout";
import { BrowserRouter } from "react-router-dom";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import CheckoutTeamplate from "./HOC/Templates/CheckOutTemplate";
import DatVePage from "./Pages/DatvePage";
import Loading from "./Components/loading/Loading";

function App() {
  return (
    <div>
      <Loading />
      <BrowserRouter>
        <Switch>
          <Route path="/sign-up" component={SignUpPage} />
          <Route path="/sign-in" component={SignInPage} />
          <Layout path="/detail-film/:id" Component={DetailFilm} exact />
          <Layout path="/" exact Component={PageHome} />
          <CheckoutTeamplate path="/datVe/:id" Component={DatVePage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
