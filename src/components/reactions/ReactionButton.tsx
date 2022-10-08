import { h } from 'preact';
import { useState } from 'preact/hooks';

const emojiMap = {
  like: '👍',
  dislike: '👎',
  heart: '💖',
  think: '🤔',
  tada: '🎉',
  dev: '🧑‍💻',
};

const ReactionButton = ({ reaction, count, setReactions, slug }) => {
  const [isClicked, setIsClicked] = useState(false);

  const sendReaction = async (e) => {
    e.preventDefault();

    // disable buttons
    setIsClicked(true);

    const response = await fetch(
      `/api/kv-reaction?slug=${slug}&reaction=${reaction}`,
      { method: 'POST' }
    );
    const data = await response.json();
    setReactions(data);

    // re-enable buttons
    setIsClicked(false);
  };

  return (
    <button
      className="reaction__list__btn"
      onClick={sendReaction}
      disabled={isClicked}
      aria-label={`react to this post with the ${reaction} emoji`}
      title={`react to this post with the ${reaction} emoji`}
    >
      <span className="emoji">{emojiMap[reaction]}</span>
      {count}
    </button>
  );
};

export default ReactionButton;
