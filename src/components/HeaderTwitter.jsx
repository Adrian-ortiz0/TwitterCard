import {
  faBell,
  faBookmark,
  faEllipsis,
  faEnvelope,
  faHashtag,
  faHouse,
  faRectangleList,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const HeaderTwitter = () => {
  return (
    <>
      <div className="personalMenuContainer">
        <div>
          <FontAwesomeIcon icon={faHouse} fontSize={20} />
          <a href="#">Home</a>
        </div>
        <div>
          <FontAwesomeIcon icon={faHashtag} fontSize={20}/>
          <a href="#">Explore</a>
        </div>
        <div>
          <FontAwesomeIcon icon={faBell} fontSize={20}/>
          <a href="#">Notifications</a>
        </div>
        <div>
          <FontAwesomeIcon icon={faEnvelope} fontSize={20}/>
          <a href="#">Messages</a>
        </div>
        <div>
          <FontAwesomeIcon icon={faBookmark} fontSize={20}/>
          <a href="#">Bookmarks</a>
        </div>
        <div>
          <FontAwesomeIcon icon={faRectangleList} fontSize={20}/>
          <a href="#">Lists</a>
        </div>
        <div>
          <FontAwesomeIcon icon={faUser} fontSize={20}/>
          <a href="#">Profile</a>
        </div>
        <div>
          <FontAwesomeIcon icon={faEllipsis} fontSize={20}/>
          <a href="#">More</a>
        </div>
      </div>
    </>
  );
};
