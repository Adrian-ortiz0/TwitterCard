import { useState } from "react";
import { TwitterFollowCard } from "./TwitterFollowCard";
import { useLikeShare } from "../hooks/useLikeShare";

export const FotoContainer = () => {
  const { like, shared, onLikeChange, onShareChange } = useLikeShare();

  return (
    <>
      <div className="containerPost">
        <TwitterFollowCard userName="midudev" name="Miguel" />
        <div className="imageCard">
          <img src="src/images/foto1.png" alt="" />
        </div>
        <div className="iconsContainer">
          <div className="btnUsuario">
            <p>{like}</p>
            <button onClick={onLikeChange}>
              <img src="src/images/like_icon.svg" alt="" width={20} />
            </button>
          </div>
          <div className="btnUsuario">
            <p>{shared}</p>
            <button onClick={onShareChange}>
              <img src="src/images/repost_icon.svg" alt="" width={20} />
            </button>
          </div>
          <div className="btnUsuario">
            <p>0</p>
            <button>
              <img src="src/images/comment_icon.svg" alt="" width={20} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
