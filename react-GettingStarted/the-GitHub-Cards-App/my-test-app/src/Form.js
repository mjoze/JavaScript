import React from 'react';

class Form extends React.Component {
    state = { userName: '' }
    // userNameInput = React.createRef();
    handleSubmit = event => {
        event.preventDefault();
        // console.log(this.userNameInput.current.value);
        console.log(this.state.userName);
    };
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    placeholder="Github username"
                    value={this.state.userName}
                    onChange={event => this.setState({ userName: event.target.value })}
                    // ref={this.userNameInput}
                    required
                />
                <button>Add card</button>
            </form>
        );
    }
}

export default Form;