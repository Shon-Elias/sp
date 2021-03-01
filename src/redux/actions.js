
export const CHECKֹֹ_FORֹ_POLICY = 'CHECKֹֹ_FORֹ_POLICY';



export const addCustomerInformation = (id, zipCode, gender, dateOfBirth, salary) => ({
	type: CHECKֹֹ_FORֹ_POLICY,
	payload: { id, zipCode, gender, dateOfBirth, salary }
});
