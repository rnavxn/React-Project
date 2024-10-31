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

    const [departureCity, setDepartureCity] = useState('Chennai')
    const [destinationCity, setDestinationCity] = useState('Mumbai')

    const [departureDate, setDepartureDate] = useState(today)

    const [isRoundTrip, setIsRoundTrip] = useState(false)
    const [returnDate, setReturnDate] = useState('')

    const [passengers, setPassengers] = useState(1)

    let [validInput, setValidInput] = useState('')

    const [results, setResults] = useState([]);
    
    const handleSearch = (event) => {
        event.preventDefault(); // Prevent default form submission

        if (departureCity.trim() === '' || destinationCity.trim() === '') {
            setValidInput('Please fill in all fields!');
            setTimeout(() => {
                setValidInput('')
            }, 1500);
            return;
        } else {
            setValidInput('Search initiated!');
            setTimeout(() => {
                setValidInput('')
            }, 2200);
            // alert('Search initiated!');

            const mockResults = [
                { id: 1, departure: 'Chennai', destination: 'Delhi', price: '27000' },
                { id: 2, departure: 'Chennai', destination: 'Mumbai', price: '20000' },
                { id: 3, departure: 'Chennai', destination: 'Kolkata', price: '25000' },
            ];

            setResults(mockResults);

        }
        console.log("Searching for :",{
            
            departureCity,
            destinationCity,
            departureDate,
            returnDate,
            passengers
        });
        // console.log("Searching for:", searchQuery);
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

    // Overlay Checkout
    const [showCheckout, setShowCheckout] = useState(false);
    const [selectedFlight, setSelectedFlight] = useState(null);
    const [passengerName, setPassengerName] = useState('');
    const [passengerEmail, setPassengerEmail] = useState('');

    const handleBookNow = (flight) => {
        setSelectedFlight(flight);
        setShowCheckout(true);
    };

    const closeCheckout = () => {
        setShowCheckout(false);
        setSelectedFlight(null);
        setPassengerName('');
        setPassengerEmail('');
    };

    const handleConfirmBooking = () => {
        // Add booking logic here (API call)
        alert(`Booking confirmed for ${passengerName}(${passengerEmail}) to ${selectedFlight.destination} for ${passengers} Seats`);
        closeCheckout(); // Close the modal after confirmation
    };

    return (
        <>
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
                                    />
                                </label>
                            </div>
                            <input
                                className='returndate'
                                type="date"
                                value={returnDate}
                                onChange={(e) => setReturnDate(e.target.value)}
                                disabled={!isRoundTrip}
                                style={{
                                    cursor: isRoundTrip ? 'auto' : 'not-allowed',
                                    background: isRoundTrip ? '' : '#F38375'
                                }}
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
                    <div>
                        {/* <p id='para'>Please fill all the input!</p> */}
                        <p id='para'>{validInput}</p>
                    </div>

                </form>

            </div>


            {/* Results */}
            <div>
                {results.length > 0 && (
                    <div className="results">
                        <h3>Available Flights:</h3>
                        {results.map(result => (
                            <div key={result.id} className="result">
                                <p>Departure: <strong>{result.departure}</strong></p>
                                <p>Destination: <strong>{result.destination}</strong></p>
                                <p>Price: <strong>₹{result.price}</strong></p>
                                <button onClick={() => handleBookNow(result)}>
                                    Book Now
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>


            {/* Checkout */}
            <div>
                {showCheckout && (
                    <div className="overlay">
                        <div className="modal">
                            <div>
                            <h2 style={{color: '#333'}}>Checkout</h2>
                            </div>
                            <div><p>Destination: <strong style={{color: '#F38375'}}>{selectedFlight.destination}</strong></p></div>
                            <div><p>Price: <strong style={{color: '#F38375'}}>₹{(selectedFlight.price * passengers)}</strong></p></div>
                            <div><p>Passengers: <strong style={{color: '#F38375'}}>{passengers}</strong></p> </div>
                            <div><h3 style={{color: '#EF6351'}}>Passenger Information</h3></div>
                            
                            <div><input
                                type="text"
                                placeholder="Full Name"
                                value={passengerName}
                                onChange={(e) => setPassengerName(e.target.value)}
                                required
                            /></div>
                            <div><input
                                type="email"
                                placeholder="Email Address"
                                value={passengerEmail}
                                onChange={(e) => setPassengerEmail(e.target.value)}
                                required
                            /></div>
                            <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '40px'}}>
                                <button onClick={closeCheckout}>Close</button>
                                <button onClick={handleConfirmBooking}>Confirm Booking</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

const SearchResults = () => {
    const mockResults = [
        { id: 1, departure: 'Chennai', destination: 'New York', price: '$500' },
        { id: 2, departure: 'Chennai', destination: 'London', price: '$750' },
        { id: 3, departure: 'Chennai', destination: 'Paris', price: '$650' },
    ];
    const [results, setResults] = useState(mockResults);
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = () => {
        // Replace this with an actual search query or API call


        setResults(mockResults);
    };

    return (
        <div>
            {results.length > 0 && (
                <div className="results">
                    <h3>Available Flights:</h3>
                    {results.map(result => (
                        <div key={result.id} className="result">
                            {/* <p>Departure: {resu}</p> */}
                            <p>Departure: <span style={{ fontWeight: 'bold' }}>{result.departure}</span></p>
                            <p>Destination: <span style={{ fontWeight: 'bold' }}>{result.destination}</span></p>
                            <p>Price: <span style={{ fontWeight: 'bold' }}>{result.price}</span></p>
                            <button onClick={() => alert(`Booking flight to ${result.destination}`)}>
                                Book Now
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}


export default Home