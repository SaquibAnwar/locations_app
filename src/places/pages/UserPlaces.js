import React from "react";
import { useParams } from "react-router-dom";

import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Taj Mahal",
    description: " One of the most famous monuments in the world!",
    imageUrl:
      "https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80",
    address: "Dharmapuri, Forest Colony, Tajganj, Agra, Uttar Pradesh 282001",
    locations: {
      lat: 27.1751448,
      lng: 78.0399535,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Taj Mahal",
    description: " One of the most famous monuments in the world!",
    imageUrl:
      "https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80",
    address: "Dharmapuri, Forest Colony, Tajganj, Agra, Uttar Pradesh 282001",
    locations: {
      lat: 27.1751448,
      lng: 78.0399535,
    },
    creator: "u2",
  },
];

const UserPlaces = () => {
  const userId = useParams().userId;
  const laodedPlaces = DUMMY_PLACES.filter(place => place.creator === userId);
  return <PlaceList items={laodedPlaces} />;
};

export default UserPlaces;
