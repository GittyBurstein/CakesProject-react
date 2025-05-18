import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Rating from '@mui/material/Rating';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';

const StyledRating = styled(Rating)(({ theme }) => ({
  '& .MuiRating-iconEmpty .MuiSvgIcon-root': {
    color: theme.palette.action.disabled,
  },
}));

const customIcons = {
  1: { icon: <SentimentVeryDissatisfiedIcon sx={{ color: '#f8b7c0  ' }} />, label: 'Very Dissatisfied' },
  2: { icon: <SentimentDissatisfiedIcon sx={{ color: '#ffd3b6  ' }} />, label: 'Dissatisfied' },
  3: { icon: <SentimentSatisfiedIcon sx={{ color: '#fff9b0' }} />, label: 'Neutral' },
  4: { icon: <SentimentSatisfiedAltIcon sx={{ color: '#c1f7c0' }} />, label: 'Satisfied' },
  5: { icon: <SentimentVerySatisfiedIcon sx={{ color: '#b3e5fc' }} />, label: 'Very Satisfied' },
};
// Custom icon container to display the icons
function IconContainer(props) {
  const { value, ...other } = props;
  return <span {...other}>{customIcons[value].icon}</span>;
}
IconContainer.propTypes = {
  value: PropTypes.number.isRequired,
};

export default function RadioGroupRating({ id }) {
  const storageKey = id ? `userRating-${id}` : 'userRating-default';
  // State to manage the rating value
  const [value, setValue] = React.useState(() => {
    const savedValue = localStorage.getItem(storageKey);
    return savedValue !== null ? Number(savedValue) : 3; // Default to 3 if no value is saved
  });

  // Effect to save the rating value to localStorage whenever it changes
  React.useEffect(() => {
    localStorage.setItem(storageKey, value);
  }, [value, storageKey]);

  return (
    <StyledRating
      name={`highlight-selected-only-${id}`} // Ensures each rating component has a unique name
      value={value}
      IconContainerComponent={IconContainer}
      getLabelText={(value) => customIcons[value].label}
      highlightSelectedOnly
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    />
  );
}