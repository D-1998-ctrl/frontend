import React, { useState, useEffect } from 'react'
import { FaPrint } from "react-icons/fa6";
import { IoSearch } from 'react-icons/io5';
import { RxCross2 } from "react-icons/rx";
import './createinvoice.css'
import { BsThreeDotsVertical } from "react-icons/bs";
import { NavLink, Outlet, useNavigate } from 'react-router-dom';

const CreateInvoice = () => {

  const navigate = useNavigate();
  useEffect(() => {
    navigate('/billinginvoices/onetime');
  }, [navigate]);

  const [isInvoiceFormOpen, setIsInvoiceFormOpen] = useState(false);
  const handleAddNewInvoice = () => {
    setIsInvoiceFormOpen(!isInvoiceFormOpen);
  };
  const handleFormClose = () => {
    setIsInvoiceFormOpen(false);
  };
  return (
    <>
      <div>
        <h1>Invoices</h1>
      </div>
      <div className='create-invoice-header'>
        <div className='invoce-actions-btns'>
          <button className='btn1' onClick={handleAddNewInvoice}>Create Invoice</button>
          <button className='btn1' >Export Invoices</button>
        </div>
        <div className='create-invoice-header-left'>
          {/* <input type='text' placeholder='search' /> */}
          <div class="search-container">
            <input type="text" placeholder="search" class="search-input" />
            <IoSearch className="search-icon" />
          </div>
          <button className='btn2'>Filter</button>
          <FaPrint />
        </div>

      </div>


      <div className={`invoice-form-container ${isInvoiceFormOpen ? "invoice-form-open" : ""}`}>
        <div className="invoice_header_title">
          <h3>Create invoice</h3>
          <RxCross2 onClick={handleFormClose} style={{ cursor: 'pointer', fontSize: '25px' }} />
        </div>
        <div className='invoice-container'>
          <div className='invoice-type'>
            <NavLink to='/billinginvoices/onetime'>One-time</NavLink>
            <NavLink to='/billinginvoices/recurring'>Recurring</NavLink>
          </div>
          <Outlet />
        </div>

        <div className='billing-ivoice-buttons'>
          <button className='btn1'>Save</button>
          <button className='btn2'>Cancle</button>
          
        </div>

      </div>
    </>
  )
}

export default CreateInvoice