import { Message } from "./type";
import { CONTENTS } from "../constants/contents";

// View-only component (NO styling here)
export default function ViewMessageContent({ post }: { post: Message }) {
  return (
    <div className="view-message">
      <div>
        <p className="view-label">{CONTENTS.VIEW_MODAL.FROM_LABEL}</p>
        <p className="view-name">
          {post.name || CONTENTS.ANONYMOUS}
        </p>
      </div>

      <div>
        <p className="view-label">{CONTENTS.VIEW_MODAL.MESSAGE_LABEL}</p>
        <p className="view-message-text">{post.message}</p>
      </div>
      <div className="text-right">
        <p className="view-date">
          {CONTENTS.VIEW_MODAL.POSTED_ON} {new Date(post.createdAt).toLocaleString()}
        </p>
      </div>  
    </div>
  );
}
