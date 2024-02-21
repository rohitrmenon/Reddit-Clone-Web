import { useEffect, useRef, lazy} from "react";
import { useForm } from "react-hook-form";
import { CreatePostPayload, PostValidator } from "@/lib/validators/post";
import { zodResolver } from "@hookform/resolvers/zod";
import type EditorJS from "@editorjs/editorjs";
import { TextArea, EditorContainer, WYSIWYGEditor } from "./style";

interface WYSIWYGProps {
  userId: string | undefined;
  subredditId: string;
}
const WYSIWYG = ({ userId: authorId, subredditId }: WYSIWYGProps) => {
  const ref = useRef<EditorJS>();

  useEffect(() => {
    const initialise = async () => {
      await initialiseEditor();
    };
    initialise();
  }, []);

  const initialiseEditor = async () => {
    const EditorJS = (await import("@editorjs/editorjs")).default;
    const Header = (await import("@editorjs/header")).default;
    const List = (await import("@editorjs/list")).default;
    const Embed = (await import("@editorjs/embed")).default;
    const Table = (await import("@editorjs/table")).default;
    const Image = (await import("@editorjs/image")).default;
    const LinkTool = (await import("@editorjs/link")).default;
    const InlineCode = (await import("@editorjs/inline-code")).default;
    const Code = (await import("@editorjs/code")).default;

    if (!ref.current) {
      const editor = new EditorJS({
        holder: "editorjs",
        onReady() {
          ref.current = editor;
        },
        placeholder: "Write something...",
        inlineToolbar: true,
        data: {
          blocks: [],
        },
        tools: {
          header: Header,
          list: List,
          code: Code,
          inlineCode: InlineCode,
          table: Table,
          embed: Embed,
        },
      });
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreatePostPayload>({
    resolver: zodResolver(PostValidator),
    defaultValues: {
      title: "",
      content: null,
      authorId,
      subredditId,
    },
  });

  return (
    <EditorContainer>
      <form id="create-post-form" onSubmit={() => {}}>
        <TextArea placeholder="Title" />
        <WYSIWYGEditor id="editorjs" />
      </form>
    </EditorContainer>
  );
};

export default WYSIWYG;
