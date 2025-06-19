import React, { useContext, useRef, useState, useEffect } from 'react';
import { Menubar } from 'primereact/menubar';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';
import { OverlayPanel } from 'primereact/overlaypanel';
import { ThemeContext } from 'components/ThemeProvider/ThemeContext';

const TopNavBar = () => {
  const { theme, changeTheme } = useContext(ThemeContext);
  const overlayRef = useRef(null);
  const [icon, setIcon] = useState('pi-sun');
  const navigate = useNavigate();

  useEffect(() => {
    const stored = localStorage.getItem('theme') || 'lara-light-blue';
    setIcon(stored === 'lara-dark-blue' ? 'pi-sun' : 'pi-moon');
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'lara-dark-blue' ? 'lara-light-blue' : 'lara-dark-blue';
    changeTheme(newTheme);
    setIcon(newTheme === 'lara-dark-blue' ? 'pi-sun' : 'pi-moon');
  };

  const start = <div className="text-xl font-bold px-3">தமிழ்</div>;

  const end = (
    <>
      <Button
            icon={`pi ${icon}`}
            className="p-button-rounded p-button-text"
            onClick={toggleTheme}
          />
      <Button
        icon="pi pi-home"
        className="p-button-text"
        onClick={(e) => navigate('/')}
      />
      <Button
        icon="pi pi-cog"
        className="p-button-text"
        onClick={(e) => overlayRef.current.toggle(e)}
      />
      <OverlayPanel ref={overlayRef} dismissable>
        <div className="flex justify-content-center p-2">
          
        </div>
      </OverlayPanel>
    </>
  );

  return (
    <Menubar start={start} end={end} />
  );
};

export default TopNavBar;
