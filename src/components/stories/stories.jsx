import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import StoriesItem from './storiesItem';
import StoriesModal from './storiesModal';

const Stories = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [story, setStory] = useState(null);
  const stories = useSelector((state) => state.stories.data);
  const {
    stories: { getStories },
  } = useDispatch();

  const handleClick = (story) => {
    setModalOpen(true);
    setStory(story);
  };

  const handleSelect = (story) => {
    setStory(story);
  };

  useEffect(() => {
    getStories();
  }, []);
  console.log(stories);
  return (
    <div className='stories container'>
      <div className='stories-items'>
        {stories.map((story) => (
          <StoriesItem
            selectStory={handleClick}
            key={story._id}
            story={story}
          />
        ))}
      </div>
      {modalOpen && (
        <StoriesModal
          selectStory={handleSelect}
          stories={stories}
          story={story}
          close={() => setModalOpen(false)}
        />
      )}
    </div>
  );
};

export default Stories;
