import { Star as StarIcon } from 'lucide-react';

interface FavoriteIconProps {
  isFavorited: boolean;
}

/**
 * 즐겨찾기 아이콘 컴포넌트
 * 즐겨찾기 여부에 맞는 아이콘을 표시한다.
 * @param isFavorited - 즐겨찾기 등록 여부
 */
const FavoriteIcon = ({ isFavorited }: FavoriteIconProps) => {
  if (!isFavorited) {
    return <StarIcon size={20} stroke={NOT_FAVORITE_COLOR} />;
  }

  return <StarIcon size={20} stroke={FAVORITE_COLOR} fill={FAVORITE_COLOR} />;
};

/**
 * 등록된 즐겨찾기 컬러
 */
const FAVORITE_COLOR = '#f7dc6f';

/**
 * 등록안된 즐겨찾기 컬러
 */
const NOT_FAVORITE_COLOR = '#9e9e9a';

export default FavoriteIcon;
