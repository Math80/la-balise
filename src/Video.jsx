import React from 'react';


function Video() {
  return (
    <div className="Video">
      <div>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/W49_MjVOJXE" title='myvid1' frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
      <div>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/zUW3JyLtYsQ" title='myvid2' frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
    </div>
  )
}
export default Video;
