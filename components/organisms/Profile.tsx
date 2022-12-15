import styled from "@emotion/styled";
import { User } from "firebase/auth";
import { DocumentData } from "firebase/firestore";
import { CircleAvater } from "../atoms/CircleAvater";

type Props = {
  profileImageURL: string | null;
  currentUser: User | null | undefined;
  user: DocumentData | undefined;
};
export const Profile = (props: Props) => {
  const { profileImageURL, currentUser, user } = props;
  return (
    <SProfile>
      <CircleAvater image={profileImageURL} />
      <p>メールアドレス:{currentUser?.email}</p>
      <p>誕生日:{user?.birthDay}</p>
      <p>性別:{user?.sexual}</p>
    </SProfile>
  );
};
const SProfile = styled.div`
  padding: 20px;
  font-size: 14px;
  @media (min-width: 640px) {
    padding: 20px 150px;
    font-size: 18px;
  }
`;
