import React, { useState } from 'react';

const Artwork = () => {
  const [title, setTitle] = useState('Artwork');

  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
};

export default Artwork;
