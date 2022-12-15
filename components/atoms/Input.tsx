import styled from "@emotion/styled";
import { Dispatch } from "react";
type Props = {
  type: string;
  placeholder: string;
  value: string;
  setValue: Dispatch<React.SetStateAction<string>>;
};
export const Input = (props: Props) => {
  const { type, placeholder, value, setValue } = props;
  return (
    <SInput
      type={type}
      placeholder={placeholder}
      onChange={(e) => setValue(e.target.value)}
      value={value}
    />
  );
};

const SInput = styled.input`
  border: solid 1px #e0e8e8;
  width: 100%;
  padding: 10px;
  border-radius: 5px;
`;
