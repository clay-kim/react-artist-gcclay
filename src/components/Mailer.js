import React from 'react'
import { useState } from 'react';
import ProgressBar from './ProgressBar';

function Mailer() {

    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    const types = ['image/png', 'image/jpeg', 'image/jpg'];

    const changeHandler = (e) => {
        let selected = e.target.files[0];
        
        if(selected && types.includes(selected.type)){
            setFile(selected);
            setError('');
        } else {
            setFile(null);
            setError('Please select an image file');

        }
    }

    return (
        <form>
            <input type= "file" onChange={changeHandler} />
            <div className="output">
                { error && <div className="error">{error}</div>}
                { file && <div>{file.name}</div>}
                { file && <ProgressBar file ={file} setFile={setFile}/>}
                
            </div>
        </form>
    )
}

export default Mailer