import styled from "@emotion/styled";
import { Dispatch } from "react";
import { Input } from "../atoms/Input";

type Props = {
  label: string;
  type: string;
  placeholder: string;
  value: string;
  setValue: Dispatch<React.SetStateAction<string>>;
};

export const InputOption = (props: Props) => {
  const { label, type, placeholder, value, setValue } = props;
  return (
    <SInputOption>
      <label>{label}</label>
      <Input
        type={type}
        placeholder={placeholder}
        value={value}
        setValue={setValue}
      />
    </SInputOption>
  );
};

const SInputOption = styled.div`
  margin-top: 10px;
`;
