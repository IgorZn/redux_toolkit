import React from 'react';

const InputField = ({text, handleInput, handleSubmit}) => {
    return (
        <div>
            <label htmlFor="">
                <input value={text} onChange={(e) => handleInput(e.target.value)} type="text"/>
                <button onClick={handleSubmit}>Add Todo</button>
            </label>
        </div>
    );
};

export default InputField;
