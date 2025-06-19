import LetterTile from 'components/Tile/LetterTile';
import { Accordion, AccordionTab } from 'primereact/accordion';
import React, { useRef, useState } from 'react';

const DisplayPort = (props) => {

        //const uyirLetters = ['அ', 'ஆ', 'இ', 'ஈ', 'உ', 'ஊ', 'எ', 'ஏ', 'ஐ', 'ஒ', 'ஓ', 'ஔ', 'ஃ'];
        const tabRefs = useRef([]);
        const [activeIndex, setActiveIndex] = useState(0);


        const tabs = [];
        props?.letterDefinition?.classification?.forEach(subClass => {
            tabs.push({
                heading: subClass.heading,
                letters: subClass.letters,
                visible: true
            })
        });
        
        const visibleTabs = tabs.filter(tab => tab.visible);

        const handleTabChange = (e) => {
            console.log(e.index)
            setActiveIndex(e.index);
            
            // Scroll the selected tab into view
            const tabKey = visibleTabs[e.index]?.heading;
            const targetRef = tabRefs.current[tabKey];

            if (targetRef?.current) {
                console.log('hello');
                targetRef.current.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        };

        return (
            <div>
                <h1 className="text-center mb-4" style={{fontSize: '5vw'}}>{props.letterDefinition.heading}</h1>

                <div className="grid">
                    <div className="col-1"></div>
                    <div className="col-10">
                        {
                            props.letterDefinition?.classification?.length <= 1 ?  
                                <div className="flex flex-wrap">
                                    {props.letterDefinition?.classification[0].letters.map(({char, color, audio}, idx) => (
                                        <div key={idx} className="flex m-2" style={{width: '20vw', maxWidth: '200px', aspectRatio: '1 / 1'}} >
                                            <LetterTile label={char} color={color} audio={audio}/>
                                        </div>
                                    ))}
                                </div>
                                :
                                <>
                                    <Accordion multiple onTabChange={handleTabChange} activeIndex={activeIndex}> 
                                        {visibleTabs?.map( (tab, idx1) => {
                                                if (!tabRefs.current[tab.heading]) {
                                                    tabRefs.current[tab.heading] = React.createRef();
                                                }

                                                return (
                                                    <AccordionTab header={tab.heading} key={tab.heading}>
                                                        <div className="flex flex-wrap" ref={tabRefs.current[tab.heading]}>
                                                            {
                                                                tab?.letters.map(({char, color}, idx) => (
                                                                    <div key={idx1+'-'+idx} className="flex m-2" style={{width: '20vw', maxWidth: '200px', aspectRatio: '1 / 1'}}>
                                                                        <LetterTile label={char} color={color}/>
                                                                    </div>
                                                                ))
                                                            }
                                                        </div>
                                                    </AccordionTab> );
                                                
                                    })}
                                    </Accordion >
                                </>
                        }
                        
                    </div>
                    <div className="col-1"></div>
                </div>
            </div>
        );

};

export default DisplayPort;