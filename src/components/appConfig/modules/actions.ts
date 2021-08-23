import constants from "./constants";

export const setKS = (ks: string) => {
  return { type: constants.SET_KS, payload: ks };
};

export const setPartnerId = (partnerId: string) => {
  return { type: constants.SET_PARTNER_ID, payload: partnerId };
};
