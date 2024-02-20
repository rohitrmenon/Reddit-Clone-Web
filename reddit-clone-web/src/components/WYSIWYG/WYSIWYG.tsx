import { useCallback, useRef ,useState} from "react";
import { useForm } from "react-hook-form";
import { CreatePostPayload, PostValidator } from "@/lib/validators/post";
import { zodResolver } from "@hookform/resolvers/zod";
import type EditorJS from "@editorjs/editorjs";
import routes from "@/lib/routes";
import { TextArea, WYSIWYGEditorContainer } from "./style";
interface WYSIWYGProps {
  userId: string | undefined;
  subredditId: string;
}
const WYSIWYG = ({ userId: authorId, subredditId }: WYSIWYGProps) => {
  const ref = useRef<EditorJS>();
  const [isMounted, setIsMounted] = useState<boolean>(false)

  const initialiseEditor = useCallback(async () => {
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
          alert("Editor.js has been initialized");
        },
        placeholder: "Write something...",
        inlineToolbar: true,
        data: {
          blocks: [],
        },
        tools: {
          header: Header,
          linkTool: {
            class: LinkTool,
            config: {
              endpoint: routes.post.link(),
            },
          },
          list: List,
          code: Code,
          inlineCode: InlineCode,
          table: Table,
          embed: Embed,
        },
      });
    }
    initialiseEditor();
  }, []);
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
    <WYSIWYGEditorContainer>
      <form id="create-post-form" onSubmit={() => {}}>
        <TextArea placeholder="Title" />
      </form>
    </WYSIWYGEditorContainer>
  );
};

export default WYSIWYG;
