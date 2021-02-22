import React, { useEffect, useState } from 'react';
import { Grid, TextField } from '@material-ui/core';
import useEditedStocks from 'src/utils/useEditedStocks';
import { useSelector } from 'react-redux';

const AutoProfitField = ({ listItem, size, stock }) => {
  const { onChange } = useEditedStocks();
  const [soldFor, setSoldFor] = useState(0);
  const [profit, setProfit] = useState(0);
  const totalPurchaseCost = useSelector(
    ({ editedStocks }) => editedStocks.stack[stock._id]?.totalPurchaseCost
  );

  const inputProps = listItem
    ? {
        style: { fontSize: 14, padding: 12 }
      }
    : {};

  const inputLableProps = listItem
    ? {
        style: { lineHeight: 0, fontSize: 14 }
      }
    : {};

  const handleCountTotalCount = (e) => {
    onChange(e, stock._id);
    setSoldFor(e.target.value);
  };

  useEffect(() => {
    setProfit(stock.profit || 0);
    setSoldFor(stock.soldFor || 0);
  }, [stock]);

  useEffect(() => {
    setProfit(soldFor - totalPurchaseCost);
  }, [soldFor, totalPurchaseCost]);

  return (
    <>
      <Grid item md={size} xs={size}>
        <TextField
          fullWidth
          label="판매가격"
          type="number"
          name="soldFor"
          onChange={handleCountTotalCount}
          onFocus={(e) => e.target.select()}
          value={soldFor}
          variant="outlined"
          inputProps={inputProps}
          InputLabelProps={inputLableProps}
        />
      </Grid>
      <Grid item md={size} xs={size}>
        <TextField
          fullWidth
          helperText="자동계산필드"
          type="number"
          label="45%"
          name="firstField"
          onFocus={(e) => e.target.select()}
          value={Math.round(profit * 0.45)}
          variant="outlined"
          inputProps={inputProps}
          InputLabelProps={inputLableProps}
        />
      </Grid>
      <Grid item md={size} xs={size}>
        <TextField
          fullWidth
          helperText="자동계산필드"
          type="number"
          label="35%"
          name="secondField"
          onFocus={(e) => e.target.select()}
          value={Math.round(profit * 0.35)}
          variant="outlined"
          inputProps={inputProps}
          InputLabelProps={inputLableProps}
        />
      </Grid>
      <Grid item md={size} xs={size}>
        <TextField
          fullWidth
          helperText="자동계산필드"
          type="number"
          label="20%"
          name="thirdField"
          onFocus={(e) => e.target.select()}
          value={Math.round(profit * 0.2)}
          variant="outlined"
          inputProps={inputProps}
          InputLabelProps={inputLableProps}
        />
      </Grid>
      <Grid item md={size} xs={size}>
        <TextField
          fullWidth
          helperText={!listItem && '자동계산필드'}
          type="number"
          label="순이익"
          name="profit"
          required
          value={soldFor && profit}
          variant="outlined"
          inputProps={inputProps}
          InputLabelProps={inputLableProps}
          inputRef={(input) => {
            input &&
              onChange(
                { target: { name: 'profit', value: profit } },
                stock._id
              );
          }}
        />
      </Grid>
    </>
  );
};

AutoProfitField.defaultProps = {
  size: 6,
  listItem: false
};

export default AutoProfitField;
