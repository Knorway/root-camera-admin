import React from 'react';
import { useNavigate } from 'react-router-dom';
import clsx from 'clsx';
import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
import {
  Box,
  Button,
  Card,
  CardHeader,
  Chip,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Tooltip,
  makeStyles
} from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ChevronRight';
import { setStatusColor } from 'src/utils/lib';

const useStyles = makeStyles(() => ({
  root: {},
  actions: {
    justifyContent: 'flex-end'
  }
}));

const LatestOrders = ({ className, recent, ...rest }) => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <CardHeader title="최근 추가된 재고" />
      <Divider />
      <PerfectScrollbar>
        <Box minWidth={800}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>재고명</TableCell>
                <TableCell>품번</TableCell>
                <TableCell>구매처</TableCell>
                <TableCell sortDirection="desc">
                  <Tooltip enterDelay={300} title="Sort">
                    <TableSortLabel active direction="desc">
                      구매 날짜
                    </TableSortLabel>
                  </Tooltip>
                </TableCell>
                <TableCell>상태</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {recent.map((order) => (
                <TableRow hover key={order._id}>
                  <TableCell>{order.name}</TableCell>
                  <TableCell
                    style={{ color: '#4c4faf', cursor: 'pointer' }}
                    onClick={() => navigate(`/app/stocks/${order._id}`)}
                  >
                    {order.pin}
                  </TableCell>
                  <TableCell>{order.purchasedFrom}</TableCell>
                  <TableCell>
                    {moment(order.createdAt).format('DD/MM/YYYY')}
                  </TableCell>
                  <TableCell>
                    <Chip
                      style={{
                        background: setStatusColor(order.status),
                        fontSize: '12px'
                      }}
                      // style={{ background: 'red' }}
                      label={order.status ? order.status : '입고대기'}
                      size="small"
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <Box display="flex" justifyContent="flex-end" p={2}>
        <Button
          color="primary"
          endIcon={<ArrowRightIcon color="primary" />}
          size="small"
          variant="text"
          onClick={() => {
            navigate('/app/stocks');
          }}
        >
          전체 보기
        </Button>
      </Box>
    </Card>
  );
};

LatestOrders.propTypes = {
  className: PropTypes.string
};

export default LatestOrders;
