'use client';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import FavoriteIcon from './FavoriteIcon';

interface FavoriteProps {
  className: string;
  isFavorited: boolean;
  onFavorite: (isFavorited: boolean) => void;
}

/**
 * 즐겨찾기 컴포넌트
 * 즐겨찾기 등록여부를 표시한다.
 * 클릭하면 즐겨찾기에 등록하거나 해제할 수 있는 이벤트를 발생시킨다.
 * @param className - class name
 * @param isFavorited - 즐겨찾기 등록 여부
 * @param onFavorite - 즐겨찾기 변경 이벤트 핸들러
 */
const Favorite = ({ className, isFavorited, onFavorite }: FavoriteProps) => {
  const [favorited, setFavorited] = useState(false);
  useEffect(() => {
    setFavorited(isFavorited);
  }, [isFavorited]);

  return (
    <section>
      <Avatar
        className={cn('cursor-pointer', className)}
        onClick={() => onFavorite(isFavorited)}
      >
        <AvatarFallback>
          <FavoriteIcon isFavorited={favorited} />
        </AvatarFallback>
      </Avatar>
    </section>
  );
};

export default Favorite;
