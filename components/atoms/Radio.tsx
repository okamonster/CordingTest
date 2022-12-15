import styled from "@emotion/styled";
import { Dispatch } from "react";
type Props = {
  label: string;
  name: string;
  value: string;
  setValue: Dispatch<React.SetStateAction<string>>;
};
export const Radio = (props: Props) => {
  const { label, name, value, setValue } = props;
  return (
    <SRadioSelecter>
      <label>{label}</label>
      <input
        type="radio"
        name={name}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </SRadioSelecter>
  );
};

const SRadioSelecter = styled.div`
  display: flex;
  margin-left: 10px;
`;
