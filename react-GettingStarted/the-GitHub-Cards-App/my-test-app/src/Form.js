import React from 'react';

class Form extends React.Component {
    render() {
        return (
            <form action="">
                <input type="text" placeholder="Github username" />
                <button>Add card</button>
            </form>
        );
    }
}

export default Form;