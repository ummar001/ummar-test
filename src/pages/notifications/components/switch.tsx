// ToggleSwitch.tsx
import React, { useState } from 'react';
import styles from '../components/Switch.module.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import TextField from '@mui/material/TextField';

const ToggleSwitch = ({ onToggle }: { onToggle: (isChecked: boolean) => void }) => {
  const [isSwitchChecked, setSwitchChecked] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleToggle = () => {
    setSwitchChecked(!isSwitchChecked);
    onToggle(!isSwitchChecked);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', marginTop: '-10px' }}>
      <div className={`${styles['toggle-switch']} ${isSwitchChecked ? styles.checked : ''}`} onClick={handleToggle}>
        <div className={styles['switch-handle']}></div>
      </div>
      {isSwitchChecked && (
        <div className="custom-datepicker-container" style={{ marginLeft: '10px' }}>
          <DatePicker
            selected={selectedDate}
            onChange={(date: Date | null) => setSelectedDate(date)}
            dateFormat="yyyy/MM/dd h:mm aa"
            showTimeInput
            customInput={<StyledTextField placeholder="yyyy/MM/dd - 23:59" />}
          />
        </div>
      )}
    </div>
  );
};

// Define a custom styled TextField component
const StyledTextField = ({ value, onClick, placeholder }: { value?: string; onClick?: () => void; placeholder?: string }) => (
  <TextField
    value={value}
    onClick={onClick}
    style={{
      backgroundColor: '#ECEEF1',
      border: '1px solid gray',
      borderRadius: '60px',
      borderColor: '#ECEEF1',
      marginTop: '-10px',
      width: '100%',
      height: '75%',
      paddingLeft: '15px', // Add left padding to make room for the placeholder
    }}
    InputProps={{ placeholder: placeholder }}
  />
);

export default ToggleSwitch;
