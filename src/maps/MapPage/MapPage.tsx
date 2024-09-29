import { useState } from "react";
import MyMap from "../atom/maps/MyMap";
import Search from "../organisms/Search/Search";
import { Store } from "../atom/SearchResults/SearchResults";

const MapPage = () => {
  const [results, setResults] = useState<Store[]>([]); // Store[] 타입으로 초기화
  const [hoveredMarker, setHoveredMarker] = useState<number | null>(null); // hover된 마커의 storeId 상태

  const handleMarkerHover = (storeId: number | null) => {
    setHoveredMarker(storeId);
  };

  return (
    <div className="flex h-screen gap-1">
      <Search // 검색 사이드바 컴포넌트
        setResults={setResults} // 결과 상태정보를 담아준다.
        onMarkerHover={handleMarkerHover} //리스트에서 호버한 가게의 storeId 상태 저장
      />

      <div className="flex-grow">
        <MyMap //지도 컴포넌트
          results={results} //
          onMarkerHover={handleMarkerHover}
          hoveredMarker={hoveredMarker}
        />
      </div>
    </div>
  );
};

export default MapPage;
