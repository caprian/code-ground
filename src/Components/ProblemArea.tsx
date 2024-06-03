import React from 'react';
import './ProblemArea.css';
interface IProblemArea {
    questionNo: number;
    questionHeader: string;
    question?: string;
    examples?: string;
}

export default function ProblemArea(props: IProblemArea) {
    return (
        <div className="problem-area-container">
            <div className="problem-area-header">
                {props.questionNo}. {props.questionHeader}
            </div>
            <div className="problem-area-content">
                <p>This is the Question One READ CAREFULLY</p>
                <p className="problem-area-example">
                    <strong>Example 1</strong>
                </p>
            </div>
        </div>
    );
}
