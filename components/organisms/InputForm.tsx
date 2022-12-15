import styled from "@emotion/styled";
import { useState } from "react";
import { Button } from "../atoms/Button";
import { CheckOption } from "../molcules/AgreementOption";
import { InputOption } from "../molcules/InputOption";
import { RadioOption } from "../molcules/RadioOption";
import { auth, db, storage } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { InputImageOption } from "../molcules/InputImageOption";
import { doc, setDoc } from "firebase/firestore";
import { ref, uploadBytes } from "firebase/storage";
import Link from "next/link";
import Router from "next/router";

export const InputForm = () => {
  const [profileImage, setProfileImage] = useState<FileList | null>(null);
  const [userName, setUserName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [birthDay, setBirthDay] = useState("");
  const [sexual, setSexual] = useState("");
  const [agreement, setAgreement] = useState(false);
  const signup = () => {
    createUserWithEmailAndPassword(auth, emailAddress, password)
      .then((userCredencial) => {
        const userDocRef = doc(db, `users/${userCredencial.user.uid}`);
        const userStorageRef = ref(
          storage,
          `users/${userCredencial.user.uid}/profile`
        );
        setDoc(userDocRef, {
          uid: userCredencial.user.uid,
          userName: userName,
          emailAddress: emailAddress,
          password: password,
          birthDay: birthDay,
          sexual: sexual,
        });

        if (profileImage) {
          uploadBytes(userStorageRef, profileImage[0]);
        }
        Router.push("/profile");
      })
      .catch(() => {
        alert("ユーザーの作成に失敗しました。");
      });
  };

  return (
    <SInputForm>
      <InputImageOption setImage={setProfileImage} image={profileImage} />
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
`;
