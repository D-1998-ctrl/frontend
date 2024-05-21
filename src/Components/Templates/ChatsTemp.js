import React, { useState, useEffect, useRef } from 'react'
import './FolderTemplate/chat.css'
import Select from "react-select";
import { RiAddCircleLine } from "react-icons/ri";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertToRaw, ContentState, Modifier } from 'draft-js';
import Switch from "react-switch";
const ChatsTemp = () => {
  const [inputText, setInputText] = useState('');
  const [selectedShortcut, setSelectedShortcut] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredShortcuts, setFilteredShortcuts] = useState([]);
  const dropdownRef = useRef(null);
  const [selectedOption, setSelectedOption] = useState('contacts'); // Default selected option
  const [isSendReminders, setIsSendReminders] = useState(false)
  const handleSendReminder = (checked) => {
    setIsSendReminders(checked)
  }

  const [shortcuts, setShortcuts] = useState([]);
  const handleInputChange = (e) => {
    const { value } = e.target;
    setInputText(value); // Update inputText state with the new value
    // console.log("Email Subject:", value); // Log the value to the console
  };
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
    setSearchTerm(''); // Clear search term when showing the dropdown
  };
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };
  const handleAddShortcut = (shortcut) => {
    setInputText(prevText => prevText + `[${shortcut}]`);
    setShowDropdown(false);


  };
  useEffect(() => {
    setFilteredShortcuts(shortcuts.filter(shortcut => shortcut.title.toLowerCase().includes(searchTerm.toLowerCase())));
  }, [searchTerm, shortcuts]);
  useEffect(() => {
    if (selectedOption === 'contacts') {
      // Set contact shortcuts
      const contactShortcuts = [
        { title: 'Account Shortcodes', isBold: true },
        { title: 'Account Name', isBold: false, value: 'ACCOUNT_NAME' },
        { title: 'Custom field:Website', isBold: false, value: 'ACCOUNT_CUSTOM_FIELD:Website' },
        { title: 'Contact Shortcodes', isBold: true, },
        { title: 'Contact Name', isBold: false, value: 'CONTACT_NAME' },
        { title: 'First Name', isBold: false, value: 'FIRST_NAME' },
        { title: 'Middle Name', isBold: false, value: 'MIDDLE_NAME' },
        { title: 'Last Name', isBold: false, value: 'LAST_NAME' },
        { title: 'Phone number', isBold: false, value: 'PHONE_NUMBER' },
        { title: 'Country', isBold: false, value: 'COUNTRY' },
        { title: 'Company name', isBold: false, value: 'COMPANY_NAME ' },
        { title: 'Street address', isBold: false, value: 'STREET_ADDRESS' },
        { title: 'City', isBold: false, value: 'CITY' },
        { title: 'State/Province', isBold: false, value: 'STATE / PROVINCE' },
        { title: 'Zip/Postal code', isBold: false, value: 'ZIP / POSTAL CODE' },
        { title: 'Custom field:Email', isBold: false, value: 'CONTACT_CUSTOM_FIELD:Email' },

        { title: 'Date Shortcodes', isBold: true },
        { title: 'Current day full date', isBold: false, value: 'CURRENT_DAY_FULL_DATE' },
        { title: 'Current day number', isBold: false, value: 'CURRENT_DAY_NUMBER' },
        { title: 'Current day name', isBold: false, value: 'CURRENT_DAY_NAME' },
        { title: 'Current week', isBold: false, value: 'CURRENT_WEEK' },
        { title: 'Current month number', isBold: false, value: 'CURRENT_MONTH_NUMBER' },
        { title: 'Current month name', isBold: false, value: 'CURRENT_MONTH_NAME' },
        { title: 'Current quarter', isBold: false, value: 'CURRENT_QUARTER' },
        { title: 'Current year', isBold: false, value: 'CURRENT_YEAR' },
        { title: 'Last day full date', isBold: false, value: 'LAST_DAY_FULL_DATE' },
        { title: 'Last day number', isBold: false, value: 'LAST_DAY_NUMBER' },
        { title: 'Last day name', isBold: false, value: 'LAST_DAY_NAME' },
        { title: 'Last week', isBold: false, value: 'LAST_WEEK' },
        { title: 'Last month number', isBold: false, value: 'LAST_MONTH_NUMBER' },
        { title: 'Last month name', isBold: false, value: 'LAST_MONTH_NAME' },
        { title: 'Last quarter', isBold: false, value: 'LAST_QUARTER' },
        { title: 'Last_year', isBold: false, value: 'LAST_YEAR' },
        { title: 'Next day full date', isBold: false, value: 'NEXT_DAY_FULL_DATE' },
        { title: 'Next day number', isBold: false, value: 'NEXT_DAY_NUMBER' },
        { title: 'Next day name', isBold: false, value: 'NEXT_DAY_NAME' },
        { title: 'Next week', isBold: false, value: 'NEXT_WEEK' },
        { title: 'Next month number', isBold: false, value: 'NEXT_MONTH_NUMBER' },
        { title: 'Next month name', isBold: false, value: 'NEXT_MONTH_NAME' },
        { title: 'Next quarter', isBold: false, value: 'NEXT_QUARTER' },
        { title: 'Next year', isBold: false, value: 'NEXT_YEAR' }



      ];
      setShortcuts(contactShortcuts);
    } else if (selectedOption === 'account') {
      // Set account shortcuts
      const accountShortcuts = [
        { title: 'Account Shortcodes', isBold: true },
        { title: 'Account Name', isBold: false, value: 'ACCOUNT_NAME' },
        { title: 'Custom field:Website', isBold: false, value: 'ACCOUNT_CUSTOM_FIELD:Website' },
        { title: 'Date Shortcodes', isBold: true },
        { title: 'Current day full date', isBold: false, value: 'CURRENT_DAY_FULL_DATE' },
        { title: 'Current day number', isBold: false, value: 'CURRENT_DAY_NUMBER' },
        { title: 'Current day name', isBold: false, value: 'CURRENT_DAY_NAME' },
        { title: 'Current week', isBold: false, value: 'CURRENT_WEEK' },
        { title: 'Current month number', isBold: false, value: 'CURRENT_MONTH_NUMBER' },
        { title: 'Current month name', isBold: false, value: 'CURRENT_MONTH_NAME' },
        { title: 'Current quarter', isBold: false, value: 'CURRENT_QUARTER' },
        { title: 'Current year', isBold: false, value: 'CURRENT_YEAR' },
        { title: 'Last day full date', isBold: false, value: 'LAST_DAY_FULL_DATE' },
        { title: 'Last day number', isBold: false, value: 'LAST_DAY_NUMBER' },
        { title: 'Last day name', isBold: false, value: 'LAST_DAY_NAME' },
        { title: 'Last week', isBold: false, value: 'LAST_WEEK' },
        { title: 'Last month number', isBold: false, value: 'LAST_MONTH_NUMBER' },
        { title: 'Last month name', isBold: false, value: 'LAST_MONTH_NAME' },
        { title: 'Last quarter', isBold: false, value: 'LAST_QUARTER' },
        { title: 'Last_year', isBold: false, value: 'LAST_YEAR' },
        { title: 'Next day full date', isBold: false, value: 'NEXT_DAY_FULL_DATE' },
        { title: 'Next day number', isBold: false, value: 'NEXT_DAY_NUMBER' },
        { title: 'Next day name', isBold: false, value: 'NEXT_DAY_NAME' },
        { title: 'Next week', isBold: false, value: 'NEXT_WEEK' },
        { title: 'Next month number', isBold: false, value: 'NEXT_MONTH_NUMBER' },
        { title: 'Next month name', isBold: false, value: 'NEXT_MONTH_NAME' },
        { title: 'Next quarter', isBold: false, value: 'NEXT_QUARTER' },
        { title: 'Next year', isBold: false, value: 'NEXT_YEAR' }



      ]; setShortcuts(accountShortcuts);
    }
  }, [selectedOption]);



  const [showTextDropdown, setShowTextDropdown] = useState(false);
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const CustomToolbar = () => (
    <div className="rdw-editor-toolbar">
      <div className="dropdown-button" onClick={() => setShowTextDropdown(!showTextDropdown)}>
        Add Shortcode
      </div>
      {showTextDropdown && (
        <div className="dropdown-menu" ref={dropdownRef}>
          {shortcuts.map((shortcode, index) => (
            <div
              key={index}
              className={`dropdown-item ${shortcode.isBold ? 'bold' : ''}`}
              onClick={() => handleShortcodeClick(shortcode)}
            >
              {shortcode.title}
            </div>
          ))}
        </div>
      )}
    </div>
  );
  
  const handleShortcodeClick = (shortcode) => {
    insertText(`[${shortcode.value}]`);
    setShowDropdown(false);
  };
  const insertText = (text) => {
    const contentState = editorState.getCurrentContent();
    const selectionState = editorState.getSelection();
    const newContentState = Modifier.insertText(contentState, selectionState, text);
    const newEditorState = EditorState.push(editorState, newContentState, 'insert-characters');
    setEditorState(newEditorState);
  };
  return (
    <>
      <div className='chat-container'>
        <div className='chat-title'>
          <h3>Create message template</h3>
        </div>
        <div className='chat-container-all'>
          <div style={{ border: '1px solid grey' }}></div>
          <div className='chat-container-main' >
            {/* form */}
            <div className='chat-form '>
              <div>
                <label style={{ fontSize: '14px' }}>Name</label>
                <input type='text' placeholder='Name' className='pipeline-input' />
              </div>
              <div>
                <div className='label-container'>
                  <label>From</label>
                </div>
                <Select
                  className='select-dropdown'
                  placeholder="From"
                  isMulti // Enable multi-select
                  isSearchable // Enable search     
                />
              </div>
              <div>
                <label style={{ fontSize: '14px' }}>Subject</label>
                <input type='text' placeholder='Subject' className='pipeline-input' value={inputText + selectedShortcut} />
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', }} >
                  <RiAddCircleLine style={{ color: 'blue', fontSize: '20px' }} onClick={toggleDropdown} />
                  <p style={{ color: 'blue', cursor: 'pointer', }}>Add Shortcuts</p>
                </div>
                {showDropdown && (
                  <div className="dropdown" ref={dropdownRef}>
                    <div className="search-bar" style={{ display: 'flex', justifyContent: 'space-between', gap: '10px' }}>
                      <input
                        type="text"
                        placeholder="Search shortcuts"
                        value={searchTerm}
                        onChange={handleSearchChange}
                      />
                      <button className="close-icon-email" style={{ fontSize: "20px", marginTop: '4px', border: 'none', background: 'none', color: '#007bff' }} onClick={toggleDropdown}>
                        <IoIosCloseCircleOutline />
                      </button>
                    </div>
                    <ul  className="dropdown-list">
                      {filteredShortcuts.map(shortcut => (
                        <div key={shortcut.title}>
                          <span
                            style={{ fontWeight: shortcut.isBold ? 'bold' : 'normal', cursor: 'pointer' }}
                            onClick={() => handleAddShortcut(shortcut.value)}>
                            {shortcut.title}
                          </span>
                        </div>
                      ))}
                    </ul>
                  </div>
                )}
              </div>


              <div className="texteditor" style={{ border: '2px solid red' }}>
                <Editor
                  editorState={editorState}
                  wrapperClassName="demo-wrapper"
                  editorClassName="demo-editor"
                  toolbarCustomButtons={[<CustomToolbar />]}
                  onEditorStateChange={setEditorState}
                />
              </div>
              <div className='reminders-to-clients'>
                <Switch
                  onChange={handleSendReminder}
                  checked={isSendReminders}
                  onColor="#3A91F5"
                  onHandleColor="#FFF"
                  handleDiameter={10}
                  uncheckedIcon={false}
                  checkedIcon={false}
                  height={20}
                  width={32}
                  className="react-switch"
                />
                <span className="scheduled-emails-label" style={{ cursor: "pointer" }}>Send reminders to clients</span>
              </div>
              {
                isSendReminders && (
                  <div className='reminder'>
                    <div>
                      <label>Days until next reminder</label>
                      <input type='text' />
                    </div>
                    <div>
                      <label>Days until next reminder</label>
                      <input type='text' />
                    </div>
                  </div>
                )
              }
            </div>
            <div className="middle-line"></div>
            <div className='chat-button'>
             
            </div>
          </div>
          <div style={{ border: '1px solid grey' }}></div>

          <div className='chats-btns'>
            <button className='btn1'>Save</button>
            <button className='btn2'>Cancle</button>
          </div>
        </div>

      </div>
    </>
  )
}

export default ChatsTemp