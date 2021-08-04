import React, { Component } from 'react';

class App extends Component {

    myForm = React.createRef();
    state = {inputValue: ''};

    send = (e) => {
        e.preventDefault();
        console.log(this.myForm.current[0].value);
    }

    commitChanges = (e) => {
        this.setState({inputValue: e.target.value})
    }

    render() {

        return (
            <div>
                <form action={'/saveData'} onSubmit={this.send} ref={this.myForm}>
                    <input onInput={this.commitChanges} value={this.state.inputValue}/>
                    <button>Send</button>
                </form>
            </div>
        );
    }
}

export default App;