import styled from "@emotion/styled";
import { useState } from "react";
import { Button } from "../atoms/Button";
import { CircleAvater } from "../atoms/CircleAvater";
import { CheckOption } from "../molcules/AgreementOption";
import { InputOption } from "../molcules/InputOption";
import { RadioOption } from "../molcules/RadioOption";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
export const InputForm = () => {
  const [userName, setUserName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [birthDay, setBirthDay] = useState("");
  const [sexual, setSexual] = useState("");
  const [agreement, setAgreement] = useState(false);

  const signup = () => {
    createUserWithEmailAndPassword(auth, emailAddress, password)
      .then((user) => {
        console.log(user);
      })
      .catch((err) => {
        alert("ユーザーの作成に失敗しました。");
        console.log(err);
      });
  };

  return (
    <SInputForm>
      <CircleAvater />
      <InputOption
        type={"text"}
        placeholder={"ユーザー名"}
        label={"ユーザー名:"}
        value={userName}
        setValue={setUserName}
      />
      <InputOption
        type={"email"}
        placeholder={"メールアドレス"}
        label={"メールアドレス:"}
        value={emailAddress}
        setValue={setEmailAddress}
      />
      <InputOption
        type={"password"}
        placeholder={"パスワード"}
        label={"パスワード:"}
        value={password}
        setValue={setPassword}
      />
      <InputOption
        type={"date"}
        placeholder={"生年月日"}
        label={"生年月日"}
        value={birthDay}
        setValue={setBirthDay}
      />
      <RadioOption label={"性別:"} setValue={setSexual} />
      <CheckOption label={"利用規約:"} setValue={setAgreement} />
      <Button onClick={signup}>サインアップ</Button>
    </SInputForm>
  );
};

const SInputForm = styled.div`
  padding: 20px;
  display: flex;
  flex-flow: column;
`;
