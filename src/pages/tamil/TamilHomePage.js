import { useNavigate } from 'react-router-dom';
import { Button } from 'primereact/button';

const TamilHomePage = () => {
    const navigate = useNavigate();

    return (
        <div className="grid" style={{paddingTop: "50px"}}>
            <div className="col-3"></div>
            <div className="col-6">
                <div class="block p-2">
                    <Button
                        label="உயிர் எழுத்துக்கள்"
                        className="p-button-lg w-full"
                        onClick={() => navigate('/uyir')}
                    />
                </div>
                <div class="block p-2">
                    <Button
                        label="மெய் எழுத்துக்கள்"
                        className="p-button-lg w-full"
                        onClick={() => navigate('/mei')}
                />
                </div>
                <div className="block p-2">
                    <Button
                        label="உயிர்மெய் எழுத்துக்கள்"
                        className="p-button-lg w-full"
                        onClick={() => navigate('/uyirmei')}
                    />
                </div>
            </div>
            <div className="col-3"></div>
        </div>
    );
};

export default TamilHomePage;