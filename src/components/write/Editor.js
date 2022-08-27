import Quill from "quill";
import "quill/dist/quill.bubble.css";
import { useCallback, useEffect, useRef } from "react";
import styled from "styled-components";
import palette from "../../lib/style/palette";
import Responsive from "../common/Responsive";

const EditorBlock = styled(Responsive)`
  padding-top: 40px;
  padding-bottom: 80px;
`;

const TitleInput = styled.input`
  font-size: 32px;
  outline: none;
  padding-bottom: 8px;
  border: none;
  border-bottom: 1px solid ${palette.gray[4]};
  margin-bottom: 32px;
  width: 100%;
`;

const QuillWrapper = styled.div`
  .ql-editor {
    padding: 0;
    min-height: 320px;
    font-size: 18px;
    line-height: 1.5;
  }
  .ql-editor.ql-blank::before {
    left: 0px;
  }
`;

const Editor = ({ onChangeField }) => {
  const quillElement = useRef(null);
  const quillInstance = useRef(null);

  useEffect(() => {
    quillInstance.current = new Quill(quillElement.current, {
      theme: "bubble",
      placeholder: "내용을 작성하세요...",
      modules: {
        toolbar: [
          [{ header: "1" }, { header: "2" }],
          ["bold", "italic", "underline", "strike"],
          [{ list: "ordered" }, { list: "bullet" }],
          ["blockquote", "code-block", "link", "image"],
        ],
      },
    });
    const quill = quillInstance.current;
    quill.on("text-change", () => {
      onChangeField({ key: "description", value: quill.root.innerHTML });
    });
  }, [onChangeField]);

  const onChangeTitle = useCallback(
    (e) => {
      onChangeField({ key: "name", value: e.target.value });
    },
    [onChangeField]
  );

  return (
    <EditorBlock>
      <TitleInput
        placeholder="도시 이름을 입력하세요"
        onChange={onChangeTitle}
      />
      <QuillWrapper>
        <div ref={quillElement} />
      </QuillWrapper>
    </EditorBlock>
  );
};

export default Editor;
