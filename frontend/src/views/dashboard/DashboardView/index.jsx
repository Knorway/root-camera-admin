import { Container, Grid, makeStyles } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Loader from 'src/components/Loader';
import Page from 'src/components/Page';
import LatestOrders from './LatestOrders';
import LatestProducts from './LatestProducts';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const Dashboard = () => {
  const [recentData, setRecentData] = useState(null);
  const classes = useStyles();

  useEffect(() => {
    axios.get('/api/stats').then((res) => setRecentData(res.data));
  }, []);

  if (!recentData) return <Loader view="main" />;

  return (
    <Page className={classes.root} title="루트 어드민">
      <Container maxWidth={false}>
        <Grid container spacing={3}>
          <Grid item lg={4} md={6} xl={3} xs={12}>
            <LatestProducts recent={recentData.recentSales} />
          </Grid>
          <Grid item lg={8} md={12} xl={9} xs={12}>
            <LatestOrders recent={recentData.recentStocks} />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
};

export default Dashboard;
