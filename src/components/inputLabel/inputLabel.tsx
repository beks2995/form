import React from 'react';

interface Interface {
    text: string
}

const InputLabel = ({text}:Interface) => {
    return (
        <label className='input-label'>
            {text}
        </label>
    );
};

export default InputLabel;