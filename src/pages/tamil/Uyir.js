import DisplayPort from '../../components/Display/DisplayPlane/DisplayPort';

const Uyir = () => {

    const letterDefinition ={
        heading: 'உயிர் எழுத்துக்கள்',
        classification: [
            {
                heading: 'உயிர் எழுத்துக்கள்',
                letters: [
                    { char: 'அ', color: '#ff4c4c', audio: '/audio/uyir/a.ogg' },
                    { char: 'ஆ', color: '#4cff4c', audio: '/audio/uyir/aa.ogg' },
                    { char: 'இ', color: '#4c4cff', audio: '/audio/uyir/i.ogg' },
                    { char: 'ஈ', color: '#ff4cff', audio: '/audio/uyir/ii.ogg' },
                    { char: 'உ', color: '#4cffff', audio: '/audio/uyir/u.ogg' },
                    { char: 'ஊ', color: '#4cff4c', audio: '/audio/uyir/uu.ogg' },
                    { char: 'எ', color: '#ff884c', audio: '/audio/uyir/e.ogg' },
                    { char: 'ஏ', color: '#884cff', audio: '/audio/uyir/ee.ogg' },
                    { char: 'ஐ', color: '#4cff88', audio: '/audio/uyir/ai.ogg' },
                    { char: 'ஒ', color: '#ff4c88', audio: '/audio/uyir/o.ogg' },
                    { char: 'ஓ', color: '#88ff4c', audio: '/audio/uyir/oo.ogg' },
                    { char: 'ஔ', color: '#4c88ff', audio: '/audio/uyir/au.ogg' },
                    { char: 'ஃ', color: '#ffbb33', audio: '/audio/uyir/ak.ogg' }
                ]
            }
        ]
    } ;

    return (
        <DisplayPort letterDefinition={letterDefinition} />
    );
};

export default Uyir;