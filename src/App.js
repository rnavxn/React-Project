import './App.css';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
// import Homepage from './Components/HomePage/Homepage';
import MyHomePage from './Components/Home/Home';
import Navigate from './Components/Navigation/Navigate';

function App() {
	return (
		<div>
			<Navigate/>
			{/* <Homepage/> */}
			{/* <MyHomePage/> */}
		</div>
	);
}

export default App; 
