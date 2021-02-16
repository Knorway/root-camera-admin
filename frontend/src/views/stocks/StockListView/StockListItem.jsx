import React, { useState } from 'react';
import {
  Box,
  Collapse,
  Grid,
  IconButton,
  TableCell,
  TableRow,
  TextField
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { setStatusColor, toDatePickerFormat } from 'src/utils/lib';
import useEditedStocks from 'src/utils/useEditedStocks';

const StockListItem = ({ stock }) => {
  const [open, setOpen] = useState(false);

  const { onChange, initializeNewStack } = useEditedStocks();

  const handleChange = (e) => {
    onChange(e, stock._id);
  };

  const handleOpen = () => {
    initializeNewStack(stock);
    setOpen((prev) => !prev);
  };

  return (
    <>
      <TableRow
        key={stock._id}
        style={{
          backgroundColor: `${setStatusColor(stock.status)}`
        }}
      >
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={handleOpen}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell>{stock.status || '재고 있음'}</TableCell>
        <TableCell>
          <Link to={`/app/stocks/${stock._id}`}>{stock.pin}</Link>
        </TableCell>
        <TableCell>{stock.serialNumber}</TableCell>
        <TableCell>{stock.name}</TableCell>
        <TableCell>{`${stock.purchasedForKRW}원`}</TableCell>
        <TableCell>{stock.stockedAt?.substring(0, 10)}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={7}>
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
                    label="품번"
                    name="pin"
                    onChange={handleChange}
                    required
                    defaultValue={stock.pin}
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
                    label="일련번호"
                    name="serialNumber"
                    onChange={handleChange}
                    required
                    defaultValue={stock.serialNumber}
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
                    label="구매처"
                    name="purchasedFrom"
                    onChange={handleChange}
                    required
                    defaultValue={stock.purchasedFrom}
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
                    label="상품명"
                    name="name"
                    onChange={handleChange}
                    required
                    defaultValue={stock.name}
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
                    label="브랜드"
                    name="brand"
                    onChange={handleChange}
                    required
                    defaultValue={stock.brand}
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
                    label="카테고리"
                    name="category"
                    onChange={handleChange}
                    required
                    defaultValue={stock.category}
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
                    // helperText="입고대기/수리/분실/재고있음"
                    label="상태"
                    name="status"
                    onChange={handleChange}
                    required
                    defaultValue={stock.status}
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
                    label="현재 위치"
                    name="currentlyAt"
                    onChange={handleChange}
                    required
                    defaultValue={stock.currentlyAt}
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
                    type="date"
                    label="입고 날짜"
                    name="stockedAt"
                    onChange={handleChange}
                    required
                    defaultValue={
                      toDatePickerFormat(stock.stockedAt) ||
                      toDatePickerFormat(new Date(), {
                        new: true
                      })
                    }
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
                    label="해당없음"
                    // name="currentlyAt"
                    onChange={handleChange}
                    required
                    // defaultValue={stock.currentlyAt}
                    variant="outlined"
                    inputProps={{
                      style: { fontSize: 14, padding: 12 }
                    }}
                    InputLabelProps={{
                      style: { lineHeight: 0, fontSize: 14 }
                    }}
                    disabled
                  />
                </Grid>
                <Grid item md={2} xs={2}>
                  <TextField
                    fullWidth
                    // helperText="Please specify the first name"
                    label="구매가격 $"
                    name="purchasedForUSD"
                    onChange={handleChange}
                    required
                    defaultValue={stock.purchasedForUSD}
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
                    label="구매가격 ₩"
                    name="purchasedForKRW"
                    onChange={handleChange}
                    required
                    defaultValue={stock.purchasedForKRW}
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
                    label="배대지비용"
                    name="internationalShippingCost"
                    onChange={handleChange}
                    required
                    defaultValue={stock.internationalShippingCost}
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
                    label="배송비"
                    name="shippingCost"
                    onChange={handleChange}
                    required
                    defaultValue={stock.shippingCost}
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
                    label="기타 추가 비용"
                    name="extraCost"
                    onChange={handleChange}
                    required
                    defaultValue={stock.extraCost}
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
                    // helperText="자동계산필드"
                    label="총 구매 비용"
                    name="totalPurchaseCost"
                    onChange={handleChange}
                    required
                    defaultValue={stock.totalPurchaseCost}
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
                    id="filled-textarea"
                    label="재고 특징 상세"
                    multiline
                    name="memo_inStock"
                    defaultValue={stock.memo_inStock}
                    onChange={handleChange}
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
                    multiline
                    name="meta_inStock"
                    defaultValue={stock.meta_inStock}
                    onChange={handleChange}
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

export default StockListItem;
