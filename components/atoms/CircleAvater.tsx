import styled from "@emotion/styled";
type Props = {
  image: File | null;
};
export const CircleAvater = (props: Props) => {
  const { image } = props;
  return image ? (
    <SCircleAvater src={image ? URL.createObjectURL(image) : ""} alt={""} />
  ) : (
    <SImageNullAvater />
  );
};

const SCircleAvater = styled.img`
  display: block;
  border-style: none;
  height: 80px;
  width: 80px;
  margin: auto;
  border-radius: 50%;
  background-color: #e0e8e8;
`;

const SImageNullAvater = styled.div`
  border-style: none;
  height: 80px;
  width: 80px;
  margin: auto;
  border-radius: 50%;
  background-color: #e0e8e8;
`;
