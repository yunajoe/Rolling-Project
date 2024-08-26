import { useEffect, useContext } from "react";
import LocaleContext from "../contexts/LocaleContext";
export const useKaKao = () => {
  const { Kakao } = window;
  const { id, name } = useContext(LocaleContext);

  useEffect(() => {
    const jsKey = "4044b3d4c1b332a8f736a3eabf26eefe";
    Kakao.cleanup();
    Kakao.init(jsKey);
  }, []);

  const shareKakao = () => {
    Kakao.Link.sendCustom({
      templateId: 100601,
      templateArgs: {
        id: id,
        message: `${name}님께 그동안 하지 못했던 속마음을 전해보세요`,
        THU: "https://media.discordapp.net/attachments/1172446291884769373/1174277548377645096/40d7a939fa3bc82b_.jpg?ex=65670230&is=65548d30&hm=418e93e0934ab3ec319eaec3f396efd5be3d2d92cec12c9be8b7799e992aa715&=&width=549&height=549",
      },
    });
  };

  return shareKakao;
};
