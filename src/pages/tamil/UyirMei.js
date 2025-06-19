import DisplayPort from '../../components/Display/DisplayPlane/DisplayPort';

const UyirMei = () => {
const letterDefinition ={
        heading: 'உயிர்மெய் எழுத்துக்கள்',
        classification: [
            {
                heading: "அ-ஒலி எழுத்துக்கள்",
                letters: [
                    { char: "க", color: "#e74c3c" },
                    { char: "ங", color: "#2ecc71" },
                    { char: "ச", color: "#3498db" },
                    { char: "ஞ", color: "#9b59b6" },
                    { char: "ட", color: "#f1c40f" },
                    { char: "ண", color: "#e67e22" },
                    { char: "த", color: "#1abc9c" },
                    { char: "ந", color: "#ff6b81" },
                    { char: "ப", color: "#34495e" },
                    { char: "ம", color: "#16a085" },
                    { char: "ய", color: "#c0392b" },
                    { char: "ர", color: "#8e44ad" },
                    { char: "ல", color: "#e74c3c" },
                    { char: "வ", color: "#2ecc71" },
                    { char: "ழ", color: "#3498db" },
                    { char: "ள", color: "#9b59b6" },
                    { char: "ற", color: "#f1c40f" },
                    { char: "ன", color: "#e67e22" }
                ]
            },
            {
                heading: "ஆ-ஒலி எழுத்துக்கள்",
                letters: [
                    { char: "கா", color: "#e74c3c" },
                    { char: "ஙா", color: "#2ecc71" },
                    { char: "சா", color: "#3498db" },
                    { char: "ஞா", color: "#9b59b6" },
                    { char: "டா", color: "#f1c40f" },
                    { char: "ணா", color: "#e67e22" },
                    { char: "தா", color: "#1abc9c" },
                    { char: "நா", color: "#ff6b81" },
                    { char: "பா", color: "#34495e" },
                    { char: "மா", color: "#16a085" },
                    { char: "யா", color: "#c0392b" },
                    { char: "ரா", color: "#8e44ad" },
                    { char: "லா", color: "#e74c3c" },
                    { char: "வா", color: "#2ecc71" },
                    { char: "ழா", color: "#3498db" },
                    { char: "ளா", color: "#9b59b6" },
                    { char: "றா", color: "#f1c40f" },
                    { char: "னா", color: "#e67e22" }
                ]
            },
            {
                heading: "இ-ஒலி எழுத்துக்கள்",
                letters: [
                    { char: "கி", color: "#e74c3c" },
                    { char: "ஙி", color: "#2ecc71" },
                    { char: "சி", color: "#3498db" },
                    { char: "ஞி", color: "#9b59b6" },
                    { char: "டி", color: "#f1c40f" },
                    { char: "ணி", color: "#e67e22" },
                    { char: "தி", color: "#1abc9c" },
                    { char: "நி", color: "#ff6b81" },
                    { char: "பி", color: "#34495e" },
                    { char: "மி", color: "#16a085" },
                    { char: "யி", color: "#c0392b" },
                    { char: "ரி", color: "#8e44ad" },
                    { char: "லி", color: "#e74c3c" },
                    { char: "வி", color: "#2ecc71" },
                    { char: "ழி", color: "#3498db" },
                    { char: "ளி", color: "#9b59b6" },
                    { char: "றி", color: "#f1c40f" },
                    { char: "னி", color: "#e67e22" }
                ]
            },
            {
                heading: "ஈ-ஒலி எழுத்துக்கள்",
                letters: [
                    { char: "கீ", color: "#e74c3c" },
                    { char: "ஙீ", color: "#2ecc71" },
                    { char: "சீ", color: "#3498db" },
                    { char: "ஞீ", color: "#9b59b6" },
                    { char: "டீ", color: "#f1c40f" },
                    { char: "ணீ", color: "#e67e22" },
                    { char: "தீ", color: "#1abc9c" },
                    { char: "நீ", color: "#ff6b81" },
                    { char: "பீ", color: "#34495e" },
                    { char: "மீ", color: "#16a085" },
                    { char: "யீ", color: "#c0392b" },
                    { char: "ரீ", color: "#8e44ad" },
                    { char: "லீ", color: "#e74c3c" },
                    { char: "வீ", color: "#2ecc71" },
                    { char: "ழீ", color: "#3498db" },
                    { char: "ளீ", color: "#9b59b6" },
                    { char: "றீ", color: "#f1c40f" },
                    { char: "னீ", color: "#e67e22" }
                ]
            },
            {
                heading: "உ-ஒலி எழுத்துக்கள்",
                letters: [
                    { char: "கு", color: "#e74c3c" },
                    { char: "ஙு", color: "#2ecc71" },
                    { char: "சு", color: "#3498db" },
                    { char: "ஞு", color: "#9b59b6" },
                    { char: "டு", color: "#f1c40f" },
                    { char: "ணு", color: "#e67e22" },
                    { char: "து", color: "#1abc9c" },
                    { char: "நு", color: "#ff6b81" },
                    { char: "பு", color: "#34495e" },
                    { char: "மு", color: "#16a085" },
                    { char: "யு", color: "#c0392b" },
                    { char: "ரு", color: "#8e44ad" },
                    { char: "லு", color: "#e74c3c" },
                    { char: "வு", color: "#2ecc71" },
                    { char: "ழு", color: "#3498db" },
                    { char: "ளு", color: "#9b59b6" },
                    { char: "று", color: "#f1c40f" },
                    { char: "னு", color: "#e67e22" }
                ]
            },
            {
                heading: "ஊ-ஒலி எழுத்துக்கள்",
                letters: [
                    { char: "கூ", color: "#e74c3c" },
                    { char: "ஙூ", color: "#2ecc71" },
                    { char: "சூ", color: "#3498db" },
                    { char: "ஞூ", color: "#9b59b6" },
                    { char: "டூ", color: "#f1c40f" },
                    { char: "ணூ", color: "#e67e22" },
                    { char: "தூ", color: "#1abc9c" },
                    { char: "நூ", color: "#ff6b81" },
                    { char: "பூ", color: "#34495e" },
                    { char: "மூ", color: "#16a085" },
                    { char: "யூ", color: "#c0392b" },
                    { char: "ரூ", color: "#8e44ad" },
                    { char: "லூ", color: "#e74c3c" },
                    { char: "வூ", color: "#2ecc71" },
                    { char: "ழூ", color: "#3498db" },
                    { char: "ளூ", color: "#9b59b6" },
                    { char: "றூ", color: "#f1c40f" },
                    { char: "னூ", color: "#e67e22" }
                ]
            },
            {
                heading: "எ-ஒலி எழுத்துக்கள்",
                letters: [
                    { char: "கெ", color: "#e74c3c" },
                    { char: "ஙெ", color: "#2ecc71" },
                    { char: "செ", color: "#3498db" },
                    { char: "ஞெ", color: "#9b59b6" },
                    { char: "டெ", color: "#f1c40f" },
                    { char: "ணெ", color: "#e67e22" },
                    { char: "தெ", color: "#1abc9c" },
                    { char: "நெ", color: "#ff6b81" },
                    { char: "பெ", color: "#34495e" },
                    { char: "மெ", color: "#16a085" },
                    { char: "யெ", color: "#c0392b" },
                    { char: "ரெ", color: "#8e44ad" },
                    { char: "லெ", color: "#e74c3c" },
                    { char: "வெ", color: "#2ecc71" },
                    { char: "ழெ", color: "#3498db" },
                    { char: "ளெ", color: "#9b59b6" },
                    { char: "றெ", color: "#f1c40f" },
                    { char: "னெ", color: "#e67e22" }
                ]
            },
            {
                heading: "ஏ-ஒலி எழுத்துக்கள்",
                letters: [
                    { char: "கே", color: "#e74c3c" },
                    { char: "ஙே", color: "#2ecc71" },
                    { char: "சே", color: "#3498db" },
                    { char: "ஞே", color: "#9b59b6" },
                    { char: "டே", color: "#f1c40f" },
                    { char: "ணே", color: "#e67e22" },
                    { char: "தே", color: "#1abc9c" },
                    { char: "நே", color: "#ff6b81" },
                    { char: "பே", color: "#34495e" },
                    { char: "மே", color: "#16a085" },
                    { char: "யே", color: "#c0392b" },
                    { char: "ரே", color: "#8e44ad" },
                    { char: "லே", color: "#e74c3c" },
                    { char: "வே", color: "#2ecc71" },
                    { char: "ழே", color: "#3498db" },
                    { char: "ளே", color: "#9b59b6" },
                    { char: "றே", color: "#f1c40f" },
                    { char: "னே", color: "#e67e22" }
                ]
            },
            {
                heading: "ஐ-ஒலி எழுத்துக்கள்",
                letters: [
                    { char: "கை", color: "#e74c3c" },
                    { char: "ஙை", color: "#2ecc71" },
                    { char: "சை", color: "#3498db" },
                    { char: "ஞை", color: "#9b59b6" },
                    { char: "டை", color: "#f1c40f" },
                    { char: "ணை", color: "#e67e22" },
                    { char: "தை", color: "#1abc9c" },
                    { char: "நை", color: "#ff6b81" },
                    { char: "பை", color: "#34495e" },
                    { char: "மை", color: "#16a085" },
                    { char: "யை", color: "#c0392b" },
                    { char: "ரை", color: "#8e44ad" },
                    { char: "லை", color: "#e74c3c" },
                    { char: "வை", color: "#2ecc71" },
                    { char: "ழை", color: "#3498db" },
                    { char: "ளை", color: "#9b59b6" },
                    { char: "றை", color: "#f1c40f" },
                    { char: "னை", color: "#e67e22" }
                ]
            },
            {
                heading: "ஒ-ஒலி எழுத்துக்கள்",
                letters: [
                    { char: "கொ", color: "#e74c3c" },
                    { char: "ஙொ", color: "#2ecc71" },
                    { char: "சொ", color: "#3498db" },
                    { char: "ஞொ", color: "#9b59b6" },
                    { char: "டொ", color: "#f1c40f" },
                    { char: "ணொ", color: "#e67e22" },
                    { char: "தொ", color: "#1abc9c" },
                    { char: "நொ", color: "#ff6b81" },
                    { char: "பொ", color: "#34495e" },
                    { char: "மொ", color: "#16a085" },
                    { char: "யொ", color: "#c0392b" },
                    { char: "ரொ", color: "#8e44ad" },
                    { char: "லொ", color: "#e74c3c" },
                    { char: "வொ", color: "#2ecc71" },
                    { char: "ழொ", color: "#3498db" },
                    { char: "ளொ", color: "#9b59b6" },
                    { char: "றொ", color: "#f1c40f" },
                    { char: "னொ", color: "#e67e22" }
                ]
            },
            {
                heading: "ஓ-ஒலி எழுத்துக்கள்",
                letters: [
                    { char: "கோ", color: "#e74c3c" },
                    { char: "ஙோ", color: "#2ecc71" },
                    { char: "சோ", color: "#3498db" },
                    { char: "ஞோ", color: "#9b59b6" },
                    { char: "டோ", color: "#f1c40f" },
                    { char: "ணோ", color: "#e67e22" },
                    { char: "தோ", color: "#1abc9c" },
                    { char: "நோ", color: "#ff6b81" },
                    { char: "போ", color: "#34495e" },
                    { char: "மோ", color: "#16a085" },
                    { char: "யோ", color: "#c0392b" },
                    { char: "ரோ", color: "#8e44ad" },
                    { char: "லோ", color: "#e74c3c" },
                    { char: "வோ", color: "#2ecc71" },
                    { char: "ழோ", color: "#3498db" },
                    { char: "ளோ", color: "#9b59b6" },
                    { char: "றோ", color: "#f1c40f" },
                    { char: "னோ", color: "#e67e22" }
                ]
            },
            {
                heading: "ஔ-ஒலி எழுத்துக்கள்",
                letters: [
                    { char: "கௌ", color: "#e74c3c" },
                    { char: "ஙௌ", color: "#2ecc71" },
                    { char: "சௌ", color: "#3498db" },
                    { char: "ஞௌ", color: "#9b59b6" },
                    { char: "டௌ", color: "#f1c40f" },
                    { char: "ணௌ", color: "#e67e22" },
                    { char: "தௌ", color: "#1abc9c" },
                    { char: "நௌ", color: "#ff6b81" },
                    { char: "பௌ", color: "#34495e" },
                    { char: "மௌ", color: "#16a085" },
                    { char: "யௌ", color: "#c0392b" },
                    { char: "ரௌ", color: "#8e44ad" },
                    { char: "லௌ", color: "#e74c3c" },
                    { char: "வௌ", color: "#2ecc71" },
                    { char: "ழௌ", color: "#3498db" },
                    { char: "ளௌ", color: "#9b59b6" },
                    { char: "றௌ", color: "#f1c40f" },
                    { char: "னௌ", color: "#e67e22" }
                ]
            }
            ]
    } ;

    return (
        <DisplayPort letterDefinition={letterDefinition} />
    );

};

export default UyirMei;