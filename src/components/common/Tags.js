import styled from "styled-components";
import palette from "../../lib/style/palette";

const TagsBlock = styled.div`
  margin-top: 8px;
  .tag {
    color: ${palette.cyan[7]};
    margin-right: 8px;
  }
`;

const Tags = ({ tags }) => {
  return (
    <TagsBlock>
      {tags.map((tag) => (
        <span className="tag" key={tag}>
          #{tag}
        </span>
      ))}
    </TagsBlock>
  );
};

export default Tags;
