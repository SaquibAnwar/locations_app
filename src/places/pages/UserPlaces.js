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
    location: {
      lat: 27.1751448,
      lng: 78.0399535,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Empire State Building",
    description: " One of the most famous monuments in the world!",
    imageUrl:
      "https://images.unsplash.com/photo-1502104034360-73176bb1e92e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
    address: "20 W 34th St, New York, NY 10001, United States",
    location: {
      lat: 40.7484405,
      lng: -73.9878531,
    },
    creator: "u2",
  },
];

const UserPlaces = () => {
  const userId = useParams().userId;
  const laodedPlaces = DUMMY_PLACES.filter((place) => place.creator === userId);
  return <PlaceList items={laodedPlaces} />;
};

export default UserPlaces;
