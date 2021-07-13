import React, { useState } from 'react';
import {
  Box,
  Collapse,
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
import { setStatusColor, toDatePickerFormat } from 'src/utils/lib';
import useEditedStocks from 'src/utils/useEditedStocks';
import AutoTotalCostField from '../AutoTotalCostField';

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
      padding: 6
    }
  }
});

const StockListItem = ({ stock }) => {
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
        style={{
          backgroundColor: `${setStatusColor(stock.status)}`
        }}
        className={classes.root}
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
        <TableCell>
          {stock.totalPurchaseCost ? `${stock.totalPurchaseCost}원` : '0원'}
        </TableCell>
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
                    onChange={handleChange}
                    required
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
                    label="구매가격 USD"
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
                {/* AutoField */}
                <AutoTotalCostField stock={stock} size={2} listItem />
                {/* AutoField */}
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
                    placeholder="추가금액"
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

export default React.memo(StockListItem);
