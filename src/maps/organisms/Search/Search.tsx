import React, { useRef, useState } from "react";
import axios from "axios";
import HeaderSection from "../../molecules/HeaderSection/HeaderSection";
import SearchSection from "../../molecules/SearchSection/SearchSection";
import SearchResults, { Store } from "../../atom/SearchResults/SearchResults";
import SortBtn from "../../molecules/sortBtn/SortBtn";
import { MAP_SEARCH } from "../../../Urls/URLList";

// 검색 관련 프롭스 정의
type SearchProps = {
  setResults: React.Dispatch<React.SetStateAction<Store[]>>;
  onMarkerHover: (storeId: number | null) => void;
};

const Search = ({ setResults, onMarkerHover }: SearchProps) => {
  //검색어 상태 관리
  const [query, setQuery] = useState("");

  // 검색 결과 상태 관리
  const [results, setResultsState] = useState<Store[]>([]);

  // 정렬 옵션 상태 관리
  // const [sortOption, setSortOption] = useState<string>("");

  // 결과 목록 컨테이너 ref
  const resultsContainerRef = useRef<HTMLUListElement>(null);

  // 검색 함수
  const handleSearch = async () => {
    try {
      // 가게이름 또는 가게주소안에 검색어가 포함되면 해당 데이터 가져옴
      const response = await axios.get<Store[]>(MAP_SEARCH(query));

      //검색 결과를 상태관리에 저장해준다.
      setResultsState(response.data);

      //부모 객체로 상태를 보내주기위해 setResults 함수에도 결과를 보내준다.
      setResults(response.data);
    } catch (error) {
      console.error("검색 결과를 가져오는 중 오류 발생:", error);
    }
  };

  //키보드 이벤트함수
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    //엔터를 누르면 함수실행
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  // 정렬함수
  const handleSort = (sortOption: string) => {
    // 검색데이터를 가져옴
    let sortedResults = [...results];
    // 만약 선택한 버튼이 review 옵션이라면 뒤에 있는 검색결과 에서 리뷰수를 뺀다.
    // 그래서 양수라면 그대로 음수라면 뒤에있는 가게가 앞으로 오게된다.
    if (sortOption === "review") {
      sortedResults.sort((a, b) => b.reviewCount - a.reviewCount);

      // 별점도 리뷰수 정렬과 비슷하다.
    } else if (sortOption === "rating") {
      sortedResults.sort((a, b) => b.store_rating - a.store_rating);
    }
    setResultsState(sortedResults);

    if (resultsContainerRef.current) {
      resultsContainerRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="bg-npLG w-px415 flex flex-col h-full">
      <HeaderSection />
      <div>
        <SearchSection
          query={query}
          setQuery={setQuery} // 자식객체 상태올려주기
          handleSearch={handleSearch} //검색클릭하면 작동
          handleKeyPress={handleKeyPress} // 엔터눌러도 작동
        />
        <SortBtn // 정렬하는 함수
          setSortOption={handleSort}
        />
        <SearchResults //검색결과가 나오는 컴포넌트
          results={results} //결과 저장
          onMarkerHover={onMarkerHover} // 
          ref={resultsContainerRef}
        />
      </div>
    </div>
  );
};

export default Search;
