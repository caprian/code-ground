import React from 'react';
import HeaderButton from './HeaderButton';
import './Header.css';

export default function Header() {
    const onRunClick = () => {
        console.log('Run button clicked!');
    };

    const onStopClick = () => {
        console.log('Stop button clicked!');
    };

    const onPauseClick = () => {
        console.log('Pause button clicked!');
    };

    return (
        <div className="header-container">
            <HeaderButton 
                name="Run" 
                onClick={onRunClick} 
                className="btn-run" 
            />
            <HeaderButton 
                name="Stop" 
                onClick={onStopClick} 
                className="btn-stop" 
            />
            <HeaderButton 
                name="Pause" 
                onClick={onPauseClick} 
                className="btn-pause" 
            />
        </div>
    );
}
