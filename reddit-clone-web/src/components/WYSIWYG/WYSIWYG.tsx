import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { CreatePostPayload, PostValidator } from "@/lib/validators/post";
import { zodResolver } from "@hookform/resolvers/zod";
import type EditorJS from "@editorjs/editorjs";
import { TextArea, EditorContainer, WYSIWYGEditor } from "./style";
import { useCreatePost } from "@/hooks/useCreatePost";
import { usePathname, useRouter } from "next/navigation";

interface WYSIWYGProps {
  userId: string | undefined;
  subredditId: string;
}

const WYSIWYG = ({ userId: authorId, subredditId }: WYSIWYGProps) => {
  const ref = useRef<EditorJS>();
  const editorMountRef = useRef<boolean>(false);
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<null>();
  const pathname = usePathname();
  const router = useRouter();
  useEffect(() => {
    const init = async () => {
      initialiseEditor();
    };
    if (editorMountRef.current === false) {
      init();
    }

    return () => {
      editorMountRef.current = true;
      ref.current?.destroy();
    };
  }, []);
  const { mutateAsync, error, data, isSuccess } = useCreatePost(
    title,
    content,
    subredditId,
    authorId
  );

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

  async function onSubmit(data: CreatePostPayload) {
    console.log(Object.keys(errors));
    const blocks = await ref?.current?.save();
    data.content = blocks;
    setTitle(data.title);
    setContent(data.content);
    const response = await mutateAsync();
    if (response) {
      const newPathname = pathname.split("/").slice(0, -1).join("/");
      router.push(newPathname);
      router.refresh();
    }
  }

  return (
    <EditorContainer>
      <form id="create-post-form" onSubmit={handleSubmit(onSubmit)}>
        <TextArea placeholder="Title" {...register("title")} />
        <WYSIWYGEditor id="editorjs" />
      </form>
    </EditorContainer>
  );
};

export default WYSIWYG;
