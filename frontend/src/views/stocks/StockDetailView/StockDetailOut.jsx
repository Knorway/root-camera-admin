import React, { useState } from 'react';
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
  FormControl,
  FormLabel,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Switch,
  Collapse
} from '@material-ui/core';
import { toDatePickerFormat } from 'src/utils/lib';
import useEditedStocks from 'src/utils/useEditedStocks';

const useStyles = makeStyles(() => ({
  root: {}
}));

const StockDetailOut = () => {
  const classes = useStyles();
  const { stock, onChange, onSave } = useEditedStocks();
  const [toggleInStock, setToggleInStock] = useState(stock.inStock);

  const onToggle = (e) => {
    onChange(e, stock._id);
    setToggleInStock((prev) => !prev);
  };

  const handleChange = (e) => {
    onChange(e, stock._id);
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
            subheader={!toggleInStock && '판매 완료'}
            title="판매 상세"
          />
          <Switch
            checked={toggleInStock}
            onChange={onToggle}
            color="primary"
            name="inStock"
            inputProps={{ 'aria-label': 'primary checkbox' }}
          />
        </Grid>
        <Divider />
        <Collapse in={!toggleInStock}>
          <CardContent>
            <Grid container spacing={3}>
              <Grid item md={6} xs={6}>
                <TextField
                  fullWidth
                  label="구매자"
                  name="buyer_name"
                  onChange={handleChange}
                  required
                  defaultValue={stock.buyer_name}
                  variant="outlined"
                />
              </Grid>
              <Grid item md={6} xs={6}>
                <TextField
                  fullWidth
                  label="구매자 연락처"
                  name="buyer_phoneNumber"
                  onChange={handleChange}
                  required
                  defaultValue={stock.buyer_phoneNumber}
                  variant="outlined"
                />
              </Grid>
              <Grid item md={6} xs={6}>
                <TextField
                  fullWidth
                  type="date"
                  label="판매 날짜"
                  name="soldAt"
                  onChange={handleChange}
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
              </Grid>
              <Grid item md={6} xs={6}>
                <TextField
                  fullWidth
                  label="판매 루트 상세"
                  name="soldFrom_method"
                  onChange={handleChange}
                  required
                  defaultValue={stock.soldFrom_method}
                  variant="outlined"
                />
              </Grid>
              <Grid item md={6} xs={6}>
                <TextField
                  fullWidth
                  label="판매가격"
                  type="number"
                  name="soldFor"
                  onChange={handleChange}
                  required
                  defaultValue={stock.soldFor}
                  variant="outlined"
                />
              </Grid>

              <Grid item md={6} xs={6}>
                <TextField
                  fullWidth
                  helperText="자동계산필드"
                  type="number"
                  label="45%"
                  name="temp"
                  onChange={handleChange}
                  required
                  defaultValue={stock.temp}
                  variant="outlined"
                  disabled
                />
              </Grid>
              <Grid item md={6} xs={6}>
                <TextField
                  fullWidth
                  helperText="자동계산필드"
                  type="number"
                  label="35%"
                  name="temp"
                  onChange={handleChange}
                  required
                  defaultValue={stock.temp}
                  variant="outlined"
                  disabled
                />
              </Grid>
              <Grid item md={6} xs={6}>
                <TextField
                  fullWidth
                  helperText="자동계산필드"
                  type="number"
                  label="20%"
                  name="temp"
                  onChange={handleChange}
                  required
                  defaultValue={stock.temp}
                  variant="outlined"
                  disabled
                />
              </Grid>
              <Grid item md={6} xs={6}>
                <TextField
                  fullWidth
                  helperText="자동계산필드"
                  type="number"
                  label="순이익"
                  name="profit"
                  onChange={handleChange}
                  required
                  defaultValue={stock.profit}
                  variant="outlined"
                  disabled
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  id="filled-textarea"
                  label="판매 특징 상세"
                  name="memo_sold"
                  onChange={handleChange}
                  defaultValue={stock.memo_sold}
                  multiline
                  fullWidth
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  id="filled-textarea"
                  label="비고"
                  name="meta_sold"
                  onChange={handleChange}
                  defaultValue={stock.meta_sold}
                  multiline
                  fullWidth
                />
              </Grid>
            </Grid>
          </CardContent>
          <Divider />
          <Box display="flex" justifyContent="flex-end" p={2}>
            <Button color="primary" variant="contained" onClick={onSave}>
              저장
            </Button>
          </Box>
        </Collapse>
      </Card>
    </form>
  );
};

export default React.memo(StockDetailOut);
