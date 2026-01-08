import React from 'react';

class MyComponent extends React.Component {

    state = {
        name: 'Nguyen',
        age: 20
    };

    render() {
        return (

            <div> my name is {this.state.name} </div>
        );
    }
}

export default MyComponent; 