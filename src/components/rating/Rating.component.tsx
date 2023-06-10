import React from 'react';
import StarPurple500OutlinedIcon from '@mui/icons-material/StarPurple500Outlined';
import { RatingNum, ratingProps, Stars } from './Rating.styles';

const Rating = ({ rating = 4, ratedNum }: ratingProps) => {
  return (
    <Stars>
      {[...Array(5)].map((star, index) => (
        <StarPurple500OutlinedIcon
          key={index}
          style={{
            padding: '0px 1px',
            fontSize: '16px',
            color: index < rating ? '#F5C92F' : 'grey'
          }}
        />
      ))}
      <RatingNum>
        {`${rating}.0`}
        {ratedNum && (
          <span style={{ marginLeft: '3px' }}>{`(${ratedNum})`}</span>
        )}
      </RatingNum>
    </Stars>
  );
};

export default Rating;
