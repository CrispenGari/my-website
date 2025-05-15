import "./HomeCard.css";
import { useNavigate } from "react-router-dom";

type TLeason = {
  imgURL: string;
  title: string;
  description: string;
  btnTitle: string;
  currentPrice: number;
  previousPrice: number;
};
type TProject = {
  imgURL: string;
  title: string;
  description: string;
  btnTitle: string;
};

const isLeason = (obj: TLeason | TProject): obj is TLeason => {
  return "currentPrice" in obj;
};

function HomeCard<T extends TLeason | TProject>({ data }: { data: T }) {
  const navigate = useNavigate();
  const navigateToEmail = () => {
    const prop = `${
      data.btnTitle.toLowerCase() === "request"
        ? "TUTORSHIP"
        : "PROJECT PROPOSAL"
    } - ${data.title}`.replace(/\s/g, "%20");
    if (isLeason(data)) {
      navigate({
        pathname: `email/${prop}`,
      });
    }
  };
  return (
    <div className="home__card">
      <img src={data.imgURL} alt="home-card" />
      <h1>{data.title}</h1>
      <p>{data.description}</p>
      {isLeason(data) ? (
        <div className="home__card__prices">
          {data.previousPrice && <h3>R {data.previousPrice} p/w</h3>}
          {data.currentPrice && <h2>R {data.currentPrice} p/w</h2>}
        </div>
      ) : null}
      <button
        onClick={navigateToEmail}
        className={
          data.btnTitle.toLowerCase() === "request"
            ? "home__card__btn"
            : "home__card__btn--primary"
        }
      >
        {data.btnTitle}
      </button>
    </div>
  );
}

export default HomeCard;
