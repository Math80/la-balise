import React from 'react';
import Histogram from 'react-chart-histogram';

function Results() {
  const labels = ['A', 'B', 'C','D'];
    const data = [11, 5, 8, 6];
    const options = { fillColor: '#FFFFFF', strokeColor: '#0000FF' };
  return(
    
    <div className="Results">
        <Histogram
            xLabels={labels}
            yValues={data}
            width='400'
            height='200'
            options={options}
        />
  </div>
  )
}
export default Results;
