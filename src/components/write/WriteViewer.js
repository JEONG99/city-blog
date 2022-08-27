import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { changeField } from "../../modules/writeSlice";
import Responsive from "../common/Responsive";
import Editor from "./Editor";
import ImageUpload from "./ImageUpload";
import TagBox from "./TagBox";
import WriteActionButton from "./WriteActionButton";

const CountryNameBlock = styled.div`
  width: 100%;
  padding-left: 16px;
  padding-right: 16px;
  margin-top: 50px;
  h1 {
    font-size: 48px;
    font-weight: 700;
    margin: 0;
  }
`;

const WriteViewer = () => {
  const dispatch = useDispatch();
  const { city } = useParams();

  const onChangeField = useCallback(
    (payload) => {
      dispatch(changeField(payload));
    },
    [dispatch]
  );

  return (
    <Responsive>
      <CountryNameBlock>
        <h1>{city.toUpperCase()}</h1>
      </CountryNameBlock>
      <Editor onChangeField={onChangeField} />
      <ImageUpload onChangeField={onChangeField} />
      <TagBox onChangeField={onChangeField} />
      <WriteActionButton city={city} />
    </Responsive>
  );
};

export default WriteViewer;
