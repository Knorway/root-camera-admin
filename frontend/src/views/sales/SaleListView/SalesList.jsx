import React, { useEffect, useState } from 'react';
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
import { useRequest } from 'src/utils/useRequest';
import { GET_SALES } from 'src/modules/sales';
import Loader from 'src/components/Loader';
import useSearchQuery from 'src/utils/useSearchQuery';
import { resetAllSearchQueries } from 'src/modules/searchQuery';
import { getSales } from '../../../modules/sales';
import SalesListItem from './SalesListItem';

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

const SalesList = ({ className, ...rest }) => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const {
    pagination: { page, limit },
    onChangePage,
    onChangeLimit
  } = useSearchQuery();
  const {
    loading,
    data: { sales, count }
  } = useRequest(GET_SALES, 'sales');

  const handleLimitChange = (e) => {
    const { value } = e.target;
    onChangeLimit(value);
    onChangePage(0);
  };

  const handlePageChange = (e, newPage) => {
    onChangePage(newPage);
  };

  useEffect(() => {
    dispatch(resetAllSearchQueries());
  }, []);

  useEffect(() => {
    dispatch(getSales());
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
          labelRowsPerPage="페이지당 판매"
        />
        <PerfectScrollbar>
          <Box minWidth={1050}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell> </TableCell>
                  {/* <TableCell>상태</TableCell> */}
                  <TableCell>품번</TableCell>
                  <TableCell>일련번호</TableCell>
                  <TableCell>제품명</TableCell>
                  <TableCell>판매가격</TableCell>
                  <TableCell>판매날짜</TableCell>
                </TableRow>
              </TableHead>
              <TableBody className={classes.table}>
                {sales.map((stock) => (
                  <SalesListItem key={stock._id} stock={stock} />
                ))}
              </TableBody>
            </Table>
          </Box>
        </PerfectScrollbar>
      </Card>
    </>
  );
};

export default SalesList;
