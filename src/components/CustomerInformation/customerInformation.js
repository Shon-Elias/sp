import React, { useRef } from 'react';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { nanoid } from 'nanoid';
import axios from 'axios'


import { addCustomerInformation } from '../../redux/actions';

import { minDate, maxDate } from './utils'

import './style.css'


const CustomerInformation = () => {
	// const classes = useStyles();

	// const dispatch = useDispatch();
	const history = useHistory();
	const [zipCode, setZipCode] = useState('');
	const [gender, setGender] = useState('');
	const [dateOfBirth, setDateOfBirth] = useState(maxDate);
	const [salary, setSalary] = useState('25000');
	// const [list, setList]  = useState([])
	// const axiosSproutt = axios.create({
	// 	baseURL: '​https://okapi-staging-3.sproutt.com'

	// })

	useEffect(()=>{
		// axiosInstance.get('/hello')
		// 	.then(res => console.log(res.data))
		// 	.catch(err => console.log(err))
	},[])

	const submit = e => {
		e.preventDefault();

		console.log('dateOfBirth', zipCode, gender, dateOfBirth, salary)

		// dispatch(addCustomerInformation(nanoid(), zipCode, gender, dateOfBirth, salary));

		axios.post('/api/post/postuser', { zipCode, gender, dateOfBirth, salary})
			.then(res => {
				if(res.status === 200){
					console.log('this res', res)
					axios.post('/api/1/assignment/quotes', { zipCode, gender, dateOfBirth, salary} )
						.then(res => {
							console.log("re sproutt", res)
						})
						.catch(err => console.log("Failed to post user's data to sproutt ", err))

				}
			})
			.catch(err => console.log("Failed to post user's data ", err))

			history.push('/list');
	};

	console.log('minDate', minDate)
	console.log('maxDate', maxDate)

	return (
		<form onSubmit={submit}>
			<div>
				<label>Zipcode:</label>
				<input
					type="text"
					id="zipcode" name="zipcode"
					pattern="[0-9]{5}"
					value={zipCode} onChange={e => setZipCode(e.target.value)}
					title="Please enter a 5 digit number"
					required
					/>

			</div>
			<div>
				<label className="lableRadio">Gender:</label>
				<input type="radio" id="male" name="gender" value="male" onChange={e => setGender(e.target.value)} required/>
				<label className="lableRadio" for="male" >Male</label>
				<input type="radio" id="female" name="gender" value="female" onChange={e => setGender(e.target.value)} required/>
				<label className="lableRadio"  for="female">Female</label>
			</div>
			<div>
				<input
				type="date"
				defaultValue={maxDate}
				max={maxDate}
				min={minDate}
				title="Age must be between 18 to 80"
				onChange={e => setDateOfBirth(e.target.value)}
				required
				 />
			</div>
			<div>
				<label>Annual Income:</label>
				<input type="number" id="quantity" name="quantity" min="25000"
				defaultValue="25000"
				onChange={e => setSalary(e.target.value)}
				required />
			</div>
			<input type="submit" />
		</form>
	);
};

export default CustomerInformation;
