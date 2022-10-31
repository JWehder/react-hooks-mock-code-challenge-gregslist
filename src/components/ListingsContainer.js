import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings, onDeleteListing }) {

  const listingsToDisplay = listings.map((listing) => {
    return <ListingCard onDeleteListing= {onDeleteListing} key= {listing.id} listing={listing} />
  })

  return (
    <main>
      <ul className="cards">
        {listingsToDisplay}
      </ul>
    </main>
  );
}

export default ListingsContainer;
