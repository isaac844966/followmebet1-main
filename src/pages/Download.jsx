import Phone4 from "../images/phone4.png";
import Android from "../images/Android.png";
import Wrapper from "../assets/wrapper/Download";
import { Helmet } from "react-helmet-async";

const Download = () => {
  return (
    <>
      <Helmet>
        <title>Download page</title>
        <meta
          name="description"
          content="Click now to dowload the Followmebet app both on android and ios"
        />
        <link rel="canonical" href="/download" />
      </Helmet>
      <Wrapper>
        <section className=" bg3 downloads">
          <div className="download-section">
            <div className="downloads-content">
              <h1>
                Download the <br /> Latest FollowMeBet
                <br /> Android App!
              </h1>
              <a href="https://folomebet.s3.us-east-1.amazonaws.com/App/prod/FollowMeBet.apk">
                <img
                  src={Android}
                  alt="Android"
                  title="Downlaod the app now"
                  loading="lazy"
                />
              </a>
            </div>
            <div className="phone1">
              <img
                src={Phone4}
                alt="phone"
                title="Downlaod the app now"
                loading="lazy"
              />
            </div>
          </div>

          <div className="phone-content">
            <h2>Why am I downloading the app this way?</h2>
            <p>
              Google does not allow regulated gambling apps in the Play Store,
              so you will need to download the Android APK from here in order to
              access our app.
            </p>
          </div>
        </section>
      </Wrapper>
    </>
  );
};

export default Download;
