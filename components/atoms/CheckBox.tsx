import styled from "@emotion/styled";
type Props = {
  label: string;
};

export const CheckBox = (props: Props) => {
  const { label } = props;
  return (
    <SCheckBox>
      <input type="checkbox" />
      <label>{label}</label>
    </SCheckBox>
  );
};

const SCheckBox = styled.div`
  display: flex;
`;
