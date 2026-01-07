import MessageGrid from "./MessageGrid";
import Button from "../ui/Button";
import { CONTENTS } from "../constants/contents";
import { Message } from "./type";
import AddMessageModal from "./addMessageModal";

interface MessageGridProps {
  messages: Message[];
  isAddOpen: boolean;
  onOpenAdd: () => void;
  onCloseAdd: () => void;
  onPosted: () => void;
}

export default function MessageBoardLayout(props: MessageGridProps) {
  return (
    <>
      <header className="page-navbar">
        <div className="navbar-left">{CONTENTS.APP_TITLE}</div>
        <div className="navbar-right">
          <Button onClick={props.onOpenAdd}>
            {CONTENTS.ADD_MESSAGE_BUTTON}
          </Button>
        </div>
      </header>

      <main>
  <MessageGrid messages={props.messages} />  {/* Removed onViewMessage */}
</main>

      <AddMessageModal
        open={props.isAddOpen}
        onClose={props.onCloseAdd}
        onPosted={props.onPosted}
      />
    </>
  );
}
