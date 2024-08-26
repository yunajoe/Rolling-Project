import { useState, useEffect } from "react";
import getRecipientReactions from "./../apis/getRecipientReactions";

/**
 * 수신자에 대한 이모지 데이터를 관리하는 Hook
 *
 * @param {string} recipientId - 이모지 데이터를 가져올 수신자의 ID
 * @returns {Object[]} - 이모지 데이터 배열
 * @property {string} Object.emoji - 이모지 문자열
 * @property {number} Object.count - 이모지가 사용된 횟수
 */
const useEmoji = (recipientId) => {
  const [emojiData, setEmojiData] = useState([]);

  const updateEmojiData = async () => {
    try {
      const response = await getRecipientReactions({ recipientId });

      if (response.result.results) {
        setEmojiData(() =>
          response.result.results.map((value) => ({
            emoji: value.emoji,
            count: value.count,
          })),
        );
      }
    } catch (error) {
      console.error("Error updating emoji data:", error);
    }
  };

  useEffect(() => {
    updateEmojiData();
  }, [recipientId]);

  return emojiData;
};

export default useEmoji;
