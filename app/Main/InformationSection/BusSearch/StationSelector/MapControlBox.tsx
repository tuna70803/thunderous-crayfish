import RefreshUserLocationButton from './RefreshUserLocationButton';
import ReSearchButton from './ReSearchButton';

interface MapControlBoxProps {
  onRefreshUserLocation: () => void;
  onReSearchStations: () => void;
}

/**
 * 맵 컨트롤 박스 컴포넌트
 * 맵에서 사용할 여러가지 컨트롤들을 가지고 있는 투명한 박스다.
 * 컨트롤들은 맵의 우하단에 표시한다.
 * @param onRefreshUserLocation - 사용자 위치 갱신 이벤트 핸들러
 * @param onReSearchStations - 정류소 재검색 이벤트 핸들러
 */
const MapControlBox = ({
  onRefreshUserLocation,
  onReSearchStations,
}: MapControlBoxProps) => {
  return (
    <div className="absolute bottom-0 right-0 z-10 flex flex-col gap-1 bg-transparent p-2">
      <RefreshUserLocationButton onClick={onRefreshUserLocation} />
      <ReSearchButton onClick={onReSearchStations} />
    </div>
  );
};

export default MapControlBox;
