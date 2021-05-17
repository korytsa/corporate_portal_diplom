import {
	Redirect,
	Route,
	Switch,
} from "react-router-dom";
import Contacts from "../contacts/Contacts";

import Footer from '../footer/Footer';
import GetList from "../getList/GetList";
import Header from "../header/Header";
import MainPage from "../mainPage/MainPage";
import News from "../news/News";
import Person from "../person/Person";
import Support from "../technicalSupport/Support";

const Container = () => {
	return (
		<>
			<Header />
                <Switch>
                    <Route path="/" exact render={() => <MainPage />} />
                    <Route path="/news" exact render={() => <News />} />
                    <Route path="/contacts" exact render={() => <Contacts />} />
                    <Route path="/person" exact render={() => <Person />} />
                    <Route path="/technicalSupport" exact render={() => <Support />} />
                    <Route path="/getList" exact render={() => <GetList />} />
                    <Route path="*" render={() => <Redirect to="/" />} />
                </Switch>
            <Footer />
		</>
	);
};

export default Container;
