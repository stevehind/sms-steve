import React, { Component } from "react";
import './InputForm.css';
import api from './api.js';

const validateForm = (errors) => {
    let valid = true;
    Object.values(errors).forEach(
        // If there is an error String, set valid to false
        (val) => val.length > 0 && (valid = false)  
    );
    return valid;
}

class InputForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            btnColor: 'lightblue',
            disabled: true,
            succeeded: false,
            failed: false,
            valid: false,
            error: null,
            errors: {
                sender_name: '',
                sender_number: '',
                sender_message: ''    
            }
        }
        
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = event => {
        event.preventDefault();
        const {name, value} = event.target;
        let errors = this.state.errors;

        switch (name) {
            case 'sender_name':
                errors.sender_name = 
                    value.length < 2
                    ? 'Name must contain at least two characters.'
                    : '';
                break;
            case 'sender_number':
                errors.sender_number =
                    value.length !== 12
                    ? 'Enter phone number with 11 digits (incl. int`l code) starting with +'
                    : '';
                break;
            case 'sender_message':
                errors.sender_message =
                    value.length > 120
                    ? 'Messages need to be <120 characters because this app is old school.'
                    : '';
                break;
            default:
                break;
        }

        this.setState({errors, [name]: value});

        if(validateForm(this.state.errors)) {
            console.log('Valid Form');
            this.setState({
                valid: true,
                disabled: false,
                btnColor: 'blue'
            })
        } else {
            console.log('Invalid form');
            this.setState({
                valid: false,
                disabled: true,
                btnColor: 'lightblue'
            })
        }
    }

    async handleSubmit(ev){
        ev.preventDefault();

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

        const {errors} = this.state

        return (
            <div className="full-container vertical-center">
                <form onSubmit={this.handleSubmit}>
                    <h2>Just like using your phone...</h2>
                    <h3>...except a web app...</h3>
                    <h4>...and also dumber.</h4>
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
                            {errors.sender_name.length < 2 && <span style={{color:'red'}}>{errors.sender_name}</span>}
                            <input
                                type="text"
                                name="sender_number"
                                placeholder="Your number - Format like +12244878383."
                                autoComplete="cardholder"
                                className="sr-input"
                                onChange={this.handleChange}
                            />
                            {errors.sender_number.length !== 12 && <span style={{color:'red'}}>{errors.sender_number}</span>}
                            <input
                                type="text"
                                name="sender_message"
                                placeholder="Your message. 120 character max."
                                autoComplete="cardholder"
                                className="sr-input"
                                onChange={this.handleChange}
                            />
                            {errors.sender_message.length > 120 && <span style={{color:'red'}}>{errors.sender_message}</span>}
                        <div>
                            {this.state.failed ? "Sending message failed. Try again." : null}
                        </div>
                        </div>
                        {!this.state.succeeded && (
                            <button
                                className="btn"
                                disabled={this.state.disabled}
                                style={{
                                    backgroundColor : this.state.btnColor,
                                    border: this.state.btnColor}}
                            >
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