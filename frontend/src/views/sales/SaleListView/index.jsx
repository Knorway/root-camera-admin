import React, { useState } from 'react';
import { Box, Container, makeStyles } from '@material-ui/core';
import Page from 'src/components/Page';
import SalesList from './SalesList';
import Toolbar from './Toolbar';
import data from './data';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const SaleListView = () => {
  const classes = useStyles();
  const [customers] = useState(data);

  return (
    <Page className={classes.root} title="판매">
      <Container maxWidth={false}>
        <Toolbar />
        <Box mt={3}>
          <SalesList customers={customers} />
        </Box>
      </Container>
    </Page>
  );
};

export default SaleListView;
