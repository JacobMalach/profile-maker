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
            <button onClick={this.handleClick}>Download</button>
        )
    }
}