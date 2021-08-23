import TextInput from "../components/uiComponents/textInput";
import ColorPicker from "../components/uiComponents/colorPicker";
import DropDown from "../components/uiComponents/dropDown";
import CheckBox from "../components/uiComponents/checkBox";

export const getPropertyComponent = (type: string) => {
  switch (type) {
    case "string":
    case "float":
    case "int":
      return TextInput;
    case "bool":
      return CheckBox;
    case "color":
      return ColorPicker;
    case "select":
      return DropDown;
    default:
      return null;
  }
};

export const generateRandom = () =>
  `${[...Array(10)]
    .map(() => (~~(Math.random() * 36)).toString(36))
    .join("")}-${Date.now()}`;

export const isValidHexColor = (color: any) => {
  return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(color);
};

export const isHexaColor = (sNum: any) => {
  return (
    typeof sNum === "string" && sNum.length === 6 && !isNaN(parseInt(sNum, 16))
  );
};
