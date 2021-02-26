import React, { useEffect, useRef } from 'react';
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
  makeStyles,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid
} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import SearchIconMUI from '@material-ui/icons/Search';
import { Search as SearchIcon } from 'react-feather';
import { useDispatch } from 'react-redux';
import { getStocks } from 'src/modules/stocks';
import useToolbar from 'src/utils/useToolbar';
import { toDatePickerFormat } from 'src/utils/lib';
import useCreateStock from 'src/utils/useCreateStock';

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
  const inputRef = useRef();
  const classes = useStyles();
  const dispatch = useDispatch();

  const {
    category,
    input,
    handleInput,
    handleChangeCategory,
    handleKeydown,
    handleSave,
    handleChangeDate
  } = useToolbar();

  const { onCreate } = useCreateStock();

  const onClick = async () => {
    onCreate();
  };

  useEffect(() => {
    inputRef.current.focus();
  }, [category]);

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
          onClick={handleSave}
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
            <Grid container>
              <Grid item lg={3}>
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
                  inputRef={inputRef}
                  placeholder="재고 검색"
                  variant="outlined"
                  value={input}
                  onChange={handleInput}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      handleKeydown(() => {
                        dispatch(getStocks());
                      });
                    }
                  }}
                />
              </Grid>
              <Grid item style={{ paddingLeft: 10 }} lg={1}>
                <FormControl
                  variant="outlined"
                  className={classes.formControl}
                  fullWidth
                >
                  <InputLabel id="demo-simple-select-outlined-label">
                    카테고리
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    defaultValue="name"
                    onChange={handleChangeCategory}
                    label="search"
                  >
                    <MenuItem value="name">제품명</MenuItem>
                    <MenuItem value="status">상태</MenuItem>
                    <MenuItem value="pin">품번</MenuItem>
                    <MenuItem value="memo_inStock">메모</MenuItem>
                    <MenuItem value="meta_inStock">비고</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item style={{ paddingLeft: 15 }}>
                <TextField
                  id="date"
                  label="From"
                  type="date"
                  name="dateFrom"
                  className={classes.textField}
                  defaultValue="2021-01-01"
                  InputProps={{
                    style: { fontSize: 14, paddingTop: 9 }
                  }}
                  InputLabelProps={{
                    style: { lineHeight: 1, fontSize: 14 }
                  }}
                  style={{ marginRight: 15 }}
                  onChange={handleChangeDate}
                />
                <TextField
                  id="date"
                  label="To"
                  type="date"
                  name="dateTo"
                  className={classes.textField}
                  defaultValue={toDatePickerFormat(new Date(), {
                    new: true
                  })}
                  InputProps={{
                    style: { fontSize: 14, paddingTop: 9 }
                  }}
                  InputLabelProps={{
                    style: { lineHeight: 1, fontSize: 14 }
                  }}
                  onChange={handleChangeDate}
                />
              </Grid>
              <Grid item xs>
                <Box paddingTop={1} paddingLeft={2}>
                  <IconButton
                    className={classes.iconButton}
                    aria-label="directions"
                    onClick={() => {
                      handleKeydown(() => {
                        dispatch(getStocks());
                      });
                    }}
                  >
                    <SearchIconMUI />
                  </IconButton>
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
};

Toolbar.propTypes = {
  className: PropTypes.string
};

export default React.memo(Toolbar);
