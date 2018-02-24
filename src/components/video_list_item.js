import React from 'react';
import VideoDetail from './video_detail';

const VideoListItem = ({video}) => { //equivalent to video = prop.video
    const imageUrl = video.snippet.thumbnails.default.url;
    const title = video.snippet.title;
    return (
        <li className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src = {imageUrl} />
                </div>
                <div className="media-body">
                    <div className="media-heading">{title}</div>
                    <VideoDetail video = {video} />
                </div>
            </div>
        </li>
    );
};

export default VideoListItem;