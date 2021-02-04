import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Button,
  Avatar,
  Box,
  Card,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
  makeStyles
} from '@material-ui/core';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import getInitials from 'src/utils/getInitials';
import { Link } from 'react-router-dom';
import { getStocks, GET_STOCKS } from 'src/modules/stocks';
import { useRequest } from 'src/utils/useRequest';
import Loader from 'src/components/Loader';

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

const StocksList = ({ className, customers, ...rest }) => {
  const classes = useStyles();
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);

  const dispatch = useDispatch();
  const { loading, data: stocks, error } = useRequest(GET_STOCKS, 'stocks');

  useEffect(() => {
    dispatch(getStocks());
  }, []);

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  const setStatusColor = (status) => {
    if (status === '수리') {
      return '#6ec492';
    }

    if (status === '분실') {
      return '#fbedf0';
    }

    if (status === '입고대기') {
      return '#fae195';
    }

    return '';
  };

  // if (loading) return null;
  if (loading) return <Loader />;

  return (
    <>
      <Card className={clsx(classes.root, className)} {...rest}>
        <PerfectScrollbar>
          <Box minWidth={1050}>
            <Table>
              <TableHead>
                <TableRow>
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
                  <TableRow
                    key={stock._id}
                    style={{
                      backgroundColor: `${setStatusColor(stock.status)}`
                    }}
                  >
                    <TableCell>{stock.status || '재고 있음'}</TableCell>
                    <TableCell>
                      <Link to={`/app/stocks/${stock._id}`}>{stock.pin}</Link>
                    </TableCell>
                    <TableCell>{stock.serialNumber}</TableCell>
                    <TableCell>{stock.name}</TableCell>
                    <TableCell>{`${stock.purchasedForKRW}원`}</TableCell>
                    <TableCell>{stock.stockedAt.substring(0, 10)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Box>
        </PerfectScrollbar>
        <TablePagination
          component="div"
          count={customers.length}
          onChangePage={handlePageChange}
          onChangeRowsPerPage={handleLimitChange}
          page={page}
          rowsPerPage={limit}
          rowsPerPageOptions={[5, 10, 25]}
        />
      </Card>
      <Button color="primary" variant="contained">
        저장
      </Button>
    </>
  );
};

StocksList.propTypes = {
  className: PropTypes.string,
  customers: PropTypes.array.isRequired
};

export default StocksList;
