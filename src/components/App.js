import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";


function App() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    fetch('http://localhost:6001/listings')
      .then(r => r.json())
      .then(list => setListings(list)) 
  }, [])

  function handleDeletedListing(deletedListing) {
    const updatedListings = listings.filter((listing) => listing.id !== deletedListing.id)
    setListings(updatedListings)
  }

  function handleSearchListing(searchedListing) {
    const searchMatches = listings.filter((listing) => listing.description === searchedListing)
    setListings(searchMatches)
  }

  return (
    <div className="app">
      <Header onSearchListing= {handleSearchListing} listings= {listings} />
      <ListingsContainer onDeleteListing= {handleDeletedListing} listings= {listings} />
    </div>
  );
}

export default App;
