import styled from "@emotion/styled";
type Props = {
  label: string;
  name: string;
  value: string;
};
export const Radio = (props: Props) => {
  const { label, name, value } = props;
  return (
    <SRadioSelecter>
      <label>{label}</label>
      <input type="radio" name={name} value={value} />
    </SRadioSelecter>
  );
};

const SRadioSelecter = styled.div`
  display: flex;
  margin-left: 10px;
`;
