import Modal from "../ui/Modal";
import MessageForm from "../components/MessageForm";
import { CONTENTS } from "../constants/contents";

export default function AddMessageModal({ open, onClose, onPosted }: any) {
  return (
    <Modal isOpen={open} onClose={onClose} title={CONTENTS.ADD_MODAL.TITLE}>
      <MessageForm onSuccess={onPosted} onClose={onClose} />
    </Modal>
  );
}
