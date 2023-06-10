import React, { useEffect, useState } from 'react';
import { NavigateBefore, NavigateNext } from '@mui/icons-material';
// import SectionWrapper from '../../containers/SectionWrapper/SectionWrapper.container';
import {
  Container,
  StyledButton,
  CarouselContainer,
  ItemContainer,
  Inner,
  NavDots,
  Dot,
  carouselProps
} from './Carousel.styles';

import { testimonials } from '../../assets/data/testimonials';

export const CarouselItem = ({ children, width }: carouselProps) => {
  return <ItemContainer style={{ width }}>{children}</ItemContainer>;
};

const Carousel = ({ children, active }: carouselProps) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [paused, setPaused] = useState<boolean>(false);

  const updateIndex = (newIndex: number) => {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0;
    }

    setActiveIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        updateIndex(activeIndex + 1);
      }
    }, 8000);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  return (
    <>
      <Container>
        <StyledButton
          bgColor="rgba(33, 15, 4, 0.3)"
          iconAfter={false}
          renderIcon={() => <NavigateBefore fontSize="small" />}
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
        />
        <CarouselContainer
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <Inner style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
            {children}
          </Inner>
        </CarouselContainer>
        <StyledButton
          bgColor="rgba(33, 15, 4, 0.3)"
          renderIcon={() => <NavigateNext fontSize="small" />}
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        />
      </Container>
      <NavDots>
        {testimonials.map((item, index) => (
          <Dot key={item.username + item.text} active={index === activeIndex} />
        ))}
      </NavDots>
    </>
  );
};

export default Carousel;
