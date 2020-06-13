import React from "react";
import PropTypes from "prop-types";
import Nav from "./Nav";

class Layout extends React.Component {

    static propTypes = {
        children: PropTypes.node.isRequired,
        title: PropTypes.string.isRequired
    }

    render() {
        return (
            <div>
                <Nav active={this.props.title}/>
                <div className="container" style={{marginTop: '30px'}}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Layout;