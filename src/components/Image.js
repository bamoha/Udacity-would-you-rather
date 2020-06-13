import React from "react";

const Image = props => {
    let userImage = <img src={require('../assets/images/sarah.png')} alt="sarah" {...props} />;
    if (props.user === "tylermcginnis") {
        userImage = <img src={require('../assets/images/tyler.png')} alt="tyler" {...props} />;
    }
    else if (props.user === "johndoe") {
        userImage = <img src={require('../assets/images/john.png')} alt="john" {...props} />;
    }
    return <span>{userImage}</span>
}

export default Image;