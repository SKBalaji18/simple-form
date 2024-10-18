import './index.css'
import {Component} from 'react'

class Form extends Component{
    state = {
        firstName: '',
        lastName: '',
        email: '',
        contact: ''
    }

    setFirstName = event => {
        this.setState({firstName:event.target.value})
    }

    setLastName = event => {
        this.setState({lastName:event.target.value})
    }

    setEmail = event => {
        this.setState({email:event.target.value})
    }

    setContact = event => {
        this.setState({contact:event.target.value})
    }

    onSubmitForm = event => {
        event.preventDefault()
        const {firstName,lastName,email,contact} = this.state

        const userDetails = {firstName,lastName,email,contact}

        //to store as object
        localStorage.setItem('user_details', userDetails);

        //to store separate keys
        
        /* localStorage.setItem('firstName', firstName);
        localStorage.setItem('lastName', lastName);
        localStorage.setItem('email', email);
        localStorage.setItem('contact', contact); 
        */

        this.setState({firstName:''})
        this.setState({lastName:''})
        this.setState({email:''})
        this.setState({contact:''})
    }

    render(){
        const {firstName,lastName,email,contact} = this.state
        return(
            <form onSubmit={this.onSubmitForm}>
                <h1>User Details</h1>
                <div>
                    <label htmlFor='firstName'>First Name: </label>
                    <input type='text' id='firstName' value={firstName} onChange={this.setFirstName} />
                </div>
                <div>
                    <label htmlFor='lastName'>Last Name: </label>
                    <input type='text' id='lastName' value={lastName} onChange={this.setLastName} />
                </div>
                <div>
                    <label htmlFor='email'>email: </label>
                    <input type='text' id='email' value={email} onChange={this.setEmail} />
                </div>
                <div>
                    <label htmlFor='Contact'>Contact: </label>
                    <input type='text' id='Contact' value={contact} onChange={this.setContact}/>
                </div>
                
                <button type='submit'>Submit</button>
            </form>
        )
    }
}

export default Form