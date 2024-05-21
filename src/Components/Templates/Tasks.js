
import React, { useState } from 'react';
import Select from "react-select";
import TextEditor from './Texteditor';
import Switch from "react-switch";

import DatePicker from 'react-datepicker'; // Import date picker
import 'react-datepicker/dist/react-datepicker.css'; // Import date picker stylesheet
import { SlQuestion } from "react-icons/sl";
import './task.css'

const Tasks = () => {
  const statusOptions = [
    { value: 'No_Status', label: 'No Status' },
    { value: 'On_hold', label: 'On Hold' },
    { value: 'planned', label: 'Planned' },
  ];

  const priorityOptions = [
    { value: 'urgent', label: 'Urgent' },
    { value: 'high', label: 'High' },
    { value: 'medium', label: 'Medium' },
    { value: 'low', label: 'Low' },
  ];

  const statusStyles = {
    container: (provided) => ({
      ...provided,

      marginTop: '10px',
    }),

    control: (provided) => ({
      ...provided,
      backgroundColor: '#f0f0f0',
      borderColor: '#ccc',
      border: 'none',
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: '#f9f9f9',
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? '#e6e6e6' : '#f9f9f9',
      color: state.isSelected ? '#333' : '#000',
      '&:active': {
        backgroundColor: '#ddd',
      },
    }),
    placeholder: (provided) => ({
      ...provided,
      color: '#999',
    }),
    singleValue: (provided) => ({
      ...provided,
      color: '#333',
    }),
  };
  const customTempStyles = {
    container: (provided) => ({
      ...provided,
      width: '350px',
      marginTop: '10px',
    }),
  }

  const customTagTaskStyle = {
    container: (provided) => ({
      ...provided,
      marginTop: '10px',
      marginLeft: '10px',
      marginRight: '10px'


    }),
  }

  const [startDate, setStartDate] = useState(null);
  const [dueDate, setDueDate] = useState(null);
  const [absoluteDate, setAbsoluteDates] = useState(false)
  const [startsin, setstartsin] = useState("");
  const [startsinduration, setstartsinduration] = useState("");
  const [duein, setduein] = useState("");
  const [dueinduration, setdueinduration] = useState("");

  const handleAbsolutesDates = (checked) => {
    setAbsoluteDates(checked)
  }

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleDueDateChange = (date) => {
    setDueDate(date);
  };


  const dayoptions = [
    { label: 'Days', value: 'Days' },
    { label: 'Months', value: 'Months' },
    { label: 'Years', value: 'Years' }
  ];
  const handlestartindateChange = (selectedOption) => {
    setstartsinduration(selectedOption.value);
  };


  const handledueindateChange = (selectedOption) => {
    setdueinduration(selectedOption.value);
  };


  return (
    <div className='Admin-task-container'>
      <div className='Admin-task-tittle'>
        <h2>Create task template</h2>
      </div>

      <div className='task-container-all'>
        <>
          <div className='A'>
            <div className="contact-temp">
              <div>
                <label>Template Name</label>
                <input  type="text" placeholder='template name' />
              </div>
              <div>
                <label>Status</label>
                <Select
                  options={statusOptions}
                  styles={statusStyles}
                  defaultValue={statusOptions[0]}
                />
              </div>
            </div>

            <div className='task_assignee'>
              <div>
                <label>Task Assignee</label>
                <Select
                  placeholder='Task Assignee'
                  styles={customTempStyles} />
              </div>
              <div>
                <label>Priority</label>
                <Select
                  options={priorityOptions}
                  styles={statusStyles}
                  defaultValue={statusOptions[0]}
                />
              </div>
            </div>

            <div >
              <TextEditor />
            </div>

            <div style={{ marginTop: '50px' }} className='task-temp-tag'>
              <label>Tags</label>
              <Select styles={customTagTaskStyle} />
            </div>

            <div className='task-template-dates-switches col-12' style={{  display: 'flex', alignItems: 'center', justifyContent: 'space-between' ,marginTop:'50px'}}>
              <h3>Start and Due Date</h3>
              <div className="job-template-switch-container" style={{ marginTop: '10px' }}>
                <Switch
                  onChange={handleAbsolutesDates}
                  checked={absoluteDate}
                  onColor="#3A91F5"
                  onHandleColor="#FFF"
                  handleDiameter={10}
                  uncheckedIcon={false}
                  checkedIcon={false}
                  height={20}
                  width={32}
                  className="job-template-react-switch"
                />
                <span className="job-template-switch-label" style={{ cursor: "pointer" }}>Absolutes Dates</span>
              </div>
            </div>

            {absoluteDate && (
              <div className='col-12 task-template-absoluteDate ' style={{ display: 'flex', gap: '5px'  }}>
                <div className='col-6'>
                  <label style={{ fontSize: '14px' }}>Start Date</label>
                  <div>
                    <DatePicker
                      selected={startDate}
                      onChange={handleStartDateChange}
                      className="date-picker-input"
                      placeholderText='Start Date'
                    />
                  </div>
                </div>
                <div className='col-6'>
                  <label style={{ fontSize: '14px' }}>Due Date</label>
                  <div>
                    <DatePicker
                      selected={dueDate}
                      onChange={handleDueDateChange}
                      className="date-picker-input"
                      placeholderText='Due Date'
                    />
                  </div>
                </div>
              </div>
            )}

            {!absoluteDate && (
              <div className='task-select-dates-container' style={{ marginTop: '20%',margin:'20px' }}>
                <div className='col-12' style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }} className='col-2'>
                    <p>Starts In</p>
                    <SlQuestion style={{ color: 'blue' }} />
                  </div>
                  <div className='col-5'>
                    <input style={{ padding: '8px 12px', width: '100%', border: "2px solid rgb(100, 149, 237)", borderRadius: '10px', margin: '10px 0' }} type='text' className='date-input' placeholder='0' onChange={(e) => setstartsin(e.target.value)} />
                  </div>
                  <div className='col-5'>
                    <Select className='job-template-select-dropdown'
                      options={dayoptions}
                      onChange={handlestartindateChange} />
                  </div>
                </div>
                <div className='col-12' style={{ display: 'flex', alignItems: 'center', gap: '5px', marginTop: '20px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }} className='col-2'>
                    <p>Due In</p>
                    <SlQuestion style={{ color: 'blue' }} />
                  </div>
                  <div className='col-5'>
                    <input type='text' className='date-input' style={{ padding: '8px 12px', width: '100%', border: "2px solid rgb(100, 149, 237)", borderRadius: '10px', margin: '10px 0' }} placeholder='0' onChange={(e) => setduein(e.target.value)} />
                  </div>
                  <div className='col-5'>
                    <Select className='job-template-select-dropdown'
                      options={dayoptions}
                      onChange={handledueindateChange} />
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className='B'>
            <div className='task-subtasks'>
              <p>Subtasks</p>
              <Switch


                onColor="#3A91F5"
                onHandleColor="#FFF"
                handleDiameter={10}
                uncheckedIcon={false}
                checkedIcon={false}
                height={20}
                width={32}
                className="job-template-react-switch"
              />
            </div>

            <div className='subtask-input'>
            <div style={{display:'flex',gap:'30px'}}>
              <input  type="checkbox" className='subtask-checkbox' placeholder='subtask' />
              <input  type="text" placeholder='Things To do' />
            </div>

            </div>
          </div>
        </>
      </div>
      <div>
        <button className='btn1'>Save</button>
        <button className='btn2'>Cancel</button>
      </div>
    </div>
  )
}

export default Tasks;
