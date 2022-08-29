import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { changeField } from "../../modules/writeSlice";
import Responsive from "../common/Responsive";
import Editor from "./Editor";
import ImageUpload from "./ImageUpload";
import TagBox from "./TagBox";
import WriteActionButton from "./WriteActionButton";
import CountryName from "../common/CountryName";

const WriteViewerBlock = styled(Responsive)`
  margin-top: 64px;
`;

const WriteViewer = () => {
  const dispatch = useDispatch();
  const { city } = useParams();
  const { name, description, tags, image } = useSelector(({ write }) => ({
    name: write.name,
    description: write.description,
    tags: write.tags,
    image: write.image,
  }));

  const onChangeField = useCallback(
    (payload) => {
      dispatch(changeField(payload));
    },
    [dispatch]
  );

  return (
    <WriteViewerBlock>
      <CountryName>
        <h1>{city.toUpperCase()}</h1>
      </CountryName>
      <Editor
        onChangeField={onChangeField}
        name={name}
        description={description}
      />
      <ImageUpload onChangeField={onChangeField} image={image} />
      <TagBox onChangeField={onChangeField} tags={tags} />
      <WriteActionButton city={city} />
    </WriteViewerBlock>
  );
};

export default WriteViewer;
