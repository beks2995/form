import React from 'react';

interface Interface {
    text: string
}
const Heading = ({text}: Interface) => {
    return (
        <>
          <h2>{text}</h2>
        </>
    );
};

export default Heading;