import { click } from "@testing-library/user-event/dist/click";
import React, { useEffect, useRef, useState } from "react";
import { BiTargetLock } from "react-icons/bi";
import Title from "../../../admin/atom/Navigation/NavTitle";
import { Navigate, useNavigate } from "react-router-dom";

// 가게 정보 타입 정의
type Store = {
  store_id: number;
  store_name: string;
  store_address: string;
  store_latitude: number;
  store_longitude: number;
};

// MyMap 컴포넌트 props 타입 정의
type MyMapProps = {
  results: Store[]; // 가게 목록
  onMarkerHover: (store_id: number | null) => void; // 마커 호버 시 호출될 함수
  hoveredMarker: number | null; // 현재 호버된 마커의 ID
};

const MyMap = ({ results, onMarkerHover, hoveredMarker }: MyMapProps) => {
  const navigate = useNavigate(); // 페이지 이동을 위한 hook
  const mapRef = useRef<HTMLDivElement>(null); // 지도 컨테이너 ref
  const [map, setMap] = useState<any>(null); // 지도 객체 상태
  const [markers, setMarkers] = useState<
    { marker: any; infowindow: any; storeId: number }[]
  >([]); // 마커 상태

  // 지도 초기화
  useEffect(() => {
    const { kakao } = window as any; // 카카오맵 API 가져오기
    if (!kakao) return;

    const container = mapRef.current; // 카카오맵을 그릴 div요소를 가져온다.
    const options = {
      center: new kakao.maps.LatLng(37.489457, 126.7223953), // 초기 중심 좌표
      level: 5, // 초기 줌 레벨
    };
    const mapInstance = new kakao.maps.Map(container, options); // 지도 생성
    setMap(mapInstance);

    // 줌 컨트롤 추가
    const zoomControl = new kakao.maps.ZoomControl();

    // 지도의 컨트롤러를 오른쪽에 배치
    mapInstance.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
  }, []);

  // 마커와 인포윈도우 설정
  useEffect(() => {
    if (!map) return;

    // 기존 마커 제거
    markers.forEach((markerObj) => markerObj.marker.setMap(null));
    setMarkers([]);

    // 새 마커 생성 및 설정
    const newMarkers = results.map((store, index) => {
      const position = new kakao.maps.LatLng(
        store.store_latitude, //매장의 위도
        store.store_longitude //매장의 경도
      );

      // 각 매장에 대한 마커 객체 생성
      const marker = new kakao.maps.Marker({
        map: map, //마커를 표시할 지도 객체
        position: position, //마커의 위치
        title: store.store_name, // 마커의 타이틀
      });

      // 인포윈도우 내용 생성
      const infowindowContent = `
       <div style="padding:5px; width:300px;">
         <div style="font-size:18px; font-weight: 700;">${store.store_name}</div>
         <div style="font-size:14px;">${store.store_address}</div>
         <a href="/information/${store.store_id}" 
            id="infowindow-link-${store.store_id}" 
            target="_blank"
            rel="noopener noreferrer"
            style="display:inline-block; cursor:pointer; padding:5px; background-color:#007bff; color:white; text-decoration:none; margin-top:10px; width:100%; text-align:center;">
           상세 정보 보기
         </a>
       </div>
     `;
     
      // 인포윈도우 객체 생성
      const infowindow = new kakao.maps.InfoWindow({
        content: infowindowContent, // 위에서 만든 HTML 내용을 인포윈도우 내용으로 설정
        zIndex: 10, // 인포윈도우의 z-index 설정
        removable: true, // 닫기 버튼 표시 여부
      });

      // 마커 클릭 이벤트 설정
      kakao.maps.event.addListener(marker, "click", () => {
        newMarkers.forEach(({ infowindow }) => infowindow.close()); // 모든 인포윈도우 닫기
        infowindow.open(map, marker); // 클릭한 마커의 인포윈도우 열기

        // 버튼 클릭 이벤트 설정
        setTimeout(() => {
          const button = document.getElementById(
            `infowindow-button-${store.store_id}`
          );
          if (button) {
            button.removeEventListener("click", handleButtonClick);
            button.addEventListener("click", handleButtonClick);
          }
        }, 0);
      });

      // 버튼 클릭 핸들러
      function handleButtonClick() {
        console.log("Store Data:", {
          id: store.store_id,
          name: store.store_name,
          address: store.store_address,
          latitude: store.store_latitude,
          longitude: store.store_longitude,
        });
        navigate(`/information/${store.store_id}`); // 상세 정보 페이지로 이동
      }

      // 첫 번째 결과로 지도 중심 이동
      if (index === 0) {
        map.setCenter(position);
      }

      return { marker, infowindow, storeId: store.store_id };
    });

    setMarkers(newMarkers);

    // 지도 클릭 시 모든 인포윈도우 닫기
    kakao.maps.event.addListener(map, "click", () => {
      newMarkers.forEach(({ infowindow }) => infowindow.close());
    });
  }, [results, map]);

  // 마커 호버 기능
  useEffect(() => {
    if (hoveredMarker !== null) {
      const targetMarker = markers.find(
        (markerObj) => markerObj.storeId === hoveredMarker
      );
      if (targetMarker) {
        markers.forEach(({ infowindow }) => infowindow.close()); // 모든 인포윈도우 닫기
        targetMarker.infowindow.open(map, targetMarker.marker); // 호버된 마커의 인포윈도우 열기
      }
    } else {
      markers.forEach(({ infowindow }) => infowindow.close()); // 모든 인포윈도우 닫기
    }
  }, [hoveredMarker, markers, map]);

  // 현재 위치로 이동 함수
  const handleCurrentLocation = () => {
    const { kakao } = window as any;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        const locPosition = new kakao.maps.LatLng(latitude, longitude);
        map.setCenter(locPosition); // 현재 위치로 지도 중심 이동

        // 현재 위치에 마커 추가
        const marker = new kakao.maps.Marker({
          position: locPosition,
          map: map,
        });
        setMarkers((prevMarkers) => [
          ...prevMarkers,
          { marker, infowindow: null, storeId: -1 },
        ]);
      });
    } else {
      alert("현재 위치를 가져올 수 없습니다.");
    }
  };

  // 컴포넌트 렌더링
  return (
    <div className="relative h-full w-full">
      <div ref={mapRef} className="h-full w-full"></div>
      <button
        className="absolute top-48 right-0 bg-white p-2 rounded-full flex items-center justify-center z-50"
        onClick={handleCurrentLocation} // 현재 위치로 이동 버튼
      >
        <BiTargetLock className="text-black text-2xl" />
      </button>
    </div>
  );
};

export default MyMap;
