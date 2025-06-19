import React, { useState } from 'react';
import { Button } from 'primereact/button';
import './TamilLetters.css';

const TamilLetters = (props) => {

        const [activeIndex, setActiveIndex] = useState(null);
    
        const speakLetter = (audioId, index) => {
            const audio = new Audio(`/audio/${props.audioFolder}/${audioId}.mp3`)
            audio.play();

            setActiveIndex(index);
            setTimeout(() => setActiveIndex(null), 500); // remove class after animation
        };
    
        return (
            <div className="letter-wrapper">
                <h1 className="letter-title" style={{fontSize: '3rem'}}>{props.heading}</h1>
    
                <div className="letter-grid">
                            {props.letters.map(({char, color, audio}, idx) => (
                                <div key={idx} className="col-4" style={{padding: '25px'}}>
                                        <Button  
                                                label={char} 
                                                className={`letter-tile ${
                                                    activeIndex === idx ? 'bounce' : ''
                                                }`}
                                                onClick={() => speakLetter(audio, idx)}
                                                style={{
                                                    backgroundColor: color,
                                                    fontSize: '8rem',
                                                    fontWeight: 'bold',
                                                    borderRadius: '8px',
                                                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                                                    aspectRatio: '1 / 1', // Keeps square shape
                                                    padding: 0
                                                }}
                                        />
                                </div>
                            ))}
                </div>
                
                
            </div>
        );

};

export default TamilLetters;