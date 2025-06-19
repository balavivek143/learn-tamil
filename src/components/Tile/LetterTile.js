import { Button } from 'primereact/button';
import './LetterTile.css';

const LetterTile = (props) => {

    const basename = process.env.NODE_ENV === "production" ? "/learn-tamil" : "";

    const speakLetter = (letter, audioUrl) => {
            if(audioUrl) {
                const audio = new Audio(`${basename}${audioUrl}`);
                audio.play();
            } else {
                const utterance = new SpeechSynthesisUtterance(letter);
                utterance.lang = 'ta-IN'; // Tamil India
                utterance.pitch = 1;
                utterance.rate = 0.2; // slower for kids
                utterance.volume = 3;
                
                speechSynthesis.speak(utterance);
            }
        }

    return (
        <>
            <Button  
                    label={props.label} 
                    className={`p-button-text w-full custom-letter-tile`}
                    onClick={() => speakLetter(props.label, props.audio)}
                    style={{
                        '--tile-color': props.color,
                        color: props.color,
                        fontSize: '5vw',
                        fontWeight: 'bold',
                        borderRadius: '8px',
                        boxShadow: '0 4px 8px rgba(0,0,0,0.5)',
                        aspectRatio: '1 / 1', // Keeps square shape
                        padding: 0
                    }}
            />
            
        </>
    );

};

export default LetterTile;