import { useEffect, useState } from "react";

export const useLikeShare = () => {
  const [likes, setlikes] = useState(false);

  const like = likes ? 1 : 0;

  const onLikeChange = function () {
    setlikes(!like);
  };

  const [share, setshare] = useState(false);

  const shared = share ? 1 : 0;

  const onShareChange = function () {
    setshare(!shared);
  };

  useEffect(() => {
    if (share) {
      window.alert("Se ha compartido esta publicación!");
    }
  }, [share]);

  return { like, shared, onLikeChange, onShareChange };
};
