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
                    <Link to="/home">HOME</Link>
                    <Link to="/">MY TRIP</Link>
                    <Link to="/">IN | EN</Link>
                    <div style={{ display: 'flex', border: '2px solid white', borderRadius: '3px', marginLeft: '5px' }}>
                        <Link to="/login">LOGIN</Link>
                        <span style={{ display: 'flex', alignItems: 'center' }}>/</span>
                        <Link to="/register">REGISTER</Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}

const SearchBar = () => {
    // Set default date (today's date)
    const today = new Date().toISOString().split('T')[0];

    // Calculate tomorrow's date
    let tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 2);
    tomorrow = tomorrow.toISOString().split('T')[0];

    const [departureCity, setDepartureCity] = useState('')
    const [destinationCity, setDestinationCity] = useState('')

    const [departureDate, setDepartureDate] = useState(today)

    const [isRoundTrip, setIsRoundTrip] = useState(false)
    const [returnDate, setReturnDate] = useState('')

    const [passengers, setPassengers] = useState(1)

    const handleSearch = (event) => {
        event.preventDefault(); // Prevent default form submission

        if (departureCity.trim() === '' || destinationCity.trim() === '') {
            alert('Please fill in all fields.');
            return;
        } else {
            alert('Search initiated!');
        }
        setDepartureCity('');
        setDestinationCity('');

        console.log({
            departureCity,
            destinationCity,
            departureDate,
            returnDate,
            passengers
        });
    };

    const toggleRoundTrip = () => {
        setIsRoundTrip(!isRoundTrip)


        // ; // Clear return date if switching back to one-way
        if (!isRoundTrip) {
            setReturnDate(tomorrow)
        }
        else {
            setReturnDate('')
        }
    };

    return (
        <div className="search-bar">
            <h2 style={{ color: '#fff', textShadow: '0 0 8px rgba(239, 99, 81, 1)' }}>Search for Flights</h2>
            <form className='searchForm' onSubmit={(e) => e.preventDefault()}>

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
                        <div>
                            <label style={{ display: 'grid', gridAutoFlow: 'column', justifyContent: 'left', gap: '10px' }}>
                                Return Date
                                <input
                                    className='checkbox'
                                    type="checkbox"
                                    checked={isRoundTrip}
                                    onChange={toggleRoundTrip}

                                    // disabled={!isRoundTrip}
                                    required={isRoundTrip}
                                />
                            </label>
                        </div>
                        <input
                            className='returndate'
                            type="date"
                            value={returnDate}
                            onChange={(e) => setReturnDate(e.target.value)}
                            disabled={!isRoundTrip}
                        />
                    </div>
                </div>

                <div style={{ display: 'grid', width: '100%', gridAutoFlow: 'column', gap: '50px', gridTemplateColumns: '1fr 1fr' }}>
                    <div className="form-group">
                        <label>Passengers</label>
                        <input

                            type="number"
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
                            <option value={'None'}>None</option>
                            <option value={'Diwali'}>Diwali Offers</option>
                            <option value={'Offer-1'}>Offer-1</option>
                            <option value={'Offer-2'}>Offer-2</option>
                            <option value={'Offer-3'}>Offer-3</option>
                            <option value={'Offer-4'}>Offer-4</option>
                        </select>
                    </div>
                </div>

                <div className='searchContainer'>
                    <button type="submit" className='searchbtn' onClick={handleSearch}>
                        Search
                    </button>
                </div>

            </form>

        </div>

    )
}



export default Home