import React, { useState,useReducer, useEffect } from "react";
import "./BView.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { imageList } from "./Images";

function BView() {
  let buyerli = [];

  // function generateBuyerList() {
  //   fetch("http://localhost:3001/buyer")

  //     .then((response) => response.json())
  //     .then((data) => {
  //       setBuyerList([data]);
  //     });
  // }
  const buyerListReducer = (state, action) => {
switch (action.type) {
case "SET":
  return action.payload;
  default:
    return state;

}
  };
  let [buyerList, setBuyerList] = useReducer(buyerListReducer,[]);
  useEffect(() => {
    fetch("http://localhost:3001/buyer")
      .then((response) => response.json())
      .then((data) => {
        setBuyerList({type:"SET", payload: data});
      });
  }, []);
  function DeleteFromList(props) {
    alert("Are you sure you want to delete this buyer?");
    let choice = prompt("Yes or No");
    if (choice === "yes") {
      fetch(`http://localhost:3001/buyer/${props.id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: props }),
      }).then((response) => response.json());
      // generateBuyerList();
    }
    else if (choice === "no") {
      alert("Buyer not deleted")
    }
    else {
      alert("Invalid input")
    }
  }
  return (

    <div className="container BView" data-cy="BuyerFirstName">
      { }
      <h1>Buyers</h1>
      
      {console.log(buyerli)}
      <ul data-cy="buyerDetails">
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <Link
                className="btn btn-success my-4 text-center mx-auto"
                to={`/BAdd`}
                state={{
                  buyers: buyerList
                }}
              data-cy="BuyerAdd">
                {" "}
                Add a Buyer
              </Link>
            </div>
          </div>
        </div>

        <div className="row">
          {buyerList.map((buyer) => {
            return (
              <div key={buyer.id} className="col-md-4 mb-4 col-md-offset-3" data-cy = 'buyerdetails'>
                <ul className="mx-2 boviewsBoarderRadius">
                  <div className="img">
                    <img
                      src={imageList[Math.floor(Math.random() * imageList.length)].url}
                      alt={buyer.firstName}
                      className="cardImg"
                    />
                  </div>
                  <li className="mx-3"><b>First Name:</b> {buyer.firstName}</li>
                  <li className="mx-3"><b>Last Name:</b> {buyer.surname}</li>
                  <li className="mx-3"><b> Address:</b> {buyer.address}</li>
                  <li className="mx-3"><b> Post Code:</b>{buyer.postcode}</li>
                  <li className="mx-3"><b>Phone: </b>{buyer.phone}</li>
                  <div className="d-flex justify-content-center pb-4">
                    <button
                      className="btn btn-danger mx-2"
                      type="button"
                      onClick={() => DeleteFromList(buyer)}
                    >Delete</button>
                    <Link
                      className="btn btn-warning text-white"
                      to={`/BEdit/${buyer.id}`}
                      state={{ buyers: buyerList }}
                    >
                      Edit
                    </Link>

                  </div>
                </ul>
              </div>
            );
          })}
        </div>
      </ul>
    </div>
  );
}
export default BView;
