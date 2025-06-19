import React, { useContext, useState } from 'react';
import { SelectButton } from 'primereact/selectbutton';
import { ThemeContext } from 'components/ThemeProvider/ThemeContext';


const themeOptions = [
  { label: '🌞 Light', value: 'lara-light-blue' },
  { label: '🌙 Dark', value: 'lara-dark-blue' },
];

const SettingsPage = () => {
  const { theme, changeTheme } = useContext(ThemeContext);
  const [selected, setSelected] = useState(theme);

  const handleChange = (e) => {
    setSelected(e.value);
    changeTheme(e.value);
  };

  return (
    <div className="flex justify-content-center align-items-center min-h-screen">
      <div className="card">
        <h2>Display Mode</h2>
        <SelectButton
          value={selected}
          options={themeOptions}
          onChange={handleChange}
          optionLabel="label"
        />
      </div>
    </div>
  );
};

export default SettingsPage;
