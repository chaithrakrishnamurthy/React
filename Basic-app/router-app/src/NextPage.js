import React from 'react';
import { useParams } from 'react-router-dom';

const NextPage = () => {
    const {text} = useParams();
  return (
    <div>
      <h1>Text from previous Page:</h1>
      <p> {text}</p>
    </div>
  );
};

export default NextPage;
