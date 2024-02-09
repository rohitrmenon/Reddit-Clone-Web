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
import { useState } from "react";

export default function CreateCommunityModal() {
  const [input, setInput] = useState<string>();
  return (
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
          >
            <p
              style={{ fontSize: "12px", marginLeft: "4px", color: "GrayText" }}
            >
              Community names including capitalization cannot be changed.
            </p>
            <Input
              type="text"
              placeholder="Enter the name of the community"
              onChange={(e) => setInput(e.target.value)}
            />
            <p style={{ fontSize: "12px", marginLeft: "4px", color: "red" }}>
              {input?.length === 0 && "The community name cannot be empty"}
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
              onClick={() => input?.length !== 0 && alert("Create")}
            >
              Create
            </Button>,
          ]}
          divider
        />
      </ModalContainer>
    </Modal>
  );
}
