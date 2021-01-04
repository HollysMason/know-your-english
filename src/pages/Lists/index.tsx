import React, { useEffect } from 'react';
import { Typography, Grid, Card, CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';

import ListCard from '../../components/ListCard';

import { getLists } from '../../store/wordLists/actions';
import { RootState } from '../../store';

const useStyles = makeStyles({
    root: {
        maxWidth: '80%',
        margin: '0 auto',
    }
})

const Lists: React.FC = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const wordLists = useSelector((state: RootState) => state.wordLists);

    useEffect(() => {
        dispatch(getLists())
    }, []);

    return (
        <Grid container spacing={2} className={classes.root}>
            {
                wordLists.map(({ name, createdAt }) => (
                    <ListCard
                        name={name}
                        createdAt={createdAt}
                    />
                ))
            }
        </Grid>
    )
};

export default Lists;