type BusListAnimation = Readonly<{
  hidden: Record<string, unknown>;
  appear: Record<string, unknown>;
}>;

/**
 * 버스 목록 컨테이너 애니메이션
 * 목록은 특별한 애니메이션을 적용하지는 않고,
 * 키워드 설정과 자식 아이템 간격을 조정한다.
 */
export const BUS_CONTAINER_ANIMATION: BusListAnimation = {
  hidden: {},
  appear: {
    transition: {
      staggerChildren: 0.04,
    },
  },
};

/**
 * 버스 목록 아이템 애니메이션
 */
export const BUS_ITEM_ANIMATION: BusListAnimation = {
  hidden: { opacity: 0, y: 20 },
  appear: { opacity: 1, y: 0 },
};

/**
 * 버스 목록 아이템 hover 상태 애니메이션
 */
export const BUS_ITEM_HOVER_ANIMATION = {
  scale: 1.025,
} as const;
