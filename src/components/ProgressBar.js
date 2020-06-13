import React from "react";

const ProgressBar = props => {

    const round = (value, precision) => {
        let multiplier = Math.pow(10, precision || 0);
        return Math.round(value * multiplier) / multiplier;
    };

    const progress = round(props.percentage, 1);

    return (
        <div className="bar">
            {progress === 0 ? (
                <></>
            ) : (
                <div className="progressBar" style={{width: `${progress}%`}}>
                    <span>{progress}%</span>
                </div>
            )}
            
            <style>{`
                .bar {
                    background-color: #ccc;
                    width: 100%;
                    height: ${progress === 0 ? '30px' : ''};
                    border-radius: 5px;
                    margin-top: 10px;
                    margin-bottom: 20px;
                }

                .bar .progressBar {
                    background-color: #007bff;
                    padding: 3px;
                    color: #fff;
                    text-align: right;
                }
            `}</style>
        </div>
    );
}

export default ProgressBar;