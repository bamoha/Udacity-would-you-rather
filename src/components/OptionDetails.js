import React from "react";
import ProgressBar from "./ProgressBar";

const OptionDetails = props => {

    const { details, users, auth } = props;
    const allUsers = users ? Object.values(users) : [];
    const votes = details ? details.votes.length : 0;
    const percentage = (votes / allUsers.length) * 100;
    let active = false;
    if (auth && details && details.votes.includes(auth.id)) {
        active = true;
    }

    return (
        <div className={`${active ? 'active box' : 'box'}`}>
            <div>
                <p>{`${details ? details.text : ''}`}</p>
                <ProgressBar percentage={percentage} />
                <p className="text-center p">
                    {`${votes} out of ${allUsers ? allUsers.length : 0} votes`}
                </p>
                {active ? <div className="vote"><span>Your vote</span></div> : ""}
            </div>
            <style>{`
                .box {
                    padding: 10px;
                    border: 2px solid #ccc;
                    border-radius: 5px;
                    margin-bottom: 10px;
                }

                .p {
                    font-weight: bold;
                }

                .active {
                    background-color: #ddd;
                }

                .vote {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: center;
                }

                .vote span {
                    padding: 5px;
                    background-color: #F7DC6F;
                    color: #000;
                    border-radius: 10px;
                    font-size: 10px;
                    font-weight: bold; 
                }
            `}</style>
        </div>
    );
}

export default OptionDetails;