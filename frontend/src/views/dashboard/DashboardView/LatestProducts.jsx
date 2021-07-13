import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  Card,
  CardHeader,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  makeStyles
} from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ArrowRightIcon from '@material-ui/icons/ChevronRight';

const useStyles = makeStyles({
  root: {
    height: '100%'
  },
  image: {
    height: 48,
    width: 48
  }
});

const LatestProducts = ({ className, recent, ...rest }) => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <CardHeader
        subtitle={`${recent.length} in total`}
        title="최근 판매된 상품"
      />
      <Divider />
      <List>
        {recent.map((stock, i) => (
          <ListItem divider={i < recent.length - 1} key={stock._id}>
            <ListItemAvatar>
              <img
                alt="Product"
                className={classes.image}
                src={stock.imageUrl}
                style={{ display: 'none' }}
              />
            </ListItemAvatar>
            <ListItemText
              primary={stock.name}
              secondary={`판매 날짜 ${stock.createdAt.substring(0, 10)}`}
            />
            <IconButton edge="end" size="small">
              <ArrowRightIcon
                color="primary"
                onClick={() => navigate(`/app/stocks/${stock._id}`)}
              />
              {/* <MoreVertIcon /> */}
            </IconButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <Box display="flex" justifyContent="flex-end" p={2}>
        <Button
          color="primary"
          endIcon={<ArrowRightIcon color="primary" />}
          size="small"
          variant="text"
          onClick={() => {
            navigate('/app/sales');
          }}
        >
          전체 보기
        </Button>
      </Box>
    </Card>
  );
};

LatestProducts.propTypes = {
  className: PropTypes.string
};

export default LatestProducts;
