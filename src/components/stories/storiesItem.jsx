import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"

const StoriesItem = ({ story, selectStory }) => {
    const dispatch = useDispatch()
    const watched = useSelector((state) => state.stories.watched)

    return (
        <div
            className="stories-item"
            onClick={() => {
                selectStory(story)
                dispatch.stories.setWatched(story._id)
            }}
        >
            <img
                style={{
                    border: `2px solid ${
                        watched[story._id] ? "#5c5c5c" : "#d8effd"
                    }`,
                }}
                src={story.img}
                alt="story image"
            />
            <p>Акции</p>
        </div>
    )
}

export default StoriesItem
