import { CHECKֹֹ_FORֹ_POLICY } from '../actions';

const insurances = (state = [], action) => {
	switch (action.type) {
		case CHECKֹֹ_FORֹ_POLICY:
			return [...state, action.payload];
		default:
			return state;
	}
};

export default insurances;
