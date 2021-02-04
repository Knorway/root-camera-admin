import React, { useEffect } from 'react';
import { useMatch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Container, Grid, makeStyles } from '@material-ui/core';
import Page from 'src/components/Page';
import { useRequest } from 'src/utils/useRequest';
import { getStockById, GET_STOCK } from 'src/modules/stock';
import isEmpty from 'src/utils/isEmpty';
import StockDetailIn from './StockDetailIn';
import StockDetailOut from './StockDetailOut';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const StockDetailView = () => {
  const classes = useStyles();
  const { id } = useMatch('/app/stocks/:id').params;

  const dispatch = useDispatch();
  const { loading, data: stock, error } = useRequest(GET_STOCK, 'stock');

  useEffect(() => {
    dispatch(getStockById(id));
  }, []);

  // if (isEmpty(stock, [])) return null;
  if (loading) return null;

  return (
    <Page className={classes.root} title={`${stock.pin} | ${stock.name}`}>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xl={12}>
            <StockDetailIn stock={stock} />
          </Grid>
          <Grid item xl={12}>
            <StockDetailOut stock={stock} />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
};

export default StockDetailView;
