import React, { forwardRef } from "react";

import MapInfoBtn from "../Button/MapInfoBtn";

import { useNavigate } from "react-router-dom";
import InfoSetStar from "../../../detailPage/atom/InfoSetStar";

export type Store = {
  store_id: number; //가게의 ID
  store_name: string; // 가게의 이름
  store_address: string; // 가게 주소
  store_latitude: number; // 가게 x축
  store_longitude: number; //가게 y축
  store_rating: number; // 가게 별점
  reviewCount: number; // 리뷰 수
  img: string; //이미지
};

// 검색결과 바의 프롭스 정의
type SearchResultsProps = {
  results: Store[];
  user_id?: number;
  onMarkerHover: (storeId: number | null) => void;
};

const SearchResults = forwardRef<HTMLUListElement, SearchResultsProps>(
  ({ results, onMarkerHover }: SearchResultsProps, ref) => {
    if (results.length === 0) {
      return <div className="p-3">검색 결과가 없습니다.</div>;
    }

    const handleListHover = (storeId: number | null) => {
      onMarkerHover(storeId);
    };

    // 매장 이동
    const handleListClick = (storeId: number) => {
      window.open(`/information/${storeId}`, "_blank");
    };

    return (
      <ul ref={ref} className="mt-4 h-[900px] overflow-y-scroll">
        {results.map((result, index) => (
          <li
            key={index}
            className="border p-2 mb-2 hover:bg-skipMB transition-colors duration-200 hover:cursor-pointer"
            onMouseEnter={() => {
              handleListHover(result.store_id);
            }}
            onMouseLeave={() => {
              handleListHover(null);
            }}
            onClick={() => {
              handleListClick(result.store_id); // 해당하는 매장 이동
            }}
          >
            <div className="w-full h-70">
              <img
                className="w-full h-full object-cover"
                src={`${result.img}`}
                alt={`${result.store_name}`}
              />
            </div>
            <div>이름: {result.store_name}</div>
            <div>주소: {result.store_address}</div>
            <div className="flex gap-1 text-sm">
              <InfoSetStar content={result.store_rating} />
              <span>리뷰: {result.reviewCount}</span>
            </div>
          </li>
        ))}
      </ul>
    );
  }
);
SearchResults.displayName = "SearchResults";
export default SearchResults;
