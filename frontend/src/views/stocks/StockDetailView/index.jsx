/* eslint-disable react-hooks/rules-of-hooks */
import React, { useCallback, useEffect, useState } from 'react';
import { useMatch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Grid, makeStyles } from '@material-ui/core';
import Page from 'src/components/Page';
import { useRequest } from 'src/utils/useRequest';
import { getStockById, GET_STOCK } from 'src/modules/stock';
import useForm from 'src/utils/useForm';
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
  const { form, onChange } = useForm();

  console.log('form', form);
  console.log('stock', stock);

  useEffect(() => {
    dispatch(getStockById(id));
  }, []);

  if (loading) return null;

  return (
    <Page
      className={classes.root}
      title={`${stock.pin} | ${stock.name || '새로운 재고'}`}
    >
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xl={12}>
            <StockDetailOut
              stock={stock}
              isInStock={form.inStock}
              handleChange={onChange}
            />
          </Grid>
          <Grid item xl={12}>
            <StockDetailIn stock={stock} handleChange={onChange} />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
};

export default React.memo(StockDetailView);
