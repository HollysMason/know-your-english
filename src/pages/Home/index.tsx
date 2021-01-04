import React from 'react';
import { Box, Typography, Button } from '@material-ui/core'
import { Link } from 'react-router-dom';

const Home: React.FC = () => (
    <Box pt={5} display='flex' flexDirection='column'>
        <Typography align="center" variant="h1">
            Welcome to _ <br /> Know Your English
        </Typography>
        <Box textAlign="center">
            <Button
                component={Link}
                to='/lists'
                variant="contained"
            >
                Lists
             </Button>
        </Box>
    </Box>
)

export default Home;