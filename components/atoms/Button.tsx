import styled from "@emotion/styled";

type Props = {
  children: string;
  onClick: () => void;
};

export const Button = (props: Props) => {
  const { children, onClick } = props;
  return <SButton onClick={onClick}>{children}</SButton>;
};

const SButton = styled.button`
  margin: 20px auto;
  width: 100%;
  height: 40px;
  border-radius: 8px;
  border: solid 1px #f0f0f0;
  color: #fff;
  background-color: #000;
  font-size: 16px;
  :hover {
    cursor: pointer;
    color: #000;
    border: solid 1px #000;
    background-color: #fff;
  }
`;
