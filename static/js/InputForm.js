import React, { Component } from "react";
import './InputForm.css';
import api from './api.js.js';

class InputForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            disabled: false,
            succeeded: false,
            processing: false,
            failed: false
        }
        
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = event => {
        const {name, value} = event.target;

        this.setState({
            [name] : value
        });
    }

    async handleSubmit(ev){
        ev.preventDefault();

        api
            .send_sms({
                name: this.state.sender_name,
                number: this.state.sender_number,
                message: this.state.sender_message
            })
            .catch(err => {
                this.setState({error: err.message});
            });

    }

    renderForm() {
        var style = {
            base: {
              color: "#32325d",
              fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
              fontSmoothing: "antialiased",
              fontSize: "16px",
              "::placeholder": {
                color: "#aab7c4"
              }
            },
            invalid: {
              color: "#fa755a",
              iconColor: "#fa755a"
            }
          };

        return (
            <div className="full-container vertical-center ">
                <form onSubmit={this.handleSubmit}>
                    <h4>Enter your details and message below.</h4>
                    <div className="sr-combo-inputs" style={style}>
                        <div className="sr-combo-inputs-row">
                            <input
                                type="text"
                                name="sender_name"
                                placeholder="Name - This will tell Steve who's texting."
                                autoComplete="cardholder"
                                className="sr-input"
                                onChange={this.handleChange}
                            />
                            <input
                                type="text"
                                name="sender_number"
                                placeholder="Your number - Format like +12244878383."
                                autoComplete="cardholder"
                                className="sr-input"
                                onChange={this.handleChange}
                            />
                            <input
                                type="text"
                                name="sender_message"
                                placeholder="Your message. 140 character max."
                                autoComplete="cardholder"
                                className="sr-input"
                                onChange={this.handleChange}
                            />
                        </div>
                        {!this.state.succeeded && (
                            <button className="btn" disabled={this.state.disabled}>
                                {this.state.processing ? "Sending..." : "Send"}
                            </button>
                        )}
                    </div>
                </form>
            </div>
        ) 
    }

    render() {
        return (
            <div>
                {!this.state.succeeded && this.renderForm()}
            </div>
        );
    }
    
}

export default InputForm;