import React from 'react';
import ProblemArea from './ProblemArea';
import CompilerArea from './CompilerArea';
import './CodeGround.css';
export default function CodeGround() {
    return (
        <div className="code-ground">
            <div className="problem-area">
                <ProblemArea questionNo={1} questionHeader="Question1" />
            </div>
            <div className="compiler-area">
                <CompilerArea />
            </div>
        </div>
    );
}
