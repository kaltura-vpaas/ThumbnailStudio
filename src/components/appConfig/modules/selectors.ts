import { createSelector } from "reselect";
import { key } from "./constants";

export const getState = (state: any) => state[key];

export const getKs = createSelector(
  getState,
  s => s.ks
);

export const getPartnerId = createSelector(
  getState,
  s => s.partnerId
);
