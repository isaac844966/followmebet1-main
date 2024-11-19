import Wrapper from "../assets/wrapper/Features2";
import { featuresCard } from "../data";
import phone from "../images/phone2.svg";

const Features2 = () => {
  return (
    <Wrapper>
      <div className="bg3" id="features2">
        <section>
          <h1>
            Secure. User friendly.
            <br />
            <span>Fun & fair.</span>
          </h1>
          <div className="align-center">
            <div className="img-container">
              <img
                src={phone}
                alt="Features of FollowMebet"
                className="phone"
                loading="lazy"
                title="Features of FollowMebet"
              />
            </div>

            <div className="cards">
              {featuresCard.map((item) => {
                const { img, title, text, id } = item;
                return (
                  <div className="card" key={id}>
                    <div>
                      <img
                        src={img}
                        alt="phone"
                        loading="lazy"
                        title="Features of FollowMebet"
                      />
                    </div>

                    <div className="items">
                      <h2>{title}</h2>
                      <p>{text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </Wrapper>
  );
};

export default Features2;
