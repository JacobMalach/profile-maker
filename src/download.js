import React from "react";

export class Download extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick() {
        this.props.onClick();
    }

    render() {
        return(
            <button class="btn btn-primary btn-lg btn-block" onClick={this.handleClick}>Download</button>
        )
    }
}