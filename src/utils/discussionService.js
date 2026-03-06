/**
 * Discussion comments storage.
 * Uses localStorage by default. For shared comments across users,
 * replace with Firebase/Supabase API calls.
 */
const STORAGE_KEY = "portfolio_discussion_comments";
const VISITOR_KEY = "portfolio_visitor_id";

function getVisitorId() {
  try {
    let id = localStorage.getItem(VISITOR_KEY);
    if (!id) {
      id = "v_" + Date.now() + "_" + Math.random().toString(36).slice(2, 10);
      localStorage.setItem(VISITOR_KEY, id);
    }
    return id;
  } catch {
    return null;
  }
}

export function getComments() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveComment(comment) {
  const comments = getComments();
  const visitorId = getVisitorId();
  const newComment = {
    id: Date.now().toString(36) + Math.random().toString(36).slice(2),
    author: comment.author || "Anonymous",
    text: comment.text,
    createdAt: new Date().toISOString(),
    visitorId,
  };
  comments.unshift(newComment);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(comments));
  return newComment;
}

export function getVisitorIdForDisplay() {
  return getVisitorId();
}
