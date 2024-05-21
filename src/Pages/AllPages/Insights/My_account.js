import React, { useState, useContext, useEffect } from 'react';
import './my_account.css';
import { LuPenLine } from "react-icons/lu";
import user from '../../../Static/Images/users2.jpg';
import { RxCross2 } from "react-icons/rx";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Switch from "react-switch";
import { SlQuestion } from "react-icons/sl";
import { Link } from 'react-router-dom';
import Select from 'react-select';
import { LoginContext } from "../../../Components/ContextProvider/Context";
import { ToastContainer, toast } from 'react-toastify';

const My_Account = () => {

    //********************************** */
    const API_KEY = process.env.REACT_APP_API_IP;
    const [showSaveButtons, setShowSaveButtons] = useState(false);
    const [passShow, setPassShow] = useState(false);
    const { logindata } = useContext(LoginContext);
    const [userdata, setuserdata] = useState();
    const [admindata, setadmindata] = useState();

    const [firstName, setFirstName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [lastname, setLastName] = useState('');
    const [phonenumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');

    const [password, setPassword] = useState('');
    const [cpassword, setCpassword] = useState('');
    const [signedtime, setSignedTime] = useState('');

    useEffect(() => {
        fetchData();

    }, []);

    const fetchData = async () => {
        try {
            const url = `${API_KEY}/common/user/${logindata.user.id}`;
            const response = await fetch(url);
            const data = await response.json();
            setuserdata(data);
            fetchAdminData(data.email);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };


    const fetchAdminData = async (email) => {
        try {

            const url = `${API_KEY}/admin/adminsignup/adminbyemail/${email}`;
            const response = await fetch(url);
            const data = await response.json();

            setadmindata(data.admin[0]);
            setFirstName(data.admin[0].firstName);
            setMiddleName(data.admin[0].middleName);
            setLastName(data.admin[0].lastName);
            setPhoneNumber(data.admin[0].phoneNumber
            );
            setEmail(data.admin[0].email
            );
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const handleSaveButtonClick = () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            firstName: firstName,
            middleName: middleName,
            lastName: lastname,
            phoneNumber: phonenumber,
        });

        const requestOptions = {
            method: "PATCH",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        const url = `${API_KEY}/admin/adminsignup/${admindata._id}`;
        fetch(url, requestOptions)
            .then((response) => response.text())
            .then((result) => {
                console.log(result);
                toast.success('Data updated successful!');
                window.location.reload();
            })
            .catch((error) => {
                console.error(error);
                toast.error('An error occurred!');
            });
    };




    //******************* */

    const handleEditClick = () => {
        setShowSaveButtons(true);
    };
    const handleCancelButtonClick = () => {
        setShowSaveButtons(false);
    };
    const [showAlert, setShowAlert] = useState(false);

    // Function to toggle the alert box
    const toggleAlert = () => {
        setShowAlert(!showAlert);
    };
    const handleCloseAlert = () => {
        setShowAlert(false);
    }
    const handleAuthentication = () => {
        setShowAlert(!showAlert);
    }
    const [isChecked, setIsChecked] = useState(false);
    const [isPaymentsChecked, setIsPaymentsChecked] = useState(false);
    const [isOrganizersChecked, setIsOrganizersChecked] = useState(false);
    const [isUploadsChecked, setIsUploadsChecked] = useState(false);
    const [isSignaturesChecked, setIsSignaturesChecked] = useState(false);
    const [isApprovalsChecked, setIsApprovalsChecked] = useState(false);
    const [isUploadingChecked, setIsUploadingChecked] = useState(false);
    const [isTasksChecked, setIsTasksChecked] = useState(false);
    const [isMessagesChecked, setIsMessagesChecked] = useState(false);
    const [isNewEmailChecked, setIsNewEmailChecked] = useState(false);
    const [isProposalsChecked, setIsProposalsChecked] = useState(false);
    const [isJobsChecked, setIsJobsChecked] = useState(false);
    const [isMentionsChecked, setIsMentionsChecked] = useState(false);
    const [isSmsChecked, setIsSmsChecked] = useState(false);
    const [isEmailChecked, setIsEmailChecked] = useState(false);
    const [isPaymentsEmailChecked, setIsPaymentsEmailChecked] = useState(false);
    const [isOrganizersEmailChecked, setIsOrganizersEmailChecked] = useState(false);
    const [isUploadsEmailChecked, setIsUploadsEmailChecked] = useState(false);
    const [isSignaturesEmailChecked, setIsSignaturesEmailChecked] = useState(false);
    const [isApprovalsEmailChecked, setIsApprovalsEmailChecked] = useState(false);
    const [isUploadingEmailChecked, setIsUploadingEmailChecked] = useState(false);
    const [isTasksEmailChecked, setIsTasksEmailChecked] = useState(false);
    const [isMessagesEmailChecked, setIsMessagesEmailChecked] = useState(false);
    const [isNewEmailEmailChecked, setIsNewEmailEmailChecked] = useState(false);
    const [isProposalsEmailChecked, setIsProposalsEmailChecked] = useState(false);
    const [isJobsEmailChecked, setIsJobsEmailChecked] = useState(false);
    const [isMentionsEmailChecked, setIsMentionsEmailChecked] = useState(false);
    const [isSmsEmailChecked, setIsSmsEmailChecked] = useState(false);













    const options = [
        { value: 'en', label: 'English' },
        { value: 'fr', label: 'French' },
        { value: 'es', label: 'Spanish' },
        { value: 'de', label: 'German' },
        { value: 'it', label: 'Italian' },
        { value: 'pt', label: 'Portuguese' },
        { value: 'ru', label: 'Russian' },
        { value: 'zh', label: 'Chinese' },
        { value: 'ja', label: 'Japanese' },
        { value: 'ko', label: 'Korean' },
        // Add more languages as needed
    ];
    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);

    };
    const handlePaymentsCheckboxChange = () => {
        setIsPaymentsChecked(!isPaymentsChecked);
    };
    const handleOrganizersCheckboxChange = () => {
        setIsOrganizersChecked(!isOrganizersChecked);
    }
    const handleUploadsCheckboxChange = () => {
        setIsUploadsChecked(!isUploadsChecked);
    }
    const handleSignaturesCheckboxChange = () => {
        setIsSignaturesChecked(!isSignaturesChecked);
    }
    const handleApprovalsCheckboxChange = () => {
        setIsApprovalsChecked(!isApprovalsChecked);
    }
    const handleUploadingCheckboxChange = () => {
        setIsUploadingChecked(!isUploadingChecked);
    }
    const handleTasksCheckboxChange = () => {
        setIsTasksChecked(!isTasksChecked);
    }
    const handleMessagesCheckboxChange = () => {
        setIsMessagesChecked(!isMessagesChecked);
    }
    const handleNewEmailCheckboxChange = () => {
        setIsNewEmailChecked(!isNewEmailChecked);
    }
    const handleProposalsCheckboxChange = () => {
        setIsProposalsChecked(!isProposalsChecked);
    }
    const handleJobsCheckboxChange = () => {
        setIsJobsChecked(!isJobsChecked);
    }
    const handleMentionsCheckboxChange = () => {
        setIsMentionsChecked(!isMentionsChecked);
    }
    const handleSmsCheckboxChange = () => {
        setIsSmsChecked(!isSmsChecked);
    }

    const handleEmailCheckboxChange = () => {
        setIsEmailChecked(!isEmailChecked);

    };
    const handlePaymentsEmailCheckboxChange = () => {
        setIsPaymentsEmailChecked(!isPaymentsEmailChecked);
    };
    const handleOrganizersEmailCheckboxChange = () => {
        setIsOrganizersEmailChecked(!isOrganizersEmailChecked);
    }
    const handleUploadsEmailCheckboxChange = () => {
        setIsUploadsEmailChecked(!isUploadsEmailChecked);
    }
    const handleSignaturesEmailCheckboxChange = () => {
        setIsSignaturesEmailChecked(!isSignaturesEmailChecked);
    }
    const handleApprovalsEmailCheckboxChange = () => {
        setIsApprovalsEmailChecked(!isApprovalsEmailChecked);
    }
    const handleUploadingEmailCheckboxChange = () => {
        setIsUploadingEmailChecked(!isUploadingEmailChecked);
    }
    const handleTasksEmailCheckboxChange = () => {
        setIsTasksEmailChecked(!isTasksEmailChecked);
    }
    const handleMessagesEmailCheckboxChange = () => {
        setIsMessagesEmailChecked(!isMessagesEmailChecked);
    }
    const handleNewEmailEmailCheckboxChange = () => {
        setIsNewEmailEmailChecked(!isNewEmailEmailChecked);
    }
    const handleProposalsEmailCheckboxChange = () => {
        setIsProposalsEmailChecked(!isProposalsEmailChecked);
    }
    const handleJobsEmailCheckboxChange = () => {
        setIsJobsEmailChecked(!isJobsEmailChecked);
    }
    const handleMentionsEmailCheckboxChange = () => {
        setIsMentionsEmailChecked(!isMentionsEmailChecked);
    }
    const handleSmsEmailCheckboxChange = () => {
        setIsSmsEmailChecked(!isSmsEmailChecked);
    }


    const [selectedLanguage, setSelectedLanguage] = useState(null);

    const handleChange = (selectedOption) => {
        setSelectedLanguage(selectedOption);
    };
    return (
        <>
            <div>
                <h1>Account settings</h1>
            </div>
            <div className='account-settings'>
                <div className='accounts-details-user'>
                    <div className='details-section-one'>

                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <div className='hr'> <h4 style={{ marginBottom: '10px' }}>Personal details</h4></div>
                            <div className="user-profile-container">
                                <img src={user} alt='' className="user-profile-image" style={{ width: '40px', height: '40px', borderRadius: '50%', marginTop: '25px' }} />
                            </div>
                            <div className='hr'><LuPenLine style={{ float: 'right', marginBottom: '10px', cursor: 'pointer' }} onClick={handleEditClick} /></div>
                        </div>

                        <div className='contact-details'>
                            <div style={{ display: 'flex', gap: '10px' }}>
                                <div>
                                    <label>First Name</label>
                                    <input value={firstName} onChange={(e) => setFirstName(e.target.value)} type='text' placeholder='First Name' />
                                </div>

                                <div>
                                    <label>Middle Name</label>
                                    <input value={middleName} onChange={(e) => setMiddleName(e.target.value)} type='text' placeholder='Middle Name' />
                                </div>
                                <div>
                                    <label>Last Name</label>
                                    <input value={lastname} onChange={(e) => setLastName(e.target.value)} type='text' placeholder='Last Name' />
                                </div>

                            </div>
                            <div>
                                <label>Phone Number</label>
                                <div>
                                    <input value={phonenumber} onChange={(e) => setPhoneNumber(e.target.value)} type='text' placeholder='Phone Number' style={{ width: '32%' }} />
                                </div>

                            </div>
                        </div>
                        {showSaveButtons && (
                            <div className='save-btns-info'>
                                <button className='btn1' onClick={handleSaveButtonClick}>Save</button>
                                <button className='btn2' onClick={handleCancelButtonClick}>Cancel</button>
                            </div>
                        )}
                    </div>

                    <div className='login-details-user'>
                        <div className="login-header">
                            <h4>Login details</h4>
                            <LuPenLine onClick={toggleAlert} style={{ cursor: 'pointer' }} />

                            {showAlert && (
                                <div className="overlay">
                                    <div className='overlay-login-container'>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <h4>Authentication</h4>
                                            <RxCross2 onClick={handleCloseAlert} />
                                        </div>
                                        <hr style={{ margin: '15px 0' }} />
                                        <div>
                                            <p>In order to change your login details you must provide your current password.</p>
                                        </div>
                                        <div className="password-input" style={{ display: "flex", flexDirection: "column", position: "relative", marginTop: "3%" }}>
                                            <label htmlFor="password">Password</label>

                                            <div className="inputfield-container">
                                                <input type={!passShow ? "password" : "text"} placeholder="Enter Your Password" name="password" id="password" style={{ padding: "8px 12px", width: "100%", border: "2px solid rgb(100, 149, 237)", borderRadius: "10px", margin: "10px 0" }} />
                                                <div className="showpass" onClick={() => setPassShow(!passShow)} style={{ position: "absolute", top: "65%", transform: "translateY(-50%)", right: "20px", cursor: "pointer" }}>
                                                    {!passShow ? <FaEyeSlash /> : <FaEye />}
                                                </div>
                                            </div>
                                        </div>
                                        <div> <NavLink to="/forgotpass" href="#" style={{ color: "rgb(100, 149, 237)", textDecoration: "none" }}>
                                            Forgot Password?
                                        </NavLink>
                                        </div>
                                        <div>
                                            <button className='btn1'>Submit</button>
                                            <button className='btn2' onClick={handleCloseAlert}>Cancle</button>
                                        </div>
                                    </div>

                                </div>
                            )}
                        </div>
                        <div className='hr' style={{ marginTop: '10px' }}></div>
                        <div style={{ marginTop: '15px' }}>
                            <div>
                                <label>Email</label>
                                <input value={email} onChange={(e) => setEmail(e.target.value)} type='email' placeholder='Email' />
                            </div>
                            <div style={{ display: 'flex', gap: '25px' }}>
                                <div>
                                    <label>Password</label>
                                    <input value={password} onChange={(e) => setPassword(e.target.value)} type='text' placeholder='Last Name' />
                                </div>
                                <div>
                                    <label>Confirm Password</label>
                                    <input value={cpassword} onChange={(e) => setCpassword(e.target.value)} type='text' placeholder='Last Name' />
                                </div>
                            </div>
                            <div>
                                <label>Stay signed in for</label>
                                <input value={signedtime} onChange={(e) => setSignedTime(e.target.value)} type='text' placeholder='Stay signed in for' />
                            </div>
                        </div>
                    </div>
                    <div className='authentication'>
                        <div className='authentication-header'>
                            <h4>Two-factor authentication
                            </h4>

                        </div>
                        <div className='hr' style={{ marginTop: '10px' }}></div>
                        <div style={{ display: 'flex', gap: '10px', marginTop: '25px', cursor: 'pointer', alignItems: 'center' }}>
                            <Switch
                                onChange={handleAuthentication}
                                // checked={showAlert}
                                onColor="#3A91F5"
                                onHandleColor="#FFF"
                                handleDiameter={10}
                                uncheckedIcon={false}
                                checkedIcon={false}
                                height={20}
                                width={32}
                                className="react-switch"
                            />
                            <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                                <p onClick={handleAuthentication}>Turn on two-factor authencation</p>
                                <SlQuestion style={{ color: 'blue' }} />
                            </div>

                        </div>
                    </div>
                </div>


                {/* notifications */}
                <div className='notifiaction-details'>
                    <div className='preferences'>
                        <div className='preferences-header'>
                            <h4>Notification preferences
                            </h4>
                            <SlQuestion style={{ color: 'blue' }} />

                        </div>
                        <div className='hr' style={{ marginTop: '10px' }}></div>
                        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr' }}>
                            <div >
                                <div style={{ padding: '20px' }}></div>
                                <hr />
                                <div className='lists'>
                                    <div style={{ margin: '10px 0' }}><p>Invoices</p></div>
                                    <hr />
                                    <div style={{ margin: '10px 0' }}><p>Payments</p></div>
                                    <hr />
                                    <div style={{ margin: '10px 0' }}><p>Organizers</p></div>
                                    <hr />
                                    <div style={{ margin: '10px 0' }}><p>Documents</p></div>
                                    <hr />
                                    <div style={{ margin: '10px 0 10px 15px' }}><p>Uploads</p></div>
                                    <hr />
                                    <div style={{ margin: '10px 0 10px 15px' }}><p>E-signatures</p></div>
                                    <hr />
                                    <div style={{ margin: '10px 0 10px 15px' }}><p>Approvals</p></div>
                                    <hr />
                                    <div style={{ margin: '10px 0 10px 15px' }}><p>"Done uploading"</p></div>
                                    <hr />
                                    <div style={{ margin: '10px 0' }}><p>Tasks</p></div>
                                    <hr />
                                    <div style={{ margin: '10px 0' }}><p>Messages</p></div>
                                    <hr />
                                    <div style={{ margin: '10px 0' }}><p>New mail</p></div>
                                    <hr />
                                    <div style={{ margin: '10px 0' }}><p>Proposals</p></div>
                                    <hr />
                                    <div style={{ margin: '10px 0' }}><p>Jobs</p></div>
                                    <hr />
                                    <div style={{ margin: '10px 0' }}><p>Mentions</p></div>
                                    <hr />
                                    <div style={{ margin: '10px 0' }}><p>SMS</p></div>
                                    <hr />

                                </div>

                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <div style={{ padding: '10px' }}>INBOX+</div>
                                <hr />
                                <div className='lists'>
                                    <div style={{ margin: '10px 0' }}>
                                        <input
                                            type="checkbox"
                                            checked={isChecked}
                                            onChange={handleCheckboxChange}
                                        />
                                    </div>
                                    <hr />
                                    <div style={{ margin: '10px 0' }}>
                                        <input
                                            type="checkbox"
                                            checked={isPaymentsChecked}
                                            onChange={handlePaymentsCheckboxChange}
                                        />
                                    </div>
                                    <hr />
                                    <div style={{ margin: '10px 0' }}>
                                        <input
                                            type="checkbox"
                                            checked={isOrganizersChecked}
                                            onChange={handleOrganizersCheckboxChange}
                                        />
                                    </div>
                                    <hr />
                                    <div style={{ margin: '10px 0', padding: '10px' }}>

                                    </div>
                                    <hr />
                                    <div style={{ margin: '10px 0' }}>
                                        <input
                                            type="checkbox"
                                            checked={isUploadsChecked}
                                            onChange={handleUploadsCheckboxChange}
                                        />
                                    </div>
                                    <hr />
                                    <div style={{ margin: '10px 0' }}>
                                        <input
                                            type="checkbox"
                                            checked={isSignaturesChecked}
                                            onChange={handleSignaturesCheckboxChange}
                                        />
                                    </div>
                                    <hr />
                                    <div style={{ margin: '10px 0' }}>
                                        <input
                                            type="checkbox"
                                            checked={isApprovalsChecked}
                                            onChange={handleApprovalsCheckboxChange}
                                        />
                                    </div>
                                    <hr />
                                    <div style={{ margin: '10px 0' }}>
                                        <input
                                            type="checkbox"
                                            checked={isUploadingChecked}
                                            onChange={handleUploadingCheckboxChange}
                                        />
                                    </div>
                                    <hr />
                                    <div style={{ margin: '10px 0' }}>
                                        <input
                                            type="checkbox"
                                            checked={isTasksChecked}
                                            onChange={handleTasksCheckboxChange}
                                        />
                                    </div>
                                    <hr />
                                    <div style={{ margin: '10px 0' }}>
                                        <input
                                            type="checkbox"
                                            checked={isMessagesChecked}
                                            onChange={handleMessagesCheckboxChange}
                                        />
                                    </div>
                                    <hr />
                                    <div style={{ margin: '10px 0' }}>
                                        <input
                                            type="checkbox"
                                            checked={isNewEmailChecked}
                                            onChange={handleNewEmailCheckboxChange}
                                        />
                                    </div>
                                    <hr />

                                    <div style={{ margin: '10px 0' }}>
                                        <input
                                            type="checkbox"
                                            checked={isProposalsChecked}
                                            onChange={handleProposalsCheckboxChange}
                                        />
                                    </div>
                                    <hr />
                                    <div style={{ margin: '10px 0' }}>
                                        <input
                                            type="checkbox"
                                            checked={isJobsChecked}
                                            onChange={handleJobsCheckboxChange}
                                        />
                                    </div>
                                    <hr />
                                    <div style={{ margin: '10px 0' }}>
                                        <input
                                            type="checkbox"
                                            checked={isMentionsChecked}
                                            onChange={handleMentionsCheckboxChange}
                                        />
                                    </div>
                                    <hr />
                                    <div style={{ margin: '10px 0' }}>
                                        <input
                                            type="checkbox"
                                            checked={isSmsChecked}
                                            onChange={handleSmsCheckboxChange}
                                        />
                                    </div>
                                    <hr />
                                </div>
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <div style={{ padding: '10px' }}>EMAIL</div>
                                <hr />
                                <div className='lists'>
                                    <div style={{ margin: '10px 0' }}>
                                        <input
                                            type="checkbox"
                                            checked={isEmailChecked}
                                            onChange={handleEmailCheckboxChange}
                                        />
                                    </div>
                                    <hr />
                                    <div style={{ margin: '10px 0' }}>
                                        <input
                                            type="checkbox"
                                            checked={isPaymentsEmailChecked}
                                            onChange={handlePaymentsEmailCheckboxChange}
                                        />
                                    </div>
                                    <hr />
                                    <div style={{ margin: '10px 0' }}>
                                        <input
                                            type="checkbox"
                                            checked={isOrganizersEmailChecked}
                                            onChange={handleOrganizersEmailCheckboxChange}
                                        />
                                    </div>
                                    <hr />
                                    <div style={{ margin: '10px 0', padding: '10px' }}>

                                    </div>
                                    <hr />
                                    <div style={{ margin: '10px 0' }}>
                                        <input
                                            type="checkbox"
                                            checked={isUploadsEmailChecked}
                                            onChange={handleUploadsEmailCheckboxChange}
                                        />
                                    </div>
                                    <hr />
                                    <div style={{ margin: '10px 0' }}>
                                        <input
                                            type="checkbox"
                                            checked={isSignaturesEmailChecked}
                                            onChange={handleSignaturesEmailCheckboxChange}
                                        />
                                    </div>
                                    <hr />
                                    <div style={{ margin: '10px 0' }}>
                                        <input
                                            type="checkbox"
                                            checked={isApprovalsEmailChecked}
                                            onChange={handleApprovalsEmailCheckboxChange}
                                        />
                                    </div>
                                    <hr />
                                    <div style={{ margin: '10px 0' }}>
                                        <input
                                            type="checkbox"
                                            checked={isUploadingEmailChecked}
                                            onChange={handleUploadingEmailCheckboxChange}
                                        />
                                    </div>
                                    <hr />
                                    <div style={{ margin: '10px 0' }}>
                                        <input
                                            type="checkbox"
                                            checked={isTasksEmailChecked}
                                            onChange={handleTasksEmailCheckboxChange}
                                        />
                                    </div>
                                    <hr />
                                    <div style={{ margin: '10px 0' }}>
                                        <input
                                            type="checkbox"
                                            checked={isMessagesEmailChecked}
                                            onChange={handleMessagesEmailCheckboxChange}
                                        />
                                    </div>
                                    <hr />
                                    <div style={{ margin: '10px 0' }}>
                                        <input
                                            type="checkbox"
                                            checked={isNewEmailEmailChecked}
                                            onChange={handleNewEmailEmailCheckboxChange}
                                        />
                                    </div>
                                    <hr />

                                    <div style={{ margin: '10px 0' }}>
                                        <input
                                            type="checkbox"
                                            checked={isProposalsEmailChecked}
                                            onChange={handleProposalsEmailCheckboxChange}
                                        />
                                    </div>
                                    <hr />
                                    <div style={{ margin: '10px 0' }}>
                                        <input
                                            type="checkbox"
                                            checked={isJobsEmailChecked}
                                            onChange={handleJobsEmailCheckboxChange}
                                        />
                                    </div>
                                    <hr />
                                    <div style={{ margin: '10px 0' }}>
                                        <input
                                            type="checkbox"
                                            checked={isMentionsEmailChecked}
                                            onChange={handleMentionsEmailCheckboxChange}
                                        />
                                    </div>
                                    <hr />
                                    <div style={{ margin: '10px 0' }}>
                                        <input
                                            type="checkbox"
                                            checked={isSmsEmailChecked}
                                            onChange={handleSmsEmailCheckboxChange}
                                        />
                                    </div>
                                    <hr />
                                </div>
                            </div>


                        </div>

                    </div>
                    <div className='emailsyns'>
                        <div>
                            <h4>Email Sync</h4>
                        </div>
                        <div className='hr' style={{ marginTop: '10px' }}></div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginTop: '20px' }}>
                            <p>Sync your existing email with TaxDome — all your client messages in one place.</p>
                            <SlQuestion style={{ color: 'blue' }} />
                        </div>
                        <div style={{ marginTop: '25px' }}>
                            <div>
                                <label>Email for sync</label>
                                <input type='text' placeholder='First Name' />
                            </div>
                            <div>
                                <button className='btn1'>Sync your email</button>
                            </div>
                        </div>
                    </div>
                    <div className='emailsyns' style={{ marginTop: '20px' }}>
                        <div>
                            <h4>Download Windows app</h4>
                        </div>
                        <div className='hr' style={{ marginTop: '10px' }}></div>
                        <div style={{ marginTop: '20px' }}>
                            <p>TaxDome Windows App help</p>
                            <Link to='#'>https://help.taxdome.com/article/164-taxdome-windows-application</Link>
                        </div>

                    </div>
                    <div className='emailsyns'>
                        <div>
                            <h4>International settings</h4>
                        </div>
                        <div className='hr' style={{ marginTop: '10px' }}></div>
                        <div style={{ marginTop: '20px' }}>

                            <label>System Language</label>
                            <div style={{ marginTop: '10px' }}>
                                <Select
                                    value={selectedLanguage}
                                    onChange={handleChange}
                                    options={options}
                                    placeholder="Select a language"
                                />
                            </div>

                        </div>
                    </div>
                </div>
                <ToastContainer />
            </div>
        </>
    )
}

export default My_Account