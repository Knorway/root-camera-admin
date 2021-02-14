import React from 'react';
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
  makeStyles
} from '@material-ui/core';
import { toDatePickerFormat } from 'src/utils/lib';
import useEditedStocks from 'src/utils/useEditedStocks';

const useStyles = makeStyles(() => ({
  root: {}
}));

const StockDetailIn = () => {
  const classes = useStyles();
  const { stock, onChange, onSave, onDelete } = useEditedStocks();

  return (
    <form autoComplete="off" noValidate>
      <Card>
        <Grid
          container
          justify="space-between"
          alignItems="center"
          className={classes.swtich}
        >
          <CardHeader md={6} lg={6} xl={6} title="재고 상세" />
        </Grid>
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item md={6} xs={6}>
              <TextField
                fullWidth
                label="품번"
                name="pin"
                onChange={onChange}
                required
                defaultValue={stock.pin}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={6}>
              <TextField
                fullWidth
                label="일련번호"
                name="serialNumber"
                onChange={onChange}
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
                onChange={onChange}
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
                onChange={onChange}
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
                onChange={onChange}
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
                onChange={onChange}
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
                name="status"
                onChange={onChange}
                required
                defaultValue={stock.status}
                variant="outlined"
              />
            </Grid>

            <Grid item md={6} xs={6}>
              <TextField
                fullWidth
                label="현재 위치"
                name="currentlyAt"
                onChange={onChange}
                required
                defaultValue={stock.currentlyAt}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={6}>
              <TextField
                fullWidth
                type="date"
                label="입고 날짜"
                name="stockedAt"
                onChange={onChange}
                required
                defaultValue={
                  toDatePickerFormat(stock.stockedAt) ||
                  toDatePickerFormat(new Date(), {
                    new: true
                  })
                }
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={6}>
              <TextField
                fullWidth
                label="해당없음"
                // name="currentlyAt"
                onChange={onChange}
                required
                // defaultValue={stock.currentlyAt}
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
                onChange={onChange}
                required
                defaultValue={stock.purchasedForUSD}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={6}>
              <TextField
                fullWidth
                label="구매가격 ₩"
                name="purchasedForKRW"
                onChange={onChange}
                required
                defaultValue={stock.purchasedForKRW}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={6}>
              <TextField
                fullWidth
                label="배대지비용"
                name="internationalShippingCost"
                onChange={onChange}
                required
                defaultValue={stock.internationalShippingCost}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={6}>
              <TextField
                fullWidth
                label="배송비"
                name="shippingCost"
                onChange={onChange}
                required
                defaultValue={stock.shippingCost}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={6}>
              <TextField
                fullWidth
                label="기타 추가 비용"
                name="extraCost"
                onChange={onChange}
                required
                defaultValue={stock.extraCost}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={6}>
              <TextField
                fullWidth
                helperText="자동계산필드"
                label="총 구매 비용"
                name="totalPurchaseCost"
                onChange={onChange}
                required
                defaultValue={stock.totalPurchaseCost}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                id="filled-textarea"
                label="재고 특징 상세"
                placeholder="Placeholder"
                multiline
                name="memo_inStock"
                defaultValue={stock.memo_inStock}
                onChange={onChange}
                fullWidth
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                id="filled-textarea"
                label="비고"
                placeholder="Placeholder"
                multiline
                name="meta_inStock"
                defaultValue={stock.meta_inStock}
                onChange={onChange}
                fullWidth
              />
            </Grid>

            {/* 옵션 예제 */}
            {/* <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Select State"
                name="state"
                onChange={onChange}
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
        <Box display="flex" justifyContent="space-between" p={2}>
          <Button variant="contained" onClick={onDelete(stock._id)}>
            삭제
          </Button>
          <Button color="primary" variant="contained" onClick={onSave}>
            저장
          </Button>
        </Box>
      </Card>
    </form>
  );
};

export default React.memo(StockDetailIn);
