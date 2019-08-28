import React, { Component } from 'react';
import OwnerManager from '../../modules/OwnerManager';
// import './OwnerForm.css'

class OwnerForm extends Component {
    state = {
        name: "",
        phoneNumber: "",
        pet: "",
        loadingStatus: false,
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    /*  Local method for validation, set loadingStatus, create owner     object, invoke the OwnerManager post method, and redirect to the full owner list
    */
    constructNewOwner = evt => {
        evt.preventDefault();
        if (this.state.name === "" || this.state.phoneNumber === "") {
            window.alert("Please input all information");
        } else {
            this.setState({ loadingStatus: true });
            const owner = {
                name: this.state.name,
                phoneNumber: this.state.phoneNumber,
            };

            // Create the owner and redirect user to owner list
            OwnerManager.post(owner)
            .then(() => this.props.history.push("/owners"));
        }
    };

    render(){

        return(
            <>
            <form>
                <fieldset>
                    <div className="formgrid">
                        <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="name"
                        placeholder="Name"
                        />
                        <label htmlFor="name">Name</label>
                        <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="phoneNumber"
                        placeholder="Phone Number"
                        />
                        <label htmlFor="phoneNumber">Phone Number</label>

                    </div>
                    <div className="alignRight">
                        <button
                        type="button"
                        disabled={this.state.loadingStatus}
                        onClick={this.constructNewOwner}
                        >Submit</button>
                    </div>
                </fieldset>
            </form>
        </>
        )
    }
}

export default OwnerForm;