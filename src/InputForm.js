import React, { Component } from "react";
import './InputForm.css';
import api from './api.js';

class InputForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            disabled: false,
            succeeded: false,
            processing: false,
            failed: false,
            error: null
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

        this.setState({processing: true})

        api
            .send_sms({
                name: this.state.sender_name,
                number: this.state.sender_number,
                message: this.state.sender_message
            })
            .then(payload => {
                if (payload.error) {
                    this.setState({
                        error: `Sending failed: ${payload.error.message}`,
                        disabled: false,
                        proessing: false
                    });
                    console.log("[error", payload.error);
                } else {
                    this.setState({
                        processing: false,
                        succeeded: true,
                        error: "",
                    });
                    console.log("Success!")
                }
            })
            .catch(err => {
                this.setState({
                    error: err.message,
                    failed: true,
                    processing: false
                });
                console.log(err);
            });
    }

    renderSuccess() {
        return (
          <div className="sr-field-success message">
            <h3>Message sent!</h3>
            <p>Refresh to send another.</p>
          </div>
        );
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
            <div className="full-container vertical-center">
                <form onSubmit={this.handleSubmit}>
                    <h3>Just like using your phone...</h3>
                    <h4>...except a web app...</h4>
                    <h5>...and also dumber.</h5>
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
                        <div className>
                            {this.state.failed ? "Sending message failed. Try again." : null}
                        </div>
                        </div>
                        {!this.state.succeeded && (
                            <button className="btn" disabled={this.state.disabled}>
                                {this.state.failed ? "Try again." : "Send"}
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
                {this.state.succeeded && this.renderSuccess()}
                {!this.state.succeeded && this.renderForm()}
            </div>
        );
    }
    
}

export default InputForm;