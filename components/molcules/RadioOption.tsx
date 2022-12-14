import styled from "@emotion/styled";
import { Radio } from "../atoms/Radio";
type Props = {
  label: string;
};
export const RadioOption = (props: Props) => {
  const { label } = props;
  return (
    <SSexualOption>
      <label>{label}</label>
      <SSexualSelecter>
        <Radio label={"男性"} name={"sex"} value={"男性"} />
        <Radio label={"女性"} name={"sex"} value={"女性"} />
        <Radio label={"その他"} name={"sex"} value={"その他"} />
      </SSexualSelecter>
    </SSexualOption>
  );
};

const SSexualOption = styled.div`
  margin-top: 10px;
`;

const SSexualSelecter = styled.div`
  margin-top: 10px;
  display: flex;
`;
