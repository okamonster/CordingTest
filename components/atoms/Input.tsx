import styled from "@emotion/styled";
type Props = {
  type: string;
  placeholder: string;
};
export const Input = (props: Props) => {
  const { type, placeholder } = props;
  return <SInput type={type} placeholder={placeholder} />;
};

const SInput = styled.input`
  border: solid 1px #e0e8e8;
  width: 100%;
  padding: 10px;
  border-radius: 5px;
`;
