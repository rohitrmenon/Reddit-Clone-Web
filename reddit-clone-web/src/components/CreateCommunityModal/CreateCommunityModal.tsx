import { useState } from "react";
import { Session } from "next-auth";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import {
  Button,
  Modal,
  ModalTrigger,
  ModalContainer,
  ModalContent,
  ModalHeader,
  ModalFooter,
  Input,
} from "@/ui";
import { CreateSubredditPayload } from "@/lib/validators/subreddit";

import Alert from "../Common/Alert";
import { useCreateSubreddit } from "@/hooks/useCreateSubreddit";

export default function CreateCommunityModal() {
  const [name, setName] = useState<string>("");
  const [openAlert, setOpenAlert] = useState<boolean>(false);

  const { data: session } = useSession();
  const router = useRouter();

  const body: CreateSubredditPayload = {
    name,
    creatorId: session?.user.id as string,
  };

  const { mutateAsync, error, isError, reset } = useCreateSubreddit(
    body,
    session as Session
  );

  const handleClick = async () => {
    if (!session) {
      setOpenAlert(true);
      return;
    }
    try {
      const result = await mutateAsync();
      router.push(`/y/${result.name}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {openAlert && (
        <Alert
          description="You must be logged in to create a community"
          open={openAlert}
          setOpen={setOpenAlert}
        />
      )}
      {isError && (
        <Alert
          description={error?.message as string}
          open={isError}
          setOpen={reset}
        />
      )}
      <Modal>
        <ModalTrigger asChild>
          <div>
            <Button variant="stroke">Create Community</Button>
          </div>
        </ModalTrigger>
        <ModalContainer>
          <ModalHeader title="Create Community" />
          <ModalContent css={{ height: "150px" }}>
            <form
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
                justifyContent: "center",
              }}
              onSubmit={(e) => e.preventDefault()}
            >
              <p
                style={{
                  fontSize: "12px",
                  marginLeft: "4px",
                  color: "GrayText",
                }}
              >
                Community names including capitalization cannot be changed.
              </p>
              <Input
                type="text"
                placeholder="Enter the name of the community"
                onChange={(e) => setName(e.target.value)}
              />
              <p style={{ fontSize: "12px", marginLeft: "4px", color: "red" }}>
                {name?.length === 0 && "The community name cannot be empty"}
              </p>
            </form>
          </ModalContent>
          <ModalFooter
            size="sm"
            variant="buttonOnlyRight"
            rightButtons={[
              // eslint-disable-next-line react/jsx-key
              <Button
                variant="primary"
                size="md"
                onClick={() => {
                  name.length !== 0 && handleClick();
                }}
              >
                Create
              </Button>,
            ]}
            divider
          />
        </ModalContainer>
      </Modal>
    </>
  );
}
