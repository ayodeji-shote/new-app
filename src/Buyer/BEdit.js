import React, { useEffect, useRef, useState } from 'react';
let { useParams, useNavigate } = require('react-router-dom');

function BEdit() {
    let navigate = useNavigate();
    let inputfname = useRef(null);
    let inputsname = useRef(null);
    let inputaddress = useRef(null);
    let inputpostcode = useRef(null);
    let inputphone = useRef(null);
    let { id } = useParams();
    function submitBuyer() {
        let Buyer = {
            id: id,
            firstName: inputfname.current.value,
            surname: inputsname.current.value,
            address: inputaddress.current.value,
            postcode: inputpostcode.current.value,
            phone: inputphone.current.value
        }

        fetch(`http://localhost:8000/buyer/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(Buyer),
        }).then(response => (navigate(`/View`)))

    }

    function getBuyer() {

        fetch(`http://localhost:8000/buyer/${id}`)
            .then((response) => response.json())
            .then((data) => {
                inputfname.current.value = data.firstName;
                inputsname.current.value = data.surname;
                inputaddress.current.value = data.address;
                inputpostcode.current.value = data.postcode;
                inputphone.current.value = data.phone;
            });

    }
    useEffect(() => getBuyer(), []);
    return (
        <div className='sellerinput'>
            <h1>Edit Buyer</h1>
            <input type="text" className='selleri' id="Buyerfname" placeholder="First Name" ref={inputfname}></input>
            <input type="text" className='selleri' id="Buyersname" placeholder="Last Name" ref={inputsname}></input>
            <input type="text" className='selleri' id="Buyeraddress" placeholder="Address" ref={inputaddress} ></input>
            <input type="text" className='selleri' id="Buyerpostcode" placeholder="Postcode" ref={inputpostcode} ></input>
            <input type="text" className='selleri' id="Buyerphone" placeholder="Phone" ref={inputphone}></input>
            <input type="button" className='Submitbutton' value="Submit" onClick={() => submitBuyer()}></input>
        </div>
    );
}
export default BEdit;