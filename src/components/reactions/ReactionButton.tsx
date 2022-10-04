import { h } from 'preact';
import { useState } from 'preact/hooks';

const emojiMap = {
  like: '👍',
  dislike: '👎',
  joy: '😂',
  sad: '😢',
  heart: '💖',
};

const ReactionButton = ({ reaction, count, setReactions, slug }) => {
  const [isClicked, setIsClicked] = useState(false);

  const sendReaction = async (e) => {
    e.preventDefault();
    const response = await fetch(
      `/api/kv-reaction?slug=${slug}&reaction=${reaction}`,
      { method: 'POST' }
    );
    const data = await response.json();
    setReactions(data);
    // disable future clicks
    // setIsClicked(true);
  };

  return (
    <button
      className="reaction__list__btn"
      onClick={sendReaction}
      disabled={isClicked}
    >
      <span className="emoji">{emojiMap[reaction]}</span>
      {count}
    </button>
  );
};

export default ReactionButton;
