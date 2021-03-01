import { Provider } from 'react-redux';
import store from '../redux/store';
import Routes from './routes';

const Root = () => {
	return (
		<div>
			<Routes />
		</div>
	);
};

export default Root;
