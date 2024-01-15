import React, { useState } from 'react';
import { Container, Grid, Button, Box, Select, MenuItem, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import data from './EngagementTeamSection.json';
import data1 from './EngagementTeamSection1.json';
import data2 from './EngagementTeamSection2.json';
import data3 from './EngagementTeamSection3.json';
import EngageTeamSection from './EngageTeamSection';

const TabButtons = ({ tab1, tab2, tab3 }) => {
  const [activeTab, setActiveTab] = useState(tab1);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const getEngageTeamSectionData = (tabKey) => {
    let item = data.find(item => item.key === tabKey) ||
                data1.find(item => item.key === tabKey) ||
                data2.find(item => item.key === tabKey) ||
                data3.find(item => item.key === tabKey);
    return item;
  };

  const buttonStyle = (isActive) => ({
    width: '100%',
    justifyContent: 'center',
    textTransform: 'none',
    fontWeight: 'bold',
    fontSize: '1rem',
    borderBottom: isActive ? '2px solid blue' : 'none',
    borderRadius: 0,
    color: isActive ? 'black' : 'grey',
  });

  const handleChange = (event) => {
    setActiveTab(event.target.value);
  };

  const renderTabs = () => (
    <Grid container spacing={2} alignItems="center" justifyContent="center">
      <Grid item xs={4}>
        <Button sx={buttonStyle(activeTab === tab1)} onClick={() => setActiveTab(tab1)}>
          {tab1}
        </Button>
      </Grid>
      <Grid item xs={4}>
        <Button sx={buttonStyle(activeTab === tab2)} onClick={() => setActiveTab(tab2)}>
          {tab2}
        </Button>
      </Grid>
      <Grid item xs={4}>
        <Button sx={buttonStyle(activeTab === tab3)} onClick={() => setActiveTab(tab3)}>
          {tab3}
        </Button>
      </Grid>
    </Grid>
  );

  const renderDropdown = () => (
    <Select
    value={activeTab}
    onChange={handleChange}
    displayEmpty
    fullWidth
    variant="outlined"
    sx={{
      '& .MuiOutlinedInput-notchedOutline': {
        border: 'none',
      },
      '& .MuiSelect-select': {
        py: 1, // Padding Y
        px: 2, // Padding X
        typography: 'button',
        textTransform: 'none',
        fontWeight: 'bold',
        fontSize: '1rem',
        justifyContent: 'center',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'white',
        '&:focus': {
          backgroundColor: 'white',
        },
      },
      '& .MuiSelect-icon': {
        color: 'black', // You can adjust the color
      },
    }}
  >
    <MenuItem value={tab1}>{tab1}</MenuItem>
    <MenuItem value={tab2}>{tab2}</MenuItem>
    <MenuItem value={tab3}>{tab3}</MenuItem>
  </Select>

  );

  const renderEngageTeamSection = () => {
    const sectionData = getEngageTeamSectionData(activeTab);
    if (sectionData) {
      return (
        <EngageTeamSection
          heading={sectionData.heading}
          image={sectionData.image}
          description={sectionData.description}
          description1={sectionData.description1}
          description2={sectionData.description2}
          heading1={sectionData.heading1}
          description3={sectionData.description3}
          description4={sectionData.description4}
        />
      );
    }
    return null;
  };

  return (
    <>
      <Container>
        <Box sx={{ width: '80%', maxWidth: '80%', margin: 'auto', background: "white", mb: '-2', padding: "10px" }}>
          {isMobile ? renderDropdown() : renderTabs()}
        </Box>
      </Container>
      {activeTab && (
        <Container>
          {renderEngageTeamSection()}
        </Container>
      )}
    </>
  );
};

export default TabButtons;
