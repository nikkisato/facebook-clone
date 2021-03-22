import React from 'react';
import './StoryReel.css';
import Story from '../Story/Story';
function StoryReel() {
  return (
    <div className='storyReel'>
      <Story
        image='https://images.pexels.com/photos/3312275/pexels-photo-3312275.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
        profileSrc='https://avatars.githubusercontent.com/u/54095031?s=460&u=14e93c13a499ed2810cb65a6301f676dc77f5531&v=4'
        title='Nikki Sato'
      />
      <Story
        image='https://images.pexels.com/photos/1662296/pexels-photo-1662296.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
        profileSrc='https://images.pexels.com/photos/1034859/pexels-photo-1034859.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
        title='Ava Motive'
      />
      <Story
        image='https://images.pexels.com/photos/5582999/pexels-photo-5582999.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
        profileSrc='https://images.pexels.com/photos/845457/pexels-photo-845457.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
        title='Andrea Piacquadio'
      />
      <Story
        image='https://images.pexels.com/photos/3657421/pexels-photo-3657421.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
        profileSrc='https://images.pexels.com/photos/445109/pexels-photo-445109.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
        title='Trinity Kubassek'
      />
      <Story
        image='https://images.pexels.com/photos/6830317/pexels-photo-6830317.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
        profileSrc='https://images.pexels.com/photos/4493795/pexels-photo-4493795.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
        title='Bia Sousa'
      />
    </div>
  );
}

export default StoryReel;
