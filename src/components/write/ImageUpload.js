import { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import palette from "../../lib/style/palette";
import Button from "../common/Button";
import { ImageBlock } from "../common/ImageBlock";

const ImageUploadBlock = styled.div`
  width: 100%;
  padding-top: 32px;
  padding-bottom: 32px;
  border-top: 1px solid ${palette.gray[2]};
`;

const ImageUpload = ({ onChangeField, image }) => {
  const [imageSrc, setImageSrc] = useState(null);
  const fileInput = useRef();

  const encodeFileToBase64 = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    return new Promise((resolve) => {
      reader.onload = () => {
        setImageSrc(reader.result);
        resolve();
      };
    });
  };

  const onClick = useCallback(() => {
    fileInput.current.click();
  }, [fileInput]);

  const onChange = (e) => {
    encodeFileToBase64(e.target.files[0]);
  };

  useEffect(() => {
    if (imageSrc) {
      onChangeField({ key: "image", value: imageSrc });
    }
  }, [imageSrc, onChangeField]);

  return (
    <ImageUploadBlock>
      <Button onClick={onClick}>이미지 업로드</Button>
      <input
        type="file"
        style={{ display: "none" }}
        ref={fileInput}
        onChange={onChange}
        accept="image/*"
      />
      {image && (
        <ImageBlock>
          <img src={image} alt="preview" />
        </ImageBlock>
      )}
    </ImageUploadBlock>
  );
};

export default ImageUpload;
