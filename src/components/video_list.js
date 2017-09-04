import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => { 
    const videoItems = props.videos.map((video) => {
        return <VideoListItem key={video.etag} video ={video}/> // video is the props used in video_list_item.js
    });

    return (
        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>
    )
};

export default VideoList;