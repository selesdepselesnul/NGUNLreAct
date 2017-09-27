import React, { Component } from 'react';

const TotalScore = ({isShown, totalScore}) => (
    <div className={isShown ? "col-md-12" : "hidden"}>
        <p className="text-center">
            Total IPK = {totalScore}
        </p>
    </div>
);

export default TotalScore;