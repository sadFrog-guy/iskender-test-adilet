import React from 'react';

const StoriesItem = ({ story, selectStory }) => {
  return (
    <div className='stories-item' onClick={() => selectStory(story)}>
      <img src={story.img} alt='story image' />
    </div>
  );
};

export default StoriesItem;
