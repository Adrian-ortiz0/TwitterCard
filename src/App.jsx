import { FotoContainer } from "./components/FotoContainer";
import { TwitterFollowCard } from "./components/TwitterFollowCard";

export const App = () => {
  return (
    <>
      <div className="maxContainer">
        <FotoContainer />
        <section className="sectionApp">
          <TwitterFollowCard userName="midudev" name="Miguel" />
          <TwitterFollowCard userName="lilpeep" name="Angela" />
          <TwitterFollowCard userName="duki" name="Juana" />
        </section>
      </div>
    </>
  );
};
