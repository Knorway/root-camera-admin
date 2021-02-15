import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  SvgIcon,
  makeStyles
} from '@material-ui/core';
import { Search as SearchIcon } from 'react-feather';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { stackNewStocks } from 'src/modules/stocks';

const useStyles = makeStyles((theme) => ({
  root: {},
  importButton: {
    marginRight: theme.spacing(1)
  },
  exportButton: {
    marginRight: theme.spacing(1)
  }
}));

const Toolbar = ({ className, ...rest }) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onClick = async () => {
    try {
      const { data } = await axios.post('/api/stocks');
      dispatch(stackNewStocks(data));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Box display="flex" justifyContent="flex-end">
        {/* <Button className={classes.importButton}>
          Import
        </Button> */}
        {/* <Button className={classes.exportButton}>엑셀 파일로 추출</Button> */}
        <Button
          color="primary"
          variant="contained"
          className={classes.exportButton}
        >
          저장
        </Button>
        <Button color="primary" variant="contained" onClick={onClick}>
          재고 추가
        </Button>
      </Box>
      <Box mt={3}>
        <Card>
          <CardContent>
            <Box maxWidth={500}>
              <TextField
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SvgIcon fontSize="small" color="action">
                        <SearchIcon />
                      </SvgIcon>
                    </InputAdornment>
                  )
                }}
                placeholder="Search customer"
                variant="outlined"
              />
            </Box>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
};

Toolbar.propTypes = {
  className: PropTypes.string
};

export default Toolbar;
