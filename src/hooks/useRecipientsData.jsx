import { useEffect, useState } from "react";
import getRecipientsList from "../apis/getRecipientsList";

const MIN_MESSAGE_COUNT = 5; // 최소 5개 메시지가 있는 롤링페이퍼만 필터링하도록 설정
const DAYS_TO_FILTER = 3; // 최근 3일 데이터만 필터링하도록 설정

const sortDataByMessageCount = (data) => {
  return [...data]
    .filter((value) => value?.messageCount >= MIN_MESSAGE_COUNT)
    .sort((a, b) => b?.messageCount - a?.messageCount);
};

const sortDataByDate = (data) => {
  const currentDate = new Date();
  const filterDate = currentDate.setDate(
    currentDate.getDate() - DAYS_TO_FILTER,
  );

  return [...data]
    .filter((value) => new Date(value?.createdAt) >= filterDate)
    .sort((a, b) => new Date(b?.createdAt) - new Date(a?.createdAt));
};

/**
 * 수신자 데이터를 관리하는 Hook
 *
 * @returns {Object} - 수신자 데이터 및 로딩 상태
 * @property {Object[]} data.popular - 인기순으로 정렬된 수신자 데이터 배열
 * @property {Object[]} data.recent - 최근에 생성된 순으로 정렬된 수신자 데이터 배열
 * @property {boolean} loading - 데이터 로딩 상태
 */
const useRecipientsData = () => {
  const [data, setData] = useState({ popular: [], recent: [] });
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const initialResponse = await getRecipientsList({ limit: 1 });
      const count = (await initialResponse?.result?.count) || 0;

      const response = await getRecipientsList({ limit: count });
      const responseData = response?.result?.results || [];

      const sortedPopularData = sortDataByMessageCount(responseData);
      const sortedRecentData = sortDataByDate(responseData);

      setData({ popular: sortedPopularData, recent: sortedRecentData });
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error.message || error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, loading };
};

export default useRecipientsData;
