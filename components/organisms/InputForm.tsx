import styled from "@emotion/styled";
import { Button } from "../atoms/Button";
import { CircleAvater } from "../atoms/CircleAvater";
import { CheckOption } from "../molcules/AgreementOption";
import { InputOption } from "../molcules/InputOption";
import { RadioOption } from "../molcules/RadioOption";

export const InputForm = () => {
  return (
    <SInputForm>
      <CircleAvater />
      <InputOption
        type={"text"}
        placeholder={"ユーザー名"}
        label={"ユーザー名:"}
      />
      <InputOption
        type={"email"}
        placeholder={"メールアドレス"}
        label={"メールアドレス:"}
      />
      <InputOption
        type={"password"}
        placeholder={"パスワード"}
        label={"パスワード:"}
      />
      <InputOption type={"date"} placeholder={"生年月日"} label={"生年月日"} />
      <RadioOption label={"性別:"} />
      <CheckOption label={"利用規約:"} />
      <Button>サインアップ</Button>
    </SInputForm>
  );
};

const SInputForm = styled.form`
  padding: 20px;
  display: flex;
  flex-flow: column;
`;
