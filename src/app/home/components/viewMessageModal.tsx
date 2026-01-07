import Modal from "../ui/Modal";

import ViewMessageContent from "./viewMessageContent";
import { CONTENTS } from "../constants/contents";
import { Message } from "./type";

export default function ViewMessageModal({ open, onClose, message }: { open: boolean; onClose: () => void; message: Message | null }) {
  return (
    <Modal isOpen={open} onClose={onClose} title={CONTENTS.VIEW_MODAL.TITLE}>
      {message && <ViewMessageContent post={message} />}
    </Modal>
  );
}