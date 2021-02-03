import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
  makeStyles
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {}
}));

const StockDetailOut = ({ stock }) => {
  const classes = useStyles();
  const [values, setValues] = useState({
    firstName: 'Katarina',
    lastName: 'Smith',
    email: 'demo@devias.io',
    phone: '',
    state: 'Alabama',
    country: 'USA'
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  const toDatePickerFormat = (date, option = { new: false }) => {
    if (option.new) {
      return new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substring(0, 10);
    }

    return date?.toString().substring(0, 10);
  };

  console.log(stock.soldAt);

  return (
    <form autoComplete="off" noValidate>
      <Card>
        <Grid
          container
          justify="space-between"
          alignItems="center"
          className={classes.swtich}
        >
          <CardHeader
            md={6}
            lg={6}
            xl={6}
            // subheader="The information can be edited"
            title="판매 상세"
          />
          {/* <Switch
            checked={state.checkedB}
            onChange={handleChange}
            color="primary"
            name="checkedB"
            inputProps={{ 'aria-label': 'primary checkbox' }}
          /> */}
        </Grid>
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item md={6} xs={6}>
              <TextField
                fullWidth
                label="구매자"
                name="buyer_name"
                // onChange={handleChange}
                required
                value={stock.buyer_name}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={6}>
              <TextField
                fullWidth
                label="구매자 연락처"
                name="buyer_phoneNumber"
                // onChange={handleChange}
                required
                defaultValue={stock.buyer_phoneNumber}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={6}>
              <TextField
                fullWidth
                label="판매 출처"
                name="soldFrom_method"
                // onChange={handleChange}
                required
                defaultValue={stock.soldFrom_method}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={6}>
              <TextField
                fullWidth
                type="date"
                label="판매 날짜"
                name="soldAt"
                // onChange={handleChange}
                required
                defaultValue={
                  toDatePickerFormat(stock.soldAt) ||
                  toDatePickerFormat(new Date(), { new: true })
                }
                variant="outlined"
              />
            </Grid>
            <Divider />
            <Grid item md={6} xs={6}>
              <TextField
                fullWidth
                // helperText="Please specify the first name"
                label="판매가격"
                name="soldFor"
                // onChange={handleChange}
                required
                value={stock.soldFor}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={6}>
              <TextField
                fullWidth
                label="기타 추가 비용"
                name="temp"
                // onChange={handleChange}
                required
                defaultValue={stock.temp}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={6}>
              <TextField
                fullWidth
                label="판매 사이트 체크박스"
                name="temp"
                // onChange={handleChange}
                required
                defaultValue={stock.temp}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={6}>
              <TextField
                fullWidth
                label="판매방법 기타(승우문자)"
                name="temp"
                // onChange={handleChange}
                required
                defaultValue={stock.temp}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={6}>
              <TextField
                fullWidth
                helperText="자동계산필드"
                label="45%"
                name="temp"
                // onChange={handleChange}
                required
                defaultValue={stock.temp}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={6}>
              <TextField
                fullWidth
                helperText="자동계산필드"
                label="35%"
                name="temp"
                // onChange={handleChange}
                required
                defaultValue={stock.temp}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={6}>
              <TextField
                fullWidth
                helperText="자동계산필드"
                label="20%"
                name="temp"
                // onChange={handleChange}
                required
                defaultValue={stock.temp}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={6}>
              <TextField
                fullWidth
                helperText="자동계산필드"
                label="순이익"
                name="profit"
                // onChange={handleChange}
                required
                defaultValue={stock.profit}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                id="filled-textarea"
                label="판매 특징 상세"
                placeholder="Placeholder"
                multiline
                // variant="filled"
                fullWidth
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                id="filled-textarea"
                label="메타데이터"
                placeholder="Placeholder"
                multiline
                // variant="filled"
                fullWidth
              />
            </Grid>

            {/* 옵션 예제 */}
            {/* <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Select State"
                name="state"
                onChange={handleChange}
                required
                select
                SelectProps={{ native: true }}
                value={values.state}
                variant="outlined"
              >
                {states.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Grid> */}
          </Grid>
        </CardContent>
        <Divider />
        <Box display="flex" justifyContent="flex-end" p={2}>
          <Button color="primary" variant="contained">
            저장
          </Button>
        </Box>
      </Card>
    </form>
  );
};

// StockDetailOut.propTypes = {
//   className: PropTypes.string
// };

export default StockDetailOut;
