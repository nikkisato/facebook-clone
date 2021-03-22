import React from 'react';
import './Feed.css';
import StoryReel from '../StoryReel/StoryReel';
import MessageSender from '../MessageSender/MessageSender';
import Post from '../Post/Post';

function Feed() {
  return (
    <div className='feed'>
      <StoryReel />
      <MessageSender />
      <Post
        profilePic='https://avatars.githubusercontent.com/u/54095031?s=460&u=14e93c13a499ed2810cb65a6301f676dc77f5531&v=4'
        message='message'
        timestamp='timestamp'
        username='nikki'
        image='https://images.pexels.com/photos/1662296/pexels-photo-1662296.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
      />
      <Post
        profilePic='https://avatars.githubusercontent.com/u/54095031?s=460&u=14e93c13a499ed2810cb65a6301f676dc77f5531&v=4'
        message='message'
        timestamp='timestamp'
        username='nikki'
      />
      <Post />
      <Post />
    </div>
  );
}

export default Feed;
