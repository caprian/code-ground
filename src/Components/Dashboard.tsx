import React from 'react';
import Header from './Header';
import CodeGround from './CodeGround';
import './Dashboard.css';

export default function Dashboard() {
    return (
        <div className="dashboard-container">
            <Header />
            <CodeGround />
        </div>
    );
}
