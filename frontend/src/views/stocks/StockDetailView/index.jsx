import React, { useEffect } from 'react';
import { useMatch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Container, Grid, makeStyles } from '@material-ui/core';
import Page from 'src/components/Page';
import { useRequest } from 'src/utils/useRequest';
import useEditedStocks from 'src/utils/useEditedStocks';
import { getStockById, GET_STOCK } from 'src/modules/stock';
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
  const { loading, data: stock } = useRequest(GET_STOCK, 'stock');
  const { initializeNewStack } = useEditedStocks();

  useEffect(() => {
    dispatch(getStockById(id));
  }, []);

  useEffect(() => {
    initializeNewStack(stock);
  }, [stock]);

  // 디테일 리스트에서 나갈 때 리셋, 저장 후 리셋 등

  if (loading) return null;

  return (
    <Page
      className={classes.root}
      title={`${stock.pin} | ${stock.name || '새로운 재고'}`}
    >
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xl={12}>
            <StockDetailOut />
          </Grid>
          <Grid item xl={12}>
            <StockDetailIn />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
};

export default React.memo(StockDetailView);
