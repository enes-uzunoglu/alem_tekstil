import {
  SET_CARD,
  SET_PAYMENT,
  SET_ADDRESS,
} from "./actionTypes/shoppingCardActionTypes";

export const setCard = (card) => ({
  type: SET_CARD,
  payload: card,
});

export const setPayment = (payment) => ({
  type: SET_PAYMENT,
  payload: payment,
});

export const setAddress = (address) => ({
  type: SET_ADDRESS,
  payload: address,
});
