import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import clsx from 'clsx';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Button,
  Box,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  makeStyles
} from '@material-ui/core';
import { getStocks, GET_STOCKS } from 'src/modules/stocks';
import useSearchQuery from 'src/utils/useSearchQuery';
import { useRequest } from 'src/utils/useRequest';
import Loader from 'src/components/Loader';
import { resetAllSearchQueries } from 'src/modules/searchQuery';
import StockListItem from './StockListItem';

const useStyles = makeStyles((theme) => ({
  root: {},
  avatar: {
    marginRight: theme.spacing(2)
  },
  table: {
    overflowY: 'scroll',
    touchAction: 'none'
  }
}));

const StocksList = ({ className, ...rest }) => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const {
    pagination: { page, limit },
    onChangePage,
    onChangeLimit
  } = useSearchQuery();
  const {
    loading,
    data: { stocks, count }
  } = useRequest(GET_STOCKS, 'stocks');

  const handleLimitChange = (e) => {
    const { value } = e.target;
    onChangeLimit(value);
    onChangePage(0);
  };

  const handlePageChange = (e, newPage) => {
    onChangePage(newPage);
  };

  // 근데 이러면 나중에 뒤로가기 캐싱에 문제 생기는데
  // searchQuery 객체가 비어있을 때만 수행하도록?
  useEffect(() => {
    dispatch(resetAllSearchQueries());
  }, []);

  useEffect(() => {
    dispatch(getStocks());
  }, [page, limit]);

  if (loading) return <Loader />;

  return (
    <>
      <Card className={clsx(classes.root, className)} {...rest}>
        <TablePagination
          component="div"
          count={count}
          onChangePage={handlePageChange}
          onChangeRowsPerPage={handleLimitChange}
          page={page}
          rowsPerPage={limit}
          rowsPerPageOptions={[100, 200, 500]}
          labelRowsPerPage="페이지당 재고"
        />
        <PerfectScrollbar>
          <Box minWidth={1050}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell> </TableCell>
                  <TableCell>상태</TableCell>
                  <TableCell>품번</TableCell>
                  <TableCell>일련번호</TableCell>
                  <TableCell>제품명</TableCell>
                  <TableCell>총 구매 가격</TableCell>
                  <TableCell>입고날짜</TableCell>
                </TableRow>
              </TableHead>
              <TableBody className={classes.table}>
                {stocks.map((stock) => (
                  <StockListItem key={stock._id} stock={stock} />
                ))}
              </TableBody>
            </Table>
          </Box>
        </PerfectScrollbar>
      </Card>
    </>
  );
};

export default React.memo(StocksList);
