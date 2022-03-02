import React from 'react';

// todo naming - type
// interface Interface {
//     text: string
// }

// return type
// const InputLabel: React.FC = (props) => <label className='input-label'>{props.children}</label>;
// // return type
const InputLabel: React.FC<{text: string}> = ({text}) => {
    return (
        <label className='input-label'>
            {text}
        </label>
    );
};

export default InputLabel;