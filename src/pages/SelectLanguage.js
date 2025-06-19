import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'primereact/button';

const SelectLanguage = () => {
    const navigate = useNavigate();

    const handleTamilClick = () => {
        navigate('/tamilhome'); // Or show another screen to choose sub-module
    };

    return (
        <div className="grid" style={{paddingTop: "50px"}}>
            <div className="col-3"></div>
            <div className="col-6">
                <Button
                    label="தமிழ்"
                    className="p-button-lg w-full"
                    onClick={handleTamilClick}
                />
            </div>
            <div className="col-3"></div>
        </div>
            

    );

};

export default SelectLanguage;