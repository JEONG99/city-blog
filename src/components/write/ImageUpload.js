import { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import palette from "../../lib/style/palette";
import Button from "../common/Button";

const ImageUploadBlock = styled.div`
  width: 100%;
  padding-top: 32px;
  padding-bottom: 32px;
  border-top: 1px solid ${palette.gray[2]};
`;

const ImagePreviewBlock = styled.div`
  width: 200px !important;
  height: 140px;
  margin-top: 16px;
  border-radius: 16px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 16px;
  }
`;

const ImageUpload = ({ onChangeField }) => {
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
      {imageSrc && (
        <ImagePreviewBlock>
          <img src={imageSrc} alt="preview" />
        </ImagePreviewBlock>
      )}
    </ImageUploadBlock>
  );
};

export default ImageUpload;
