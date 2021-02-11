import { createAction, handleActions } from 'redux-actions';
import { toDatePickerFormat } from 'src/utils/lib';

export const changeForm = createAction('form/CHANGE');

export const initialState = {
  inStock: false,
  status: '재고있음',
  currentlyAt: '',
  purchasedFrom: '',
  pin: '',
  serialNumber: '',
  name: '',
  purchasedForUSD: 0,
  purchasedForKRW: 0,
  internationalShippingCost: 0,
  extraCost: 0,
  shippingCost: 0,
  totalPurchaseCost: 0,
  soldFor: 0,
  profit: 0,
  stockedAt: toDatePickerFormat(new Date(), { new: true }),
  brand: '',
  caterory: '',
  memo_inStock: '',
  meta_inStock: '',
  soldAt: toDatePickerFormat(new Date(), { new: true }),
  buyer_name: '',
  buyer_phoneNumber: '',
  profit_filter_a: 0,
  profit_filter_b: 0,
  profit_filter_c: 0,
  soldFrom_site: '',
  soldFrom_insta: '',
  soldFrom_bungae: '',
  soldFrom_jungna: '',
  soldFrom_register: '',
  soldFrom_method: '',
  memo_sold: '',
  meta_sold: ''
};

const reducer = handleActions(
  {
    [changeForm]: (state, { payload }) => ({
      ...state,
      ...payload
    })
  },
  initialState
);

export default reducer;
