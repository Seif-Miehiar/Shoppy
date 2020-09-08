import React, { useState, Fragment } from "react";
import { createCatagory } from "../../api/catagory"
import isEmpty from 'validator/lib/isEmpty';
import { showErrorMsg, showSuccessMsg } from "../../helpers/message";
import { showLoading } from "../../helpers/loading"
// import isEmail from "validator/lib/isEmail";

const AdminDashboard = () => {

  const [catagory, setCatagory] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [loading, setLoading] = useState(''); 

  // event handlers

  const handleMessages = (event) => {
    setErrorMsg('');
    setSuccessMsg('')

  }

  const handleCatagoryChange = (event) => {
    setCatagory(event.target.value);
    setErrorMsg('');
    setSuccessMsg('');
  }

  const handleCatagorySubmit = (event) => {
    event.preventDefault();

    if (isEmpty(catagory)) {
      setErrorMsg('Please enter a catagory')
    } else {
      const data = { catagory };
      
      setLoading(true);
      createCatagory(data)
        .then((response) => {
          setLoading(false);
          setSuccessMsg(response.data.successMessage);
          setCatagory('')
        })
        .catch((err) => {
          setLoading(false);
          setErrorMsg(err.response.data.errorMessage);
        })
    }
  }

  // views.
  const showHeader = () => (
    <div className="bg-dark text-white py-4">
      <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h1>
            <i className="fas fa-home"> Dashboard</i>
          </h1>
        </div>
      </div>
      </div>
    </div>
  );

  const showActionBtns = () => (
    <div className="bg-light my-2">
      <div className="container">
        <div className="row pb-3">
          <div className="col-md-4 my-1">
            <button className="btn btn-outline-info btn-block" data-toggle="modal" data-target="#addCatagoryModal">
              <i className="fas fa-plus"> Add catagory</i>
            </button>
          </div>

          <div className="col-md-4 my-1">
            <button className="btn btn-outline-warning btn-block">
              <i className="fas fa-plus"> Add product</i>
            </button>
          </div>

          <div className="col-md-4 my-1">
            <button className="btn btn-outline-success btn-block">
              <i className="fas fa-money-check-alt"> view </i>
            </button>
          </div>

        </div>
      </div>
    </div>
  )


  const showCatagoryModel = () => (
    <div id="addCatagoryModal" className="modal" onClick={handleMessages}>
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content">
        <form onSubmit={handleCatagorySubmit}>
          <div className="modal-header bg-info text-white"> 
            <h5 className="modal-title">Add Catagory</h5>
              <button className="close" data-dismiss="modal">
                <span><i className="fas fa-times"></i></span>
              </button>
          </div>
          <div className="modal-body my-2">
            {errorMsg && showErrorMsg(errorMsg)}
            {successMsg && showSuccessMsg(successMsg)}
            
            {
              loading ? (
                <div className="text-center"> {showLoading(loading)} </div>
              ) : (
                <Fragment>
                <label className="text-secondary"> Catagory </label>
                <input className="form-control" type="text" onChange={handleCatagoryChange} name="catagory" value={catagory} />
                </Fragment>
              )
            }
              
          </div>
          <div className="modal-footer">
            <button data-dismiss="modal" className="btn btn-secondary"> close </button>
            <button className="btn btn-info" type="submit"> submit </button>
          </div>
          </form>
        </div>
      </div>
    </div>
  )

  // render.
  return (
    <section>
      {showHeader()}
      {showActionBtns()}
      {showCatagoryModel()}
    </section>
  )
}

export default AdminDashboard;