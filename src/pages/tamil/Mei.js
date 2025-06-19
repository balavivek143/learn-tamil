import DisplayPort from '../../components/Display/DisplayPlane/DisplayPort';

const Mei = () => {

    const letterDefinition = {
        heading: 'மெய் எழுத்துக்கள்',
        classification: [
            {
                heading: 'மெய் எழுத்துக்கள்',
                letters: [
                    { char: 'க்', color: '#e74c3c', audio: '/audio/mei/k.ogg' },
                    { char: 'ங்', color: '#2ecc71', audio: '/audio/mei/ng.ogg' },
                    { char: 'ச்', color: '#3498db', audio: '/audio/mei/ch.ogg' },
                    { char: 'ஞ்', color: '#9b59b6', audio: '/audio/mei/nj.ogg' },
                    { char: 'ட்', color: '#f1c40f', audio: '/audio/mei/t.ogg' },
                    { char: 'ண்', color: '#e67e22', audio: '/audio/mei/nn.ogg' },
                    { char: 'த்', color: '#1abc9c', audio: '/audio/mei/th.ogg' },
                    { char: 'ந்', color: '#ff6b81', audio: '/audio/mei/n.ogg' },
                    { char: 'ப்', color: '#34495e', audio: '/audio/mei/p.ogg' },
                    { char: 'ம்', color: '#16a085', audio: '/audio/mei/m.ogg' },
                    { char: 'ய்', color: '#c0392b', audio: '/audio/mei/y.ogg' },
                    { char: 'ர்', color: '#8e44ad', audio: '/audio/mei/r.ogg' },
                    { char: 'ல்', color: '#fd79a8', audio: '/audio/mei/l.ogg' },
                    { char: 'வ்', color: '#e74c3c', audio: '/audio/mei/v.ogg' },
                    { char: 'ழ்', color: '#2ecc71', audio: '/audio/mei/zh.ogg' },
                    { char: 'ள்', color: '#3498db', audio: '/audio/mei/ll.ogg' },
                    { char: 'ற்', color: '#9b59b6', audio: '/audio/mei/rr.ogg' },
                    { char: 'ன்', color: '#f1c40f', audio: '/audio/mei/nn2.ogg' }
                ]
            }
        ]
    };

    return (
        <DisplayPort letterDefinition={letterDefinition} />
    );
};

export default Mei;