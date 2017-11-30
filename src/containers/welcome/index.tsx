import * as React from 'react';

interface Props  {
    name: string 
}

const Welcome = (props: Props) => <h1>welcome {props.name}</h1> 

export default Welcome;