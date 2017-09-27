import React, { Component } from 'react';
import TotalScore from '../components/TotalScore';
import Progress from "react-progress-2";
import {connect} from "react-redux";
import R from 'ramda';

const calculateTotalScore = (gradeRows) => {
    const sksAndGradeQualityTotal = 
        R.pipe(R.filter(x => x.nilaihuruf !== '-'
                             && x.nilaihuruf !== 'T'), 
               R.reduce(
                 (acc, x) => ({
                    sksTotal: acc.sksTotal + parseFloat(x.jmlsks),
                    gradeQuality: acc.gradeQuality + parseFloat(x.mutu)
                 }), 
                 { sksTotal:0, gradeQuality:0}))(gradeRows);
    console.log(sksAndGradeQualityTotal);
    return (sksAndGradeQualityTotal.gradeQuality / sksAndGradeQualityTotal.sksTotal).toFixed(2);
};

const mapStateToProps = 
    (state) => ({ 
        totalScore: state.gradeRows == null ? 0 : calculateTotalScore(state.gradeRows),
        isShown :  state.gradeRows == null 
                   ? false 
                   : (state.gradeRows.length > 0)
    });

const TotalScoreContainer = connect(mapStateToProps)(TotalScore);
export default TotalScoreContainer;