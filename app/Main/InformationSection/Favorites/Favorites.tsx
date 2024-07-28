import { useEffect, useState } from 'react';
import { Dock, DockIcon } from '@/components/magicui/dock';
import useFavorites from '@/store/favorites';
import type { BusRoute, FavoriteBus } from '@/types';
import FavoriteItem from './FavoriteItem';

interface FavoritesProps {
  className?: string;
  onSelect: (bus: BusRoute) => void;
}

/**
 * 즐겨찾기 버스 목록 컴포넌트
 * 즐겨찾기로 등록한 버스 목록을 표시하고 클릭을 처리한다.
 * @param className - class name
 * @param onSelect - 즐겨찾기 아이템 선택 이벤트 핸들러
 */
const Favorites = ({ className, onSelect }: FavoritesProps) => {
  const [favorites, setFavorites] = useState<FavoriteBus>({});
  const savedFavorites = useFavorites((state) => state.favorites);
  useEffect(() => {
    setFavorites(savedFavorites);
  }, [savedFavorites]);

  if (Object.keys(favorites).length === 0) {
    return null;
  }

  return (
    <Dock
      className={className}
      direction="middle"
      magnification={50}
      distance={50}
    >
      {Object.entries(favorites).map(([key, bus]) => (
        <DockIcon key={key}>
          <FavoriteItem bus={bus} onSelect={onSelect} />
        </DockIcon>
      ))}
    </Dock>
  );
};

export default Favorites;
