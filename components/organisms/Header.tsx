import styled from "@emotion/styled";
type Props = {
  children: string;
};
export const Header = (props: Props) => {
  const { children } = props;
  return (
    <SHeader>
      <h3>{children}</h3>
    </SHeader>
  );
};

const SHeader = styled.header`
  height: 60px;
  width: 100%;
  text-align: center;
  border-bottom: 1px solid #e0e8e8;
  h3 {
    line-height: 60px;
    margin: 0;
    font-weight: normal;
  }
`;
