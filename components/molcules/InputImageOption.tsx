import styled from "@emotion/styled";
import { Dispatch, ReactEventHandler } from "react";
import { CircleAvater } from "../atoms/CircleAvater";
import { InputFileButton } from "../atoms/InputFileButton";
type Props = {
  setImage: Dispatch<React.SetStateAction<FileList | null>>;
  image: FileList | null;
};

export const InputImageOption = (props: Props) => {
  const { setImage, image } = props;
  return (
    <SInputImageOption>
      <CircleAvater image={image ? URL.createObjectURL(image[0]) : null} />
      <InputFileButton setImage={setImage} />
    </SInputImageOption>
  );
};

const SInputImageOption = styled.div`
  text-align: center;
`;
