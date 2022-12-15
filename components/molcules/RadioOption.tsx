import styled from "@emotion/styled";
import { Dispatch } from "react";
import { Radio } from "../atoms/Radio";
type Props = {
  label: string;
  setValue: Dispatch<React.SetStateAction<string>>;
};
export const RadioOption = (props: Props) => {
  const { label, setValue } = props;
  return (
    <SSexualOption>
      <label>{label}</label>
      <SSexualSelecter>
        <Radio label={"男性"} name={"sex"} value={"男性"} setValue={setValue} />
        <Radio label={"女性"} name={"sex"} value={"女性"} setValue={setValue} />
        <Radio
          label={"その他"}
          name={"sex"}
          value={"その他"}
          setValue={setValue}
        />
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
