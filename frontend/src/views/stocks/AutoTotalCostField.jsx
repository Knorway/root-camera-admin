import { Grid, TextField } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import useEditedStocks from 'src/utils/useEditedStocks';

const initialState = {
  purchasedForKRW: 0,
  internationalShippingCost: 0,
  shippingCost: 0,
  extraCost: 0
};

const AutoTotalCostField = ({ listItem, size, stock }) => {
  const { onChange } = useEditedStocks();
  const [costField, setCostField] = useState(initialState);
  const [totalCost, setTotalCost] = useState(stock.purchasedForKRW);

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

  const countTotalCost = () => {
    const {
      purchasedForKRW,
      internationalShippingCost,
      shippingCost,
      extraCost
    } = costField;
    const price =
      purchasedForKRW + internationalShippingCost + shippingCost + extraCost;
    return price;
  };

  const handleCountTotalCount = (e) => {
    const { name, value } = e.target;

    onChange(e, stock._id);
    setCostField((prev) => ({
      ...prev,
      [name]: +value
    }));
  };

  useEffect(() => {
    setCostField({
      purchasedForKRW: stock.purchasedForKRW,
      internationalShippingCost: stock.internationalShippingCost,
      shippingCost: stock.shippingCost,
      extraCost: stock.extraCost
    });
  }, [stock]);

  useEffect(() => {
    setTotalCost(countTotalCost());
  }, [costField]);

  return (
    <>
      <Grid item md={size} xs={size}>
        <TextField
          fullWidth
          label="구매가격 KRW"
          type="number"
          name="purchasedForKRW"
          onChange={handleCountTotalCount}
          onFocus={(e) => e.target.select()}
          value={costField.purchasedForKRW}
          variant="outlined"
          inputProps={inputProps}
          InputLabelProps={inputLableProps}
        />
      </Grid>
      <Grid item md={size} xs={size}>
        <TextField
          fullWidth
          label="배대지비용"
          type="number"
          name="internationalShippingCost"
          onChange={handleCountTotalCount}
          onFocus={(e) => e.target.select()}
          value={costField.internationalShippingCost}
          variant="outlined"
          inputProps={inputProps}
          InputLabelProps={inputLableProps}
        />
      </Grid>
      <Grid item md={size} xs={size}>
        <TextField
          fullWidth
          label="배송비"
          type="number"
          name="shippingCost"
          onChange={handleCountTotalCount}
          onFocus={(e) => e.target.select()}
          value={costField.shippingCost}
          variant="outlined"
          inputProps={inputProps}
          InputLabelProps={inputLableProps}
        />
      </Grid>
      <Grid item md={size} xs={size}>
        <TextField
          fullWidth
          label="기타 추가 비용"
          type="number"
          name="extraCost"
          onChange={handleCountTotalCount}
          onFocus={(e) => e.target.select()}
          value={costField.extraCost}
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
          label="총 구매 비용"
          name="totalPurchaseCost"
          required
          value={totalCost}
          variant="outlined"
          inputProps={inputProps}
          InputLabelProps={inputLableProps}
          inputRef={(input) => {
            input &&
              onChange(
                {
                  target: { name: 'totalPurchaseCost', value: input.value }
                },
                stock._id
              );
          }}
        />
      </Grid>
    </>
  );
};

AutoTotalCostField.defaultProps = {
  size: 6,
  listItem: false
};

export default AutoTotalCostField;
