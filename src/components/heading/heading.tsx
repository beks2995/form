// todo  remove unuse variables
import React from 'react';

// todo naming
interface Interface {
    text: string
}

// TODO return type
const Heading = ({text}: Interface) => {
    return (
        // TODO why <></>
        <>
          <h2>{text}</h2>
        </>
    );
};

export default Heading;