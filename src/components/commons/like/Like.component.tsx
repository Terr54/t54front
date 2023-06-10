import { ThumbDownAltOutlined, ThumbUpAltOutlined } from '@mui/icons-material';
import React from 'react';
import { Container, likeProps, Span, Thumb } from './Like.styles';

const Like = ({ like, likes, dislikes, handleLikes, handleDislikes }: likeProps) => {
  return (
    <Container>
      {like
        ? (
        <Thumb>
            <ThumbUpAltOutlined style={{ color: '#00893A', fontSize: '13px', marginRight: '6px' }} onClick={handleLikes} />
            <Span color='#00893A' margin='0px 10px 0px 0px'>
                {likes}
            </Span>
        </Thumb>
          )
        : (
        <Thumb>
            <ThumbDownAltOutlined style={{ color: 'red', fontSize: '13px', marginRight: '4px' }} onClick={handleDislikes} />
            <Span color='red'>
                {dislikes}
            </Span>
        </Thumb>
          )}
    </Container>
  );
};

export default Like;
