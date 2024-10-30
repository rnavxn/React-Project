import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './Home.css'



const Home = () => {
    return (
        <div className='container'>
            <div>
                <Navbar />
            </div>
            <div>
                <SearchBar />
            </div>
        </div>
    )
}

const Navbar = () => {
    return (
        <div>
            <nav className="navbar">
                <div className="navbar-brand">
                    <Link to="/">Flight Reservation</Link>
                </div>
                <div className="navbar-links">
                    <Link to="/">HOME</Link>
                    <Link to="/">MY TRIP</Link>
                    <Link to="/">IN | EN</Link>
                    <div style={{ display: 'flex', border: '2px solid white', borderRadius: '3px', marginLeft: '5px' }}>
                        <Link to="/signin">LOGIN</Link>
                        <span style={{ display: 'flex', alignItems: 'center' }}>/</span>
                        <Link to="/signup">REGISTER</Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}

const SearchBar = () => {
    const [departureCity, setDepartureCity] = useState('')
    const [destinationCity, setDestinationCity] = useState('')
    const [departureDate, setDepartureDate] = useState('')
    const [returnDate, setReturnDate] = useState('')
    const [passengers, setPassengers] = useState(1)

    const handleSearch = () => {
        // Placeholder for handling the search
        console.log({
            departureCity,
            destinationCity,
            departureDate,
            returnDate,
            passengers
        });
        alert('Search initiated!');
    };

    return (
        <div className="search-bar">
            <h2 style={{color: '#fff', textShadow: '0 0 8px rgba(239, 99, 81, 1)'}}>Search for Flights</h2>
            <form onSubmit={(e) => e.preventDefault()}>

                <div style={{ display: 'grid', width: '100%', gridAutoFlow: 'column', gap: '50px' }}>
                    <div className="form-group">
                        <label>Departure City</label>
                        <input
                            type="text"
                            value={departureCity}
                            onChange={(e) => setDepartureCity(e.target.value)}
                            placeholder="Enter city"
                            color='#fff'
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Destination City</label>
                        <input
                            type="text"
                            value={destinationCity}
                            onChange={(e) => setDestinationCity(e.target.value)}
                            placeholder="Enter city"
                            required
                        />
                    </div>
                </div>

                <div style={{ display: 'grid', width: '100%', gridAutoFlow: 'column', gap: '50px' }}>
                    <div className="form-group">
                        <label>Departure Date</label>
                        <input
                            type="date"
                            value={departureDate}
                            onChange={(e) => setDepartureDate(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Return Date</label>
                        <input
                            type="date"
                            value={returnDate}
                            onChange={(e) => setReturnDate(e.target.value)}
                        />
                    </div>
                </div>

                <div style={{ display: 'grid', width: '100%', gridAutoFlow: 'column', gap: '50px', gridTemplateColumns: '1fr 1fr' }}>
                    <div className="form-group">
                        <label>Passengers</label>
                        <input

                            type="text"
                            placeholder='Number of Passengers'
                            value={passengers}
                            onChange={(e) => setPassengers(e.target.value)}
                            min="1"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Offers</label>
                        <select name='offers' className='offer'>
                            <option value={'Diwali'}>Diwali Offers</option>
                        </select>
                    </div>
                </div>

                <div className='searchContainer'>
                    <button type="button" className='searchbtn' onClick={handleSearch}>
                        Search
                    </button>
                </div>

            </form>
        </div>
    )
}



export default Home