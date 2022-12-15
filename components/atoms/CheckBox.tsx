import styled from "@emotion/styled";
import { Dispatch } from "react";
type Props = {
  label: string;
  setValue: Dispatch<React.SetStateAction<boolean>>;
};

export const CheckBox = (props: Props) => {
  const { label, setValue } = props;
  return (
    <SCheckBox>
      <input type="checkbox" onChange={(e) => setValue(e.target.checked)} />
      <label>{label}</label>
    </SCheckBox>
  );
};

const SCheckBox = styled.div`
  display: flex;
`;
