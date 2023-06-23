import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import farming from '../../assets/pictures/farming.png';
import { Container } from './Cultivation.styles';
import BlogContent from '../../components/blog-content/BlogContent.component';
import Subscribe from '../../components/subscribe/Subscribe.component';
import Blog1 from '../../components/blog-content/Blog1.component';
import Blog2 from '../../components/blog-content/Blog2.component';
import Blog3 from '../../components/blog-content/Blog3.component';

const Cultivation = () => {
  const location = useLocation();
  const { id } = useParams();
  console.log('od', id);
  return (
    <Container>
      <div>
        {id === '1' && <Blog1 />}
        {id === '2' && <Blog2 />}
        {id === '3' && <Blog3 />}
      </div>
      <Subscribe />
    </Container>
  );
};

export default Cultivation;
