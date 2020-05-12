import React, { useEffect, useState } from 'react';

const Dimensions = () => {
  const [dementions, setDemensions] = useState({
    width: null,
    height: null,
  });

  useEffect(() => {
    const {innerHeight, innerWidth} = window;
    setDemensions({width: innerWidth, height: innerHeight });

    const handleResize = e => {
      const {innerHeight, innerWidth} = e.target;
      setDemensions({width: innerWidth, height: innerHeight});

    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  const {width, height} = dementions;

    return (
      <div className="dimensions">{`${width} - ${height}`}</div>
    );
};

export default Dimensions;