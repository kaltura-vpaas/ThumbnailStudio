import React, { FC } from "react";
import isEmpty from "lodash/isEmpty";
import TextInput from "../uiComponents/textInput";
import "./styles.scss";

interface Props {
  setKS: (val: string) => void;
  setPartnerId: (val: string) => void;
  ks: string;
  partnerId: any;
}

const AppConfig: FC<Props> = ({ setKS, ks, setPartnerId, partnerId}) => {
  const isKsEmpty: boolean = isEmpty(ks);
  return (
    <div className="app-config">
      <span className="section-label">App configuration</span>
      <div className="section">
        <label>KS</label>
        <TextInput onChange={setKS} type="string" value={ks} />
      </div>
      <div className="section">
        <label>Partner Id</label>
        <TextInput
          onChange={setPartnerId}
          type="int"
          value={partnerId}
          required={isKsEmpty}
        />
      </div>
    </div>
  );
};

export default AppConfig;
