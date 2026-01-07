import MessageGrid from "./MessageGrid";
import Button from "../../ui/Button";
import { CONTENTS } from "../../constants/contents";
import { Message } from "./type";
import AddMessageModal from "./addMessageModal";
import ViewMessageModal from "./viewMessageModal";

interface Props {
  messages: Message[];
  selected: Message | null;
  isAddOpen: boolean;
  isViewOpen: boolean;
  onOpenAdd: () => void;
  onCloseAdd: () => void;
  onView: (msg: Message) => void;
  onCloseView: () => void;
  onPosted: () => void;
}

export default function MessageBoardLayout(props: Props) {
  return (
    <>
      <header className="page-navbar">
        <div className="navbar-left">{CONTENTS.APP_TITLE}</div>
        <div className="navbar-right">
          <Button onClick={props.onOpenAdd}>{CONTENTS.ADD_MESSAGE_BUTTON}</Button>
        </div>
      </header>

      <main>
        <MessageGrid messages={props.messages} onViewMessage={props.onView} />
      </main>

      <AddMessageModal
        open={props.isAddOpen}
        onClose={props.onCloseAdd}
        onPosted={props.onPosted}
      />

      <ViewMessageModal
        open={props.isViewOpen}
        onClose={props.onCloseView}
        message={props.selected}
      />
    </>
  );
}
