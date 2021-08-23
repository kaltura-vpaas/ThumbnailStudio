import { createSelector } from "reselect";
import { key } from "./constants";

export const getState = (state: any) => state[key];

export const getInstances = createSelector(
  getState,
  s => s.instanceList
);

export const getSelectedInstance = createSelector(
  getState,
  s => s.selectedInstance
);
