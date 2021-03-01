import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import App from './app';
import CustomerInformation from './CustomerInformation/customerInformation';
import List from './List/List';


const Routes = () => {




	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/">
					<CustomerInformation />
				</Route>
				<Route exact path="/list">
				<List />
			</Route>
			</Switch>
		</BrowserRouter>
	);
};

export default Routes;
