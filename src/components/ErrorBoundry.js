import React from "react";
import { Component } from "react";
import { useState } from "react";

class ErrorBoundry extends Component {
    constructor(props) {
        super(props);
        this.state = { // contem dados e informações sobre o estado do componente
            // ErrorBoundry
            hasError: false,
        }
    }

    componentDidCatch(error, info) {
        this.setState({ hasError: true});
    }

    render() {
        if (this.state.hasError)
            return <h1>Ops! The page is broken...</h1>
        return this.props.children;
    }
}

export default ErrorBoundry;


/*function ErrorBoundry() {
    const [hasError, setHasError] = useState(false);

    if (hasError) {
        setHasError(true);
    }
    return (
        <div>

        </div>
    );
}*/