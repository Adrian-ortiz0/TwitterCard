import { useState } from "react";

export const TwitterFollowCard = ({ userName, name }) => {
  const [follow, setfollow] = useState(false);

  const text = follow ? "Siguiendo" : "Seguir";

  const buttonClassName = follow
    ? "tw-followCard-button is-following"
    : "tw-followCard-button";

  const onFollowChange = function () {
    setfollow(!follow);
  };

  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          src={`https://unavatar.io/x/${userName}`}
          alt="midu"
        />
        <div className="tw-followCard-info">
          <strong>{name}</strong>
          <span className="tw-followCard-infoUserName">@{userName}</span>
        </div>
        <aside>
          <button className={buttonClassName} onClick={onFollowChange}>
            {text}
          </button>
        </aside>
      </header>
    </article>
  );
};
