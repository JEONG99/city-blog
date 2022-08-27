import { useCallback, useState } from "react";
import styled from "styled-components";
import palette from "../../lib/style/palette";

const TagBoxBlock = styled.div`
  width: 100%;
  h4 {
    color: ${palette.gray[8]};
    margin-top: 0;
    margin-bottom: 8px;
  }
`;

const TagForm = styled.form`
  border-radius: 4px;
  overflow: hidden;
  display: flex;
  width: 256px;
  border: 1px solid ${palette.gray[9]};
  input,
  button {
    outline: none;
    border: none;
    font-size: 16px;
  }
  input {
    padding: 8px;
    flex: 1;
    min-width: 0;
  }
  button {
    cursor: pointer;
    padding: 0 16px;
    background: ${palette.gray[8]};
    color: white;
    font-weight: bold;
    &:hover {
      background: ${palette.gray[6]};
    }
  }
`;

const TagListBlock = styled.div`
  display: flex;
  margin-top: 8px;
`;

const Tag = styled.div`
  margin-right: 8px;
  color: ${palette.gray[6]};
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`;

const TagItem = ({ tag, onRemove }) => {
  return <Tag onClick={() => onRemove(tag)}>#{tag}</Tag>;
};

const TagList = ({ tags, onRemove }) => {
  return (
    <TagListBlock>
      {tags.map((tag) => (
        <TagItem key={tag} tag={tag} onRemove={onRemove} />
      ))}
    </TagListBlock>
  );
};

const TagBox = ({ onChangeField }) => {
  const [localTags, setLocalTags] = useState([]);
  const [input, setInput] = useState("");

  const onChange = useCallback((e) => {
    setInput(e.target.value);
  }, []);

  const insertTag = useCallback(
    (tag) => {
      if (!tag) return;
      if (localTags.includes(tag)) return;
      const nextTags = [...localTags, tag];
      setLocalTags(nextTags);
      onChangeField({ key: "tags", value: nextTags });
    },
    [localTags, onChangeField]
  );

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      insertTag(input.trim());
      setInput("");
    },
    [input, insertTag]
  );

  const onRemoveTag = useCallback(
    (tag) => {
      const nextTags = localTags.filter((t) => t !== tag);
      setLocalTags(nextTags);
      onChangeField({ key: "tags", value: nextTags });
    },
    [localTags, onChangeField]
  );

  return (
    <TagBoxBlock>
      <h4>태그</h4>
      <TagForm onSubmit={onSubmit}>
        <input
          placeholder="태그를 입력하세요"
          onChange={onChange}
          value={input}
        />
        <button type="submit">추가</button>
      </TagForm>
      <TagList tags={localTags} onRemove={onRemoveTag} />
    </TagBoxBlock>
  );
};

export default TagBox;
