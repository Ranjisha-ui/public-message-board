import { theme } from "../constants/theme/theme";
import { CONTENTS } from "../constants/contents";

interface Post {
  id: number;
  name: string;
  message: string;
  createdAt: string;
}

interface MessageCardProps {
  post: Post;
  onView: () => void;
}

export default function MessageCard({ post, onView }: MessageCardProps) {
  // Short preview with line clamp for better readability
  const preview = post.message.length > 150 
    ? post.message.slice(0, 150) + "..." 
    : post.message;

  return (
    <div
      className="p-6 rounded-2xl transition-all hover:-translate-y-1 hover:shadow-xl"
      style={{
        backgroundColor: theme.colors.surface,
        borderRadius: theme.radius.xl,
        boxShadow: theme.shadows.md,
        transition: `all ${theme.transitions.normal}`,
      }}
    >
      <div className="flex justify-between items-start mb-4">
        <h3
          className="text-xl font-bold"
          style={{ color: theme.colors.textPrimary }}
        >
          {post.name}
        </h3>
        <span
          className="text-sm opacity-80"
          style={{ color: theme.colors.textSecondary }}
        >
          {new Date(post.createdAt).toLocaleDateString()}
        </span>
      </div>

      <p
        className="mb-6 leading-relaxed line-clamp-4"
        style={{ color: theme.colors.textSecondary }}
      >
        {preview}
      </p>

      <button
        onClick={onView}
        className="px-6 py-3 rounded-xl font-medium text-white transition-all hover:scale-105"
        style={{
          backgroundColor: theme.colors.primary,
        }}
      >
        {CONTENTS.ACTIONS.VIEW}
      </button>
    </div>
  );
}