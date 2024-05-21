import React from 'react'
import { Link } from 'react-router-dom'
import './foldertemp.css'
const CreateFolderTemp = () => {
    return (
        <>
            <div className='folder-temp'>
                <div className='folder-temp-header'>
                    <h3>Create folder template</h3>
                </div>
                <div className='under-line'></div>
                <div className='folder-temp-container'>
                    <div className='folder-label' >
                        <label >Template Name</label>
                        <input type='text' placeholder='Template Name' />
                    </div>
                    <div className='folder-table'>

                    </div>
                </div>
                <div className='folder-btns'>
                    <Link to='/firmtemplates/folders'>
                        <button className='btn2'>cancle</button>
                    </Link>
                </div>

            </div>


        </>

    )
}

export default CreateFolderTemp