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
import { setStatusColor } from 'src/utils/lib';

const StockListItem = ({ stock }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <TableRow
        key={stock._id}
        style={{
          backgroundColor: `${setStatusColor(stock.status)}`
        }}
      >
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
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
        <TableCell>{stock.stockedAt.substring(0, 10)}</TableCell>
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
                    // onChange={onChange}
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
                    // onChange={onChange}
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
                    // onChange={onChange}
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
                    // onChange={onChange}
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
                    // onChange={onChange}
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
                    // onChange={onChange}
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
                    // onChange={onChange}
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
                    // onChange={onChange}
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
                    // onChange={onChange}
                    required
                    // defaultValue={
                    //   toDatePickerFormat(stock.stockedAt) ||
                    //   toDatePickerFormat(new Date(), {
                    //     new: true
                    //   })
                    // }
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
                    // onChange={onChange}
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
                    // onChange={onChange}
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
                    // onChange={onChange}
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
                    // onChange={onChange}
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
                    // onChange={onChange}
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
                    // onChange={onChange}
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
                    // onChange={onChange}
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
                <Grid item md={2} xs={2} style={{ paddingBottom: -10 }}>
                  <TextField
                    id="filled-textarea"
                    label="재고 특징 상세"
                    placeholder="Placeholder"
                    multiline
                    name="memo_inStock"
                    defaultValue={stock.memo_inStock}
                    // onChange={onChange}
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
                    placeholder="Placeholder"
                    multiline
                    name="meta_inStock"
                    defaultValue={stock.meta_inStock}
                    // onChange={onChange}
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
