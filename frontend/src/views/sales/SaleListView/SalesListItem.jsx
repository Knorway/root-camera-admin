import React, { useState } from 'react';
import {
  Box,
  Checkbox,
  Collapse,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Grid,
  IconButton,
  makeStyles,
  TableCell,
  TableRow,
  TextField
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { toDatePickerFormat } from 'src/utils/lib';
import useEditedStocks from 'src/utils/useEditedStocks';
import AutoProfitField from '../AutoProfitField';

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset'
    }
  }
});

const SalesListItem = ({ stock }) => {
  const classes = useRowStyles();
  const [open, setOpen] = useState(false);

  const { onChange, initializeNewStack } = useEditedStocks();

  const handleChange = (e) => {
    onChange(e, stock._id);
  };

  const handleOpen = () => {
    if (open) {
      if (
        window.confirm(
          '저장되지 않은 변경사항은 유지되지 않습니다. 탭을 닫으시겠습니까?'
        )
      ) {
        setOpen(false);
      }
    } else {
      initializeNewStack(stock);
      setOpen(true);
    }
  };

  return (
    <>
      <TableRow
        key={stock._id}
        // style={{
        //   backgroundColor: `${setStatusColor(stock.status)}`
        // }}
        className={classes.root}
      >
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={handleOpen}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        {/* <TableCell>{stock.status || '재고 있음'}</TableCell> */}
        <TableCell>
          <Link to={`/app/stocks/${stock._id}`}>{stock.pin}</Link>
        </TableCell>
        <TableCell>{stock.serialNumber}</TableCell>
        <TableCell>{stock.name}</TableCell>
        <TableCell>{stock.buyer_name}</TableCell>
        <TableCell>{stock.buyer_phoneNumber}</TableCell>
        <TableCell>{`${stock.soldFor}원`}</TableCell>
        <TableCell>{`${stock.profit}원`}</TableCell>
        <TableCell>{stock.soldAt?.substring(0, 10)}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={9}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Grid
                container
                spacing={2}
                style={{ paddingBottom: 8, paddingTop: 8 }}
              >
                <Grid item md={2} xs={2}>
                  <TextField
                    fullWidth
                    label="구매자"
                    name="buyer_name"
                    onChange={handleChange}
                    required
                    defaultValue={stock.buyer_name}
                    variant="outlined"
                    inputProps={{
                      style: { fontSize: 14, padding: 12 }
                    }}
                    InputLabelProps={{
                      style: { lineHeight: 0, fontSize: 14 }
                    }}
                  />
                </Grid>
                <Grid item md={2} xs={2}>
                  <TextField
                    fullWidth
                    label="구매자 연락처"
                    name="buyer_phoneNumber"
                    onChange={handleChange}
                    required
                    defaultValue={stock.buyer_phoneNumber}
                    variant="outlined"
                    inputProps={{
                      style: { fontSize: 14, padding: 12 }
                    }}
                    InputLabelProps={{
                      style: { lineHeight: 0, fontSize: 14 }
                    }}
                  />
                </Grid>
                {/* <Grid item md={2} xs={2}>
                  <TextField
                    fullWidth
                    type="date"
                    label="판매 날짜"
                    name="soldAt"
                    onChange={handleChange}
                    required
                    // focused
                    defaultValue={
                      toDatePickerFormat(stock.soldAt) ||
                      toDatePickerFormat(new Date(), { new: true })
                    }
                    variant="outlined"
                    inputProps={{
                      style: { fontSize: 14, padding: 12 }
                    }}
                    InputLabelProps={{
                      style: { lineHeight: 0, fontSize: 14 }
                    }}
                  />
                </Grid> */}
                {/* <Grid item md={2} xs={2}>
                  <FormControl
                    component="fieldset"
                    className={classes.formControl}
                  >
                    <FormLabel component="legend">판매 루트</FormLabel>
                    <FormGroup row>
                      <FormControlLabel
                        control={
                          <Checkbox
                            defaultChecked={stock.soldFrom_site}
                            onChange={handleChange}
                            name="soldFrom_site"
                          />
                        }
                        label="공홈"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            defaultChecked={stock.soldFrom_insta}
                            onChange={handleChange}
                            name="soldFrom_insta"
                          />
                        }
                        label="인스타"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            defaultChecked={stock.soldFrom_jungna}
                            onChange={handleChange}
                            name="soldFrom_jungna"
                          />
                        }
                        label="중고나라"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            defaultChecked={stock.soldFrom_bungae}
                            onChange={handleChange}
                            name="soldFrom_bungae"
                          />
                        }
                        label="번개장터"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            defaultChecked={stock.soldFrom_register}
                            onChange={handleChange}
                            name="soldFrom_register"
                          />
                        }
                        label="등록기"
                      />
                    </FormGroup>
                  </FormControl>
                </Grid> */}
                {/* <Grid item md={2} xs={2}>
                  <TextField
                    fullWidth
                    label="판매 루트 상세"
                    name="soldFrom_method"
                    onChange={handleChange}
                    required
                    defaultValue={stock.soldFrom_method}
                    variant="outlined"
                    inputProps={{
                      style: { fontSize: 14, padding: 12 }
                    }}
                    InputLabelProps={{
                      style: { lineHeight: 0, fontSize: 14 }
                    }}
                  />
                </Grid> */}
                {/* <Grid item md={2} xs={2}>
                  <TextField
                    fullWidth
                    label="판매가격"
                    name="soldFor"
                    onChange={handleChange}
                    required
                    defaultValue={stock.soldFor}
                    variant="outlined"
                  />
                </Grid>
                <Grid item md={2} xs={2}>
                  <TextField
                    fullWidth
                    helperText="자동계산필드"
                    label="45%"
                    name="temp"
                    onChange={handleChange}
                    required
                    defaultValue={stock.temp}
                    variant="outlined"
                  />
                </Grid>
                <Grid item md={2} xs={2}>
                  <TextField
                    fullWidth
                    helperText="자동계산필드"
                    label="35%"
                    name="temp"
                    onChange={handleChange}
                    required
                    defaultValue={stock.temp}
                    variant="outlined"
                  />
                </Grid>
                <Grid item md={2} xs={2}>
                  <TextField
                    fullWidth
                    helperText="자동계산필드"
                    label="20%"
                    name="temp"
                    onChange={handleChange}
                    required
                    defaultValue={stock.temp}
                    variant="outlined"
                  />
                </Grid>
                <Grid item md={2} xs={2}>
                  <TextField
                    fullWidth
                    helperText="자동계산필드"
                    label="순이익"
                    name="profit"
                    onChange={handleChange}
                    required
                    defaultValue={stock.profit}
                    variant="outlined"
                  />
                </Grid> */}

                {/* AutoField */}
                <AutoProfitField stock={stock} size={2} listItem />

                {/* AutoField */}
                <Grid item md={2} xs={2}>
                  <TextField
                    id="filled-textarea"
                    label="판매 특징 상세"
                    name="memo_sold"
                    onChange={handleChange}
                    defaultValue={stock.memo_sold}
                    multiline
                    fullWidth
                    InputProps={{
                      style: { fontSize: 14, paddingTop: 0 }
                    }}
                    InputLabelProps={{
                      style: { lineHeight: 0, fontSize: 14 }
                    }}
                  />
                </Grid>
                <Grid item md={2} xs={2}>
                  <TextField
                    id="filled-textarea"
                    label="비고"
                    name="meta_sold"
                    onChange={handleChange}
                    defaultValue={stock.meta_sold}
                    multiline
                    fullWidth
                    InputProps={{
                      style: { fontSize: 14, paddingTop: 0 }
                    }}
                    InputLabelProps={{
                      style: { lineHeight: 0, fontSize: 14 }
                    }}
                  />
                </Grid>
              </Grid>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};

export default SalesListItem;
