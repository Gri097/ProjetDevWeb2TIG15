import React, { Component } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';

export class Success extends Component {
    continue = e => {
        e.preventDefault();
        // PROCESS FORM //
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        return (
            <MuiThemeProvider>
                <>
                        <h1>Merci pour votre inscription</h1>
                        <p>Vous recevrez un mail avec différentes instruction.</p>

                </>
            </MuiThemeProvider>
        );
    }
}

export default Success;