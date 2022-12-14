import styled from "@emotion/styled";
import { Input } from "../atoms/Input";

type Props = {
  label: string;
  type: string;
  placeholder: string;
};

export const InputOption = (props: Props) => {
  const { label, type, placeholder } = props;
  return (
    <SInputOption>
      <label>{label}</label>
      <Input type={type} placeholder={placeholder} />
    </SInputOption>
  );
};

const SInputOption = styled.div`
  margin-top: 10px;
`;
