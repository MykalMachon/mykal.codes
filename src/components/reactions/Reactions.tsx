import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import ReactionButton from './ReactionButton';

const Reactions = ({ slug }) => {
  const [reactions, setReactions] = useState<any | null>(null);

  // do an initial data fetch
  useEffect(() => {
    const fetchReactions = async () => {
      const response = await fetch(`/api/kv-reaction/?slug=${slug}`);
      const data = await response.json();
      console.log(data);
      setReactions(data);
    };

    fetchReactions();
  }, []);

  return (
    <section>
      <h3>Reactions</h3>
      {reactions === null ? (
        <p>fetching reactions...</p>
      ) : (
        <ul className="reactions__list">
          {Object.entries(reactions).map(([reaction, count]) => (
            <li>
              <ReactionButton
                reaction={reaction}
                count={count}
                setReactions={setReactions}
                slug={slug}
              />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Reactions;
