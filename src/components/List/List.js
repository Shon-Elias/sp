import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const List = () => {
	// const [search, setSearch] = useState('');
	// const flights = useSelector(state => state.flights);

	// const noResults = () => {
	// 	return <h2>No flights listed</h2>;
	// };
  console.log('list componenet')

		return (
      <div>
        <div style={{height: '500px', color: 'red', alignItems: 'center', backgroundColor: 'yellow'}}>Please select your</div>
        <Link to="/">Check for another policy</Link>
      </div>
		);

}

export default List;
