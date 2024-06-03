import React from 'react';
import './CompilerArea.css'; 

export default function CompilerArea() {
    return (
        <div className="compiler-area-container">
            <div className="compiler-header">CompilerHeader</div>
            <div className="code-header">CodeHeader</div>
            <textarea className="code-input" />
        </div>
    );
}
