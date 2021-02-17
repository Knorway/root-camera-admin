import React, { useEffect, useState } from 'react';
import { Box, Container, makeStyles } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { clearStack } from 'src/modules/editedStocks';
import Page from 'src/components/Page';
import StocksList from './StocksList';
import Toolbar from './Toolbar';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const StockListView = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearStack());
  }, []);

  return (
    <Page className={classes.root} title="재고">
      <Container maxWidth={false}>
        <Toolbar />
        <Box mt={3}>
          <StocksList />
        </Box>
      </Container>
    </Page>
  );
};

export default StockListView;
