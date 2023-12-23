import styled from "styled-components";

const Wrapper = styled.section`
  .downloads .phone-content {
    padding: 58px 213px 89px;
  max-width: 1500px;
  margin: auto;
    background: #2e3192;
    background: -webkit-linear-gradient(
      276.1deg,
      #2e3192 16.7%,
      #fbb03b 136.83%
    );
    background: -moz-linear-gradient(276.1deg, #2e3192 16.7%, #fbb03b 136.83%);
    background: -o-linear-gradient(276.1deg, #2e3192 16.7%, #fbb03b 136.83%);
    background: linear-gradient(276.1deg, #2e3192 16.7%, #fbb03b 136.83%);
    border-radius: 20px;
    text-align: center;
  }

  .downloads .phone-content h2 {
    font-weight: 800;
    font-size: 34px;
    line-height: 140.62%;
    color: #ffffff;
  }

  .downloads-content {
    display: flex;
    flex-direction: column;
    gap: 30px;
    
  }

  .downloads .phone-content p {
    font-family: "Outfit";
    font-weight: 700;
    font-size: 20px;
    line-height: 140.62%;
    color: #cbd5e1;
  }

  .downloads .download-section {
    display: flex;
    gap: 6rem;
    padding-top:8rem;
    justify-content: center;
    padding-top:8.5rem
  }

  .downloads .download-section .downloads-content h1 {
    font-family: "Outfit";
    font-weight: 800;
    font-size: 50px;
    line-height: 120%;
    color: #ffffff;
  }

  .download-section .phone1 {
    margin-right: 10px;
    display: flex;
    align-items: center;
  }

  @media (max-width: 1204px) {
    .download-section {
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      gap: 30px;
    }
  }

  @media (max-width: 1204px) {
    .download-section {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 10px;
    }

    .downloads .phone-content {
      padding: 48px 133px 39px;
    }

    .downloads-content {
      display: flex;
      flex-direction: column;
      margin-bottom: 40px;
    }
    .download-section .phone1 {
      margin-right: 0px;
    }

    .downloads .download-section .downloads-content h1 {
      font-size: 46px;
    }
  }

  @media (max-width: 848px) {
    .download-section .phone1 img {
      width: 62vw;
    }

    .downloads-content {
      gap: 30px;
    }

    .downloads .phone-content p {
      font-weight: 700;
      font-size: 18px;
      line-height: 140.62%;
      color: #cbd5e1;
    }

    .downloads .download-section {
      display: flex;
      gap: 20px;
      justify-content: center;
    }

    .downloads .download-section .downloads-content h1 {
      font-size: 40px;
    }

    .downloads .phone-content {
      padding: 32px 93px 29px;
    }

    .downloads .phone-content h2 {
      font-size: 28px;
    }
  }

  @media (max-width: 650px) {
    .downloads {
      padding: 20px;
    }

    .downloads .phone-content {
      padding: 18px 33px 29px;
    }

    .downloads .download-section .downloads-content h1 {
      font-size: 35px;
    }
  }

  @media (max-width: 464px) {
    .downloads {
      padding:20px;
    }

    .downloads .download-section .downloads-content h1 {
      font-size: 25px;
    }

    .downloads .phone-content h2 {
      font-size: 25px;
    }

    .downloads .phone-content {
      padding: 15px 15px 15px;
    }

    .downloads-content img {
      width: 47vw;
    }

    .downloads .phone-content {
      text-align: center;
    }
  }
  @media screen and (min-width: 1880px) {
    .downloads .phone-content h2 {
      font-family: "Outfit";
      font-weight: 800;
      font-size: 44px;
      line-height: 140.62%;
      color: #ffffff;
    }
    .downloads .phone-content p {
      font-family: "Outfit";
      font-weight: 700;
      font-size: 25px;
      line-height: 140.62%;
      color: #cbd5e1;
    }
    .downloads-content {
      display: flex;
      flex-direction: column;
      gap: 50px;
    }
  }
`;
export default Wrapper;
