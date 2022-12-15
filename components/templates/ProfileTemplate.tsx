import styled from "@emotion/styled";
import { async } from "@firebase/util";
import { User } from "firebase/auth";
import { doc, DocumentData, getDoc } from "firebase/firestore";
import { getDownloadURL, ref } from "firebase/storage";
import { useEffect, useState } from "react";
import { db, storage } from "../../firebase";
import { Header } from "../organisms/Header";
import { Profile } from "../organisms/Profile";

type Props = {
  currentUser: User | null | undefined;
};
export const ProfileTemplate = (props: Props) => {
  const { currentUser } = props;
  const [user, setUser] = useState<DocumentData | undefined>();
  const [profileImageURL, setProfileImageURL] = useState<string | null>(null);

  const getCurrentUser = async () => {
    const userDocRef = doc(db, `users/${currentUser?.uid}`);
    const userDoc = await getDoc(userDocRef);
    setUser(userDoc.data());
  };

  const getProfileImage = async () => {
    const profileImageRef = ref(storage, `users/${currentUser?.uid}/profile`);
    await getDownloadURL(profileImageRef).then((url) => {
      setProfileImageURL(url);
    });
  };

  useEffect(() => {
    if (currentUser) {
      getCurrentUser();
      getProfileImage();
    }
  }, [currentUser]);

  return (
    <>
      <Header>ユーザー名</Header>
      <Profile
        profileImageURL={profileImageURL}
        currentUser={currentUser}
        user={user}
      />
    </>
  );
};
