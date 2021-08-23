import get from "lodash/get";
import { createSelector } from "reselect";
import { key } from "./constants";
import { getSelectedInstance } from "../../instanceList/modules/selectors";

export const getState = (state: any) => state[key];

export const getInstanceProps = createSelector(
  [getState, getSelectedInstance],
  (s, si) => {
    return s[get(si, "id")] || {};
  }
);

export const getInstanceSourceAction = createSelector(
  [getInstanceProps],
  ip => {
    return get(ip, "sourceAction", {});
  }
);
