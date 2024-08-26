import { useState, useEffect, useRef } from "react";

import CardList from "./CardList";
import useWindowWidthCheck from "../../hooks/useWindowWidthCheck";

const CARD_MARGIN = 36;

const getVisibleCardCount = (size, data) => {
  // 테블릿 및 모바일 사이즈에 따라 다른 가시 카드 수를 반환
  return size
    ? Math.min(data.length / 1.9, data.length)
    : Math.min(3.9, data.length);
};

const calculateTransform = (
  size,
  currentIndex,
  containerWidth,
  visibleCount,
  deltaX = 0,
) => {
  const cardWidth = size
    ? Math.trunc(containerWidth / visibleCount) + CARD_MARGIN
    : Math.trunc(containerWidth / visibleCount);

  return `translateX(${-currentIndex * cardWidth + deltaX}px)`;
};

const CardListContainer = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startX, setStartX] = useState(0);
  const isTabletOrMobile = useWindowWidthCheck(1199);

  const containerRef = useRef();

  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    const touchX = e.touches[0].clientX;
    const deltaX = touchX - startX;
    const containerWidth = containerRef.current.offsetWidth;
    const visibleCount = getVisibleCardCount(isTabletOrMobile, data);

    // 처음 또는 마지막 카드에서 더 이상 스크롤하지 못하도록 설정
    if (
      (currentIndex === 0 && deltaX > 0) ||
      (currentIndex === data.length - visibleCount && deltaX < 0)
    ) {
      return;
    }

    // 최대 스크롤 거리 계산
    const maxScrollDistance = (data.length - visibleCount) * containerWidth;

    // deltaX를 최대 스크롤 거리와 비교하여 조정
    const adjustedDeltaX = Math.max(deltaX, -maxScrollDistance);

    // 부드러운 이동을 위해 transition을 일시적으로 제거
    containerRef.current.style.transition = "none";

    // 변환 계산 함수를 사용하여 현재 인덱스와 조정된 deltaX를 기반으로 새로운 transform 설정
    containerRef.current.style.transform = calculateTransform(
      isTabletOrMobile,
      currentIndex,
      containerWidth,
      visibleCount,
      adjustedDeltaX,
    );
  };

  const handleTouchEnd = (e) => {
    const containerWidth = containerRef.current.offsetWidth;
    const visibleCount = getVisibleCardCount(isTabletOrMobile, data);
    const newTouchEndX = e.changedTouches[0].clientX;
    const threshold = containerWidth / 100;

    // 우측으로 스와이프
    if (
      startX - newTouchEndX > threshold &&
      currentIndex < data.length - visibleCount
    ) {
      setCurrentIndex((prevIndex) =>
        Math.min(prevIndex + 1, data.length - visibleCount),
      );
    }

    // 좌측으로 스와이프
    if (startX - newTouchEndX < -threshold && currentIndex > 0) {
      setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    }

    // 스와이프 완료 후 부드러운 이동을 위한 transition 설정
    containerRef.current.style.transition = "transform 0.3s ease-in-out";
  };

  const handleNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const handlePrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
  };

  // 컴포넌트가 렌더링될 때 초기 위치 설정
  useEffect(() => {
    const containerWidth = containerRef.current.offsetWidth;
    const visibleCount = getVisibleCardCount(isTabletOrMobile, data);

    containerRef.current.style.transform = calculateTransform(
      isTabletOrMobile,
      currentIndex,
      containerWidth,
      visibleCount,
    );
  }, [currentIndex, data]);

  return (
    <CardList
      data={data}
      containerRef={containerRef}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onNextSlide={handleNextSlide}
      onPrevSlide={handlePrevSlide}
      currentIndex={currentIndex}
    />
  );
};

export default CardListContainer;
