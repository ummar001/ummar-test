
// Notification.tsx
import React, { FunctionComponent, useState } from 'react';
import { BaseLayout } from '@/common/layout';
import {
  Typography,
  Card,
  Select,
  MenuItem,
  Stack,
  TextField,
  Link,
  Button,
} from '@mui/material';
import { useGetStores } from '@/modules/stores/api';
import ToggleSwitch from '../../pages/notifications/components/switch'; // Updated import
import 'react-datepicker/dist/react-datepicker.css'; // Import the styles for react-datepicker
import styles from '../../pages/notifications/components/ToggleSwitch.module.css'; // Corrected import path
import DatePicker from 'react-datepicker'; // Added import for react-datepicker
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

const Notification: FunctionComponent = () => {
  const { data: stores } = useGetStores();
  const [selectedStore, setSelectedStore] = useState<string | undefined>('');
  const [selectedScheme, setSelectedScheme] = useState<string | undefined>('');
  const [lastInteraction, setLastInteraction] = useState<string | undefined>('');
  const [selectedActiveCancelled, setSelectedActiveCancelled] = useState<string | undefined>('');
  const [selectedProductInteraction, setSelectedProductInteraction] = useState<string | undefined>(''); // Updated variable name
  const [sendOption, setSendOption] = useState<string>('now'); // Default to "Send Now"
  const [selectedDate, setSelectedDate] = useState<Date | null>(null); // Updated type

  const handleDateChange = (newValue: Date | null) => {
    setSelectedDate(newValue);
  };

  const handleToggleSwitchChange = (isChecked: boolean) => {
    setSendOption(isChecked ? 'schedule' : 'now');
  };

  const handleActiveCancelledChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSelectedActiveCancelled(event.target.value as string);
    // Handle "Active or Cancelled" selection change here
  };

  const handleStoreChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSelectedStore(event.target.value as string);
    // Additional logic if needed
  };

  const handleSchemeChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSelectedScheme(event.target.value as string);
    // Handle loyalty scheme selection change here
  };

  const handleLastInteractionChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setLastInteraction(event.target.value as string);
    // Handle last interaction selection change here
  };

  const handleProductInteractionChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSelectedProductInteraction(event.target.value as string);
    // Handle product interaction selection change here
  };

  return (
    <BaseLayout pageName={'Notifications'}>
      <Stack flexDirection="column" gap={4} width="100%" padding={2}>
        <Stack flexDirection="column" alignItems="flex-start">
          <Typography variant="h5" fontWeight="bold" mb={0.5}>
            Create a push Notification
          </Typography>
          <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>
            Back
          </Link>
        </Stack>

        <Card style={{ padding: '30px', borderRadius: '20px' }}>
          <Stack
            flexDirection={{ xs: 'column', sm: 'row' }}
            gap={4}
            alignItems="center"
          >
            <Stack width={{ xs: '100%', sm: '50%' }}>
              <Typography
                variant="h6"
                color="textPrimary"
                fontWeight="bold"
                marginBottom={1}
              >
                Which of your stores are you setting this up for?
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                Select a store
              </Typography>
              <Select
                onChange={handleStoreChange}
                value={selectedStore}
                sx={{
                  width: '75%',
                  borderRadius: 10,
                  marginTop: 1.5,
                  backgroundColor: '#F7F7F7',
                  color: 'white',
                  fontSize: 16,
                  border: 'none',
                  outline: 'none',
                }}
              >
                <MenuItem value="" disabled></MenuItem>
                <MenuItem value="all">All Stores</MenuItem>
                {stores &&
                  stores.map((store) => (
                    <MenuItem key={store.id} value={store.id}>
                      {store.name}
                    </MenuItem>
                  ))}
              </Select>
            </Stack>

            <Stack width={{ xs: '100%', sm: '50%' }} marginTop={{  sm: 4 }}>
              <Typography variant="subtitle1" color="textSecondary">
                Select loyalty system
              </Typography>
              <Select
                onChange={handleSchemeChange}
                value={selectedScheme}
                sx={{
                  width: '75%',
                  borderRadius: 10,
                  marginTop: 1.5,
                  backgroundColor: '#F7F7F7',
                  color: 'white',
                  fontSize: 16,
                  border: 'none',
                  outline: 'none',
                }}
              >
                <MenuItem value="" disabled></MenuItem>
                <MenuItem value="stamps">Stamps</MenuItem>
                <MenuItem value="points">Points</MenuItem>
                {/* Add other scheme options as needed */}
              </Select>
            </Stack>
          </Stack>
        </Card>

        <Card
          style={{
            paddingLeft: '20px',
            paddingRight: '20px',
            paddingTop: '40px',
            paddingBottom: '40px',
            borderRadius: '20px',
          }}
        >
          <Stack>
            <Typography
              variant="h6"
              color="textPrimary"
              fontWeight="bold"
              marginBottom={1}
            >
              What's your message?
            </Typography>
            <Typography variant="h8" color="textPrimary" marginBottom={1}>
              Remember smartphone users will only be able to see the first 40
              characters of your message on their home screen, so keep it short
              and to the point.
            </Typography>
            <TextField
              fullWidth
              multiline
              rows={4}
              variant="outlined"
              placeholder="Type your message here..."
            />
          </Stack>
        </Card>

        <Card
          style={{
            paddingLeft: '10px',
            paddingRight: '10px',
            paddingTop: '40px',
            paddingBottom: '25px',
            borderRadius: '20px',
          }}
        >
          <Stack>
            <Typography
              variant="h6"
              color="textPrimary"
              fontWeight="bold"
              marginBottom={1}
            >
              Where does the notification take the user?
            </Typography>
            <Typography variant="h8" color="textPrimary" marginBottom={1}>
              Choose where your user will go in the Waycup app when they click
              on the notification you send.
            </Typography>
            <Stack width={{}}>
              <Typography variant="subtitle1" color="textSecondary">
                Choose a route
              </Typography>
              <Select
                onChange={handleProductInteractionChange}
                value={selectedProductInteraction}
                sx={{
                  width: '100%',
                  borderRadius: 10,
                  marginTop: 1.5,
                  marginBottom: 1.5,
                  backgroundColor: '#F7F7F7',
                  color: 'white',
                  fontSize: 16,
                  border: 'none',
                  outline: 'none',
                }}
              >
                <MenuItem value="" disabled></MenuItem>
                <MenuItem value="all">All Stores</MenuItem>
                {stores &&
                  stores.map((store) => (
                    <MenuItem key={store.id} value={store.id}>
                      {store.name}
                    </MenuItem>
                  ))}
              </Select>
            </Stack>
          </Stack>
        </Card>

        <Card style={{ padding: '30px', borderRadius: '20px' }} >
          <Stack>
            <Typography
              variant="h6"
              color="textPrimary"
              fontWeight="bold"
              marginBottom={1}
            >
              Define your audience
            </Typography>
            {/* Add audience definition controls/components */}
            <Stack direction={{ xs: 'column', sm: 'row' }} gap={4} width="100%">
              <Stack width={{ xs: '100%', sm: '50%' }}>
                <Typography variant="subtitle1" color="textSecondary">
                  Last Interaction
                </Typography>
                <Select
                  onChange={handleLastInteractionChange}
                  value={lastInteraction}
                  sx={{
                    width: '100%',
                    borderRadius: 10,
                    marginTop: 1.5,
                    marginBottom: 1.5,
                    backgroundColor: '#F7F7F7',
                    color: 'white',
                    fontSize: 16,
                    border: 'none',
                    outline: 'none',
                  }}
                >
                  <MenuItem value="" disabled>
                    Select last interaction
                  </MenuItem>
                  <MenuItem value="last30days">Last 30 days</MenuItem>
                  <MenuItem value="lasttwoweeks">Last two weeks</MenuItem>
                  <MenuItem value="last6months">Last 6 months</MenuItem>
                </Select>
              </Stack>

              <Stack width={{ xs: '100%', sm: '50%' }}>
                <Typography variant="subtitle1" color="textSecondary">
                  Active or Cancelled
                </Typography>
                <Select
                  onChange={handleActiveCancelledChange}
                  value={selectedActiveCancelled}
                  sx={{
                    width: '100%',
                    borderRadius: 10,
                    marginTop: 1.5,
                    marginBottom: 1.5,
                    backgroundColor: '#F7F7F7',
                    color: 'white',
                    fontSize: 16,
                    border: 'none',
                    outline: 'none',
                  }}
                >
                  <MenuItem value="" disabled></MenuItem>
                  <MenuItem value="active">Active</MenuItem>
                  <MenuItem value="cancelled">Cancelled</MenuItem>
                </Select>
              </Stack>
            </Stack>
            <Stack width={{}}>
              <Typography variant="subtitle1" color="textSecondary">
                Product interaction
              </Typography>
              <Select
                onChange={handleProductInteractionChange}
                value={selectedProductInteraction}
                sx={{
                  width: '100%',
                  borderRadius: 10,
                  marginTop: 1.5,
                  marginBottom: 1.5,
                  backgroundColor: '#F7F7F7',
                  color: 'white',
                  fontSize: 16,
                  border: 'none',
                  outline: 'none',
                }}
              >
                <MenuItem value="" disabled></MenuItem>
                <MenuItem value="all">All Stores</MenuItem>
                {stores &&
                  stores.map((store) => (
                    <MenuItem key={store.id} value={store.id}>
                      {store.name}
                    </MenuItem>
                  ))}
              </Select>
            </Stack>
          </Stack>
        </Card>
        <Stack direction={{ xs: 'column', sm: 'row',  }} gap={4} justifyContent={'flex-end'} sx={{ marginBottom: 1 }}  >
          <Stack width={{ xs: '100%', sm: 'auto' }} gap={2}>
            <Typography variant="subtitle1" color="textSecondary" sx={{ marginTop: -1 }}>
            Send Now or Schedule 
            </Typography>
            <ToggleSwitch onToggle={handleToggleSwitchChange} />
          </Stack>

          <Stack width={{ xs: '100%', sm: 'auto' }} gap={2}>
            {sendOption === 'schedule' && (
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Stack>
                  <Typography variant="subtitle1" sx={{ marginTop: 3 }}>
                    Select Date and Time
                  </Typography>
                  <DatePicker
                    selected={selectedDate}
                    onChange={(date: Date | null) => handleDateChange(date)}
                    showTimeSelect
                    timeFormat="HH:mm"
                    timeIntervals={15}
                    dateFormat="MMMM d, yyyy h:mm aa"
                  />
                </Stack>
              </LocalizationProvider>
            )}
          </Stack>

          <Stack width={{ xs: '100%', sm: 'auto' }} gap={2}>
            <Button
              variant="contained"
              sx={{
                marginTop: { xs: 2, sm: 3 },
                marginBottom: 8,
              }}
            >
              {sendOption === 'now' ? 'Send Now' : 'Schedule'}
            </Button>
          </Stack>
        </Stack>

      </Stack>
    </BaseLayout>
  );
};

export default Notification;