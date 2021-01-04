import React from 'react';
import { Typography, Box, Grid, Card, CardContent, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { Link } from 'react-router-dom';

interface ListCardProps {
    name: string,
    createdAt: string,
}

const ListCard: React.FC<ListCardProps> = ({ name, createdAt }) => {
    return (
        <Grid item xs={12} key={name}>
            <Card>
                <CardContent>
                    <Box display='flex'>
                        <Box flexGrow={1}>
                            <Typography variant="h5" component="h2">
                                <Link to={`/list/${name}`}>
                                    {name}
                                </Link>
                            </Typography>
                            <Typography color="textSecondary">
                                {createdAt}
                            </Typography>
                        </Box>
                        <Box>
                            <IconButton aria-label="delete">
                                <DeleteIcon />
                            </IconButton>
                        </Box>
                    </Box>
                </CardContent>
            </Card>
        </Grid>
    );
}

export default ListCard;