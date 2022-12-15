import styled from "@emotion/styled";
import Link from "next/link";
import { Dispatch } from "react";
import { CheckBox } from "../atoms/CheckBox";
type Props = {
  label: string;
  setValue: Dispatch<React.SetStateAction<boolean>>;
  link: string;
};
export const CheckOption = (props: Props) => {
  const { label, setValue, link } = props;
  return (
    <SCheckOption>
      <label>{label}</label>
      <Link href={link}>サービス利用規約はこちら</Link>
      <CheckBox label={"利用規約に同意する"} setValue={setValue} />
    </SCheckOption>
  );
};

const SCheckOption = styled.div`
  margin-top: 10px;
`;
