/* eslint-disable react/no-unknown-property */

import React, { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Container, Box } from '@mui/system';
import ReplayIcon from '@mui/icons-material/Replay';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import FullscreenIcon from '@mui/icons-material/Fullscreen';

// ...

export default function SimpleContainer() {
    const [isFlipped, setIsFlipped] = useState(false);
    const [boxColor, setBoxColor] = useState('linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)');

    const handleBoxClick = () => {
        setIsFlipped(!isFlipped);
        setBoxColor(isFlipped ? 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)' : 'linear-gradient(45deg, #4CAF50 30%, #8BC34A 90%)');
    };

    const renderContent = () => {
        const content = boxColor === 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)'
            ? '9+5x+76'
            : '1+3+5=9';

        return (
            <div
                style={{
                    transform: isFlipped ? 'scaleX(-1)' : 'scaleX(1)',
                }}
            >
                {content}
            </div>
        );
    };

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="sm">
                <Box
                    onClick={handleBoxClick}
                    className={`flippable-box ${isFlipped ? 'flipped' : ''}`}
                    sx={{
                        background: boxColor,
                        height: '50vh',
                        border: '2px solid #1976D2',
                        borderRadius: '8px',
                        marginBottom: '50px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-around',
                        alignItems: 'center',
                        transition: 'transform 0.5s, background 0.5s', // Added background transition
                        cursor: 'pointer',
                        // Inline style with the provided CSS
                        transformStyle: 'preserve-3d',
                        transformOrigin: 'center',
                        transform: `rotateY(${isFlipped ? '180deg' : '0deg'})`, // Updated rotation
                        animation: 'rotateAnimation 0.5s', // Added animation
                    }}
                >
                    {renderContent()}
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-around',
                        alignItems: 'center',
                        marginBottom: '100px',
                    }}
                >
                    <ReplayIcon />
                    <ArrowBackIosNewIcon />
                    <ArrowForwardIosIcon />
                    <FullscreenIcon />
                </Box>
            </Container>
            <style jsx>{`
                @keyframes rotateAnimation {
                    from {
                        transform: rotateY(0deg);
                    }
                    to {
                        transform: rotateY(180deg);
                    }
                }
            `}</style>
        </React.Fragment>
    );
}
