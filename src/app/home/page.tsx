"use client";

import { useState, useEffect } from "react";
import { theme } from "./constants/theme/theme";
import { CONTENTS } from "./constants/contents";
import MainHeader from "./components/mainHeader";
import AddMessageModal from "./components/AddMessageModal";
import MessageCard from "./components/MessageCard";
import ViewMessageModal from "./components/ViewMessageModal";

interface Post {
  id: number;
  name: string;
  message: string;
  createdAt: string;
}

export default function Home() {
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [isViewOpen, setIsViewOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchPosts = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/messages");
      if (res.ok) {
        const data = await res.json();
        setPosts(data);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleAddSuccess = () => {
    fetchPosts();
  };

  const openView = (post: Post) => {
    setSelectedPost(post);
    setIsViewOpen(true);
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: theme.colors.background,
        color: theme.colors.textPrimary,
        fontFamily: theme.fonts.body,
        padding: "2rem 1rem",
      }}
    >
      <MainHeader onOpenAddModal={() => setIsAddOpen(true)} />

      <div className="max-w-7xl mx-auto mt-12">
        {loading ? (
          <p className="text-center text-xl" style={{ color: theme.colors.textSecondary }}>
            {CONTENTS.LOADING}
          </p>
        ) : posts.length === 0 ? (
          <p className="text-center text-xl" style={{ color: theme.colors.textSecondary }}>
            {CONTENTS.EMPTY_STATE.NO_MESSAGES}
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {posts.map((post) => (
              <MessageCard
                key={post.id}
                post={post}
                onView={() => openView(post)}
              />
            ))}
          </div>
        )}
      </div>
      <AddMessageModal
        isOpen={isAddOpen}
        onClose={() => setIsAddOpen(false)}
        onSuccess={handleAddSuccess}
      />

      <ViewMessageModal
        isOpen={isViewOpen}
        onClose={() => setIsViewOpen(false)}
        post={selectedPost}
      />
    </main>
  );
}