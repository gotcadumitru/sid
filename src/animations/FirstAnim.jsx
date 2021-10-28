import React from 'react';
import { useEffect } from 'react';

const FirstAnim = () => {
  useEffect(() => {
    let first = document.querySelector('.first-wrapper');
    first.classList.add('show');
  }, []);
  return <div>First</div>;
};
export default FirstAnim;
