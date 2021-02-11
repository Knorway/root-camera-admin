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
  FormControl,
  FormLabel,
  FormGroup,
  FormControlLabel,
  Checkbox,
  FormHelperText,
  Switch,
  Collapse
} from '@material-ui/core';
import { toDatePickerFormat } from '../utils';

const useStyles = makeStyles(() => ({
  root: {}
}));

const StockDetailOut = ({ stock, handleChange, isInStock }) => {
  const [toggleInStock, setToggleInStock] = useState(stock.inStock);

  const classes = useStyles();

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
            defaultChecked={!stock.inStock}
            onChange={(e) => {
              handleChange(e);
              setToggleInStock((prev) => !prev);
            }}
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
                  value={stock.buyer_name}
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
                  {/* <FormHelperText>Be careful</FormHelperText> */}
                </FormControl>
              </Grid>
              <Grid item md={6} xs={6}>
                <TextField
                  fullWidth
                  label="판매 루트 상세"
                  name="soldFrom_method"
                  onChange={handleChange}
                  required
                  defaultValue={stock.soldFrom_site}
                  variant="outlined"
                />
              </Grid>
              <Grid item md={6} xs={6}>
                <TextField
                  fullWidth
                  // helperText="Please specify the first name"
                  label="판매가격"
                  name="soldFor"
                  onChange={handleChange}
                  required
                  value={stock.soldFor}
                  variant="outlined"
                />
              </Grid>

              <Grid item md={6} xs={6}>
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
              <Grid item md={6} xs={6}>
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
              <Grid item md={6} xs={6}>
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
              <Grid item md={6} xs={6}>
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
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  id="filled-textarea"
                  label="판매 특징 상세"
                  placeholder="Placeholder"
                  name="memo_sold"
                  onChange={handleChange}
                  defaultValue={stock.memo_sold}
                  multiline
                  // variant="filled"
                  fullWidth
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  id="filled-textarea"
                  label="비고"
                  placeholder="Placeholder"
                  name="meta_sold"
                  onChange={handleChange}
                  defaultValue={stock.meta_sold}
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
        </Collapse>
      </Card>
    </form>
  );
};

export default React.memo(StockDetailOut);
