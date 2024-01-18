/* eslint-disable react/prop-types */
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Container, Box } from '@mui/system';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
const BoxComponent = ({ text }) => (
  <Box
    sx={{
      height: '40px',
      width: '100%', // Set width to 100%
      border: '2px solid #1976D2',
      borderRadius: '8px',
      marginTop: '30px', // Adjusted margin bottom
      textAlign: 'left', // Align text to the left
      paddingLeft: '10px', // Add left padding
    }}
  >
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '100%' }}>
      <span style={{  fontSize: '16px' }}>{text}</span>
      <ArrowDropDownOutlinedIcon />
    </div>
  </Box>
);

export default function FAQContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md" style={{ marginLeft: 50, marginBottom: 300, marginTop: 100 }}>
        <p style={{ fontSize: '32px', fontWeight: 'bold' }}>FAQ</p>
        <BoxComponent text="Can education flashcards be used for all age groups?" />
        <BoxComponent text="How do education flashcards work?" />
        <BoxComponent text="Can education flashcards be used for test preparation?" />
      </Container>
    </React.Fragment>
  );
}
