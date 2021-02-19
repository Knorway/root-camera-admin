import React, { useEffect, useRef, useState } from 'react';
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
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  IconButton
} from '@material-ui/core';
import SearchIconMUI from '@material-ui/icons/Search';
import { Search as SearchIcon } from 'react-feather';
import { useDispatch } from 'react-redux';
import useEditedStocks from 'src/utils/useEditedStocks';
import useSearchQuery from 'src/utils/useSearchQuery';
import { getSales } from 'src/modules/sales';

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
  const [category, setCategory] = useState('name');
  const [input, setInput] = useState('');
  const inputRef = useRef();
  const classes = useStyles();

  const dispatch = useDispatch();
  const { onSave } = useEditedStocks();
  const { onChangeKeyword, onResetKeyword, onChangePage } = useSearchQuery();

  const handleSave = () => {
    if (window.confirm('변경사항들이 일괄 변경됩니다. 저장하시겠습니까?')) {
      onSave();
      window.location.reload();
    }
  };

  const handleChange = (e) => {
    setCategory(e.target.value);
    setInput('');
    onResetKeyword();
  };

  const handleInput = (e) => {
    const { value } = e.target;
    onChangeKeyword({ [category]: value });
    setInput(value);
  };

  const handleKeydown = () => {
    dispatch(getSales());
    onChangePage(0);
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
        {/* <Button color="primary" variant="contained" onClick={onClick}>
          재고 추가
        </Button> */}
      </Box>
      <Box mt={3}>
        <Card>
          <CardContent>
            <Box maxWidth={700}>
              <Grid container>
                <Grid item sm={6} md={7} lg={7}>
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
                    placeholder="판매 검색"
                    variant="outlined"
                    value={input}
                    onChange={handleInput}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        handleKeydown();
                      }
                    }}
                  />
                </Grid>
                <Grid item sm={6} md={3} lg={3} style={{ paddingLeft: 10 }}>
                  <FormControl
                    variant="outlined"
                    className={classes.formControl}
                    fullWidth
                  >
                    <InputLabel id="demo-simple-select-outlined-label">
                      검색 필드
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      // value={category}
                      defaultValue="name"
                      onChange={handleChange}
                      label="search"
                    >
                      {/* <MenuItem value="">
                        <em>None</em>
                      </MenuItem> */}
                      <MenuItem value="name">제품명</MenuItem>
                      <MenuItem value="status">상태</MenuItem>
                      <MenuItem value="memo_inStock">메모</MenuItem>
                      <MenuItem value="pin">품번</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item sm={6} md={2} lg={2}>
                  <Box paddingTop={1} paddingLeft={1}>
                    <IconButton
                      // color="primary"
                      className={classes.iconButton}
                      aria-label="directions"
                      onClick={handleKeydown}
                    >
                      <SearchIconMUI />
                    </IconButton>
                  </Box>
                </Grid>
              </Grid>
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
