import styled from "@emotion/styled";
import { Dispatch } from "react";
type Props = {
  setImage: Dispatch<React.SetStateAction<FileList | null>>;
};

export const InputFileButton = (props: Props) => {
  const { setImage } = props;
  return (
    <SInputFileButton>
      プロフィール画像を選択
      <SInputFile
        type="file"
        accept="image/*"
        onChange={(e) => setImage(e.target.files)}
      />
    </SInputFileButton>
  );
};

const SInputFile = styled.input`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
`;

const SInputFileButton = styled.div`
  border: solid 1px #000;
  padding: 8px;
  display: inline-block;
  position: relative;
  margin: 10px auto;
  border-radius: 5px;
`;
