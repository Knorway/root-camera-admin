import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
  makeStyles,
  Switch
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {}
}));

const StockDetailIn = ({ stock }) => {
  const [state, setState] = useState({
    checkedA: false,
    checkedB: false
  });
  const classes = useStyles();

  const handleChange = (event) => {
    const { name } = event.target;
    setState((prev) => ({
      ...prev,
      [name]: !prev[name]
    }));
  };

  console.log(stock);
  if (stock) {
    console.log();
  }

  const toDatePickerFormat = (date, option = { new: false }) => {
    if (option.new) {
      return new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substring(0, 10);
    }

    return date?.toString().substring(0, 10);
  };

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
            title="재고 상세"
          />
          <Switch
            checked={state.checkedB}
            onChange={handleChange}
            color="primary"
            name="checkedB"
            inputProps={{ 'aria-label': 'primary checkbox' }}
          />
        </Grid>
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item md={6} xs={6}>
              <TextField
                fullWidth
                label="품번"
                name="pin"
                // onChange={handleChange}
                required
                value={stock.pin}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={6}>
              <TextField
                fullWidth
                label="일련번호"
                name="serialNumber"
                // onChange={handleChange}
                required
                defaultValue={stock.serialNumber}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={6}>
              <TextField
                fullWidth
                label="구매처"
                name="purchasedFrom"
                // onChange={handleChange}
                required
                defaultValue={stock.purchasedFrom}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={6}>
              <TextField
                fullWidth
                label="상품명"
                name="name"
                // onChange={handleChange}
                required
                defaultValue={stock.name}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={6}>
              <TextField
                fullWidth
                label="브랜드"
                name="brand"
                // onChange={handleChange}
                required
                defaultValue={stock.brand}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={6}>
              <TextField
                fullWidth
                label="카테고리"
                name="category"
                // onChange={handleChange}
                required
                defaultValue={stock.category}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={6}>
              <TextField
                fullWidth
                helperText="수리/분실/대기"
                label="상태"
                name="currentlyAt"
                // onChange={handleChange}
                required
                defaultValue={stock.currentlyAt}
                variant="outlined"
              />
            </Grid>

            <Grid item md={6} xs={6}>
              <TextField
                fullWidth
                label="현재 위치"
                name="currentlyAt"
                // onChange={handleChange}
                required
                defaultValue={stock.currentlyAt}
                variant="outlined"
              />
            </Grid>
            {/* <Grid item md={6} xs={6}>
              <TextField
                fullWidth
                type="datetime-local"
                defaultValue={new Date(
                  Date.now() - new Date().getTimezoneOffset() * 60000
                )
                  .toISOString()
                  .substring(0, 16)}
                label="입고 날짜"
                name="stockedAt"
                // onChange={handleChange}
                required
                // defaultValue={new Date().toISOString().substring(0, 10)}
                variant="outlined"
              />
            </Grid> */}
            <Grid item md={6} xs={6}>
              <TextField
                fullWidth
                type="date"
                label="입고 날짜"
                name="stockedAt"
                // onChange={handleChange}
                required
                defaultValue={
                  toDatePickerFormat(stock.stockedAt) ||
                  toDatePickerFormat(new Date(), { new: true })
                }
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={6}>
              <TextField
                fullWidth
                label="해당없음"
                name="currentlyAt"
                // onChange={handleChange}
                required
                defaultValue={stock.currentlyAt}
                variant="outlined"
                disabled
              />
            </Grid>
            <Divider />
            <Grid item md={6} xs={6}>
              <TextField
                fullWidth
                // helperText="Please specify the first name"
                label="구매가격 $"
                name="purchasedForUSD"
                // onChange={handleChange}
                required
                value={stock.purchasedForUSD}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={6}>
              <TextField
                fullWidth
                label="구매가격 ₩"
                name="purchasedForKRW"
                // onChange={handleChange}
                required
                defaultValue={stock.purchasedForKRW}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={6}>
              <TextField
                fullWidth
                label="배대지비용"
                name="internationalShippingCosts"
                // onChange={handleChange}
                required
                defaultValue={stock.internationalShippingCosts}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={6}>
              <TextField
                fullWidth
                label="배송비"
                name="shippingCosts"
                // onChange={handleChange}
                required
                defaultValue={stock.shippingCosts}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={6}>
              <TextField
                fullWidth
                label="기타 추가 비용"
                name="optionalCosts"
                // onChange={handleChange}
                required
                defaultValue={stock.optionalCosts}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={6}>
              <TextField
                fullWidth
                helperText="자동계산필드"
                label="총 구매 비용"
                name="totalPurchaseCosts"
                // onChange={handleChange}
                required
                defaultValue={stock.totalPurchaseCosts}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                id="filled-textarea"
                label="재고 특징 상세"
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

// StockDetailIn.propTypes = {
//   className: PropTypes.string
// };

export default StockDetailIn;
