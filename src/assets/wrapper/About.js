import styled from "styled-components";

const Wrapper = styled.section`
  header {
    h1 {
      font-family: "Outfit";
      font-style: normal;
      font-weight: 800;
      font-size: 48px;
      text-align: center;
      line-height: 140.62%;
      color: #ffffff;
      padding-top: 5rem;
    }
    p {
      font-family: "Outfit";
      font-weight: 600;
      font-size: 18px;
      line-height: 140.62%;
      text-align: center;
      color: #cbd5e1;
      max-width: 1100px;
      margin: auto;
      padding: 0 0.5rem;
      max-width: 50rem;
    }
  }
  .btn-outline {
    font-family: "Outfit";
    font-style: normal;
    border-style: none;
    font-weight: 700;
    font-size: 15px;
    line-height: 140.62%;
    color: var(--yellow-100);
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 10px 50px;
    background: transparent;
    border: 1.5px solid #fbb03b;
    border-radius: 8px;
    width: 209px;
    height: 60px;
    margin: auto;
    margin-bottom: 3rem;
  }
  .btn-cls {
    margin-bottom: 10px;
    margin: auto;
    padding-bottom: 2rem;
  }
  .Container {
    padding: 2rem 1rem;
    padding-bottom: 2rem;
    max-width: 1700px;
    margin: auto;
  }
  .box:hover {
    box-shadow: var(--shadow-3);
  }

  .box p {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    color: #e2e8f0;
    letter-spacing: 0.6px;
    padding: 0;
    margin-top: 1rem;
    margin-bottom: 0;
  }
  .box h3,h2 {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    color: #ffffff;
  }
 
  img {
    display: none;
  }

  .box {
    padding: 24px;
    margin-bottom: 1rem;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.2) 0%,
      rgba(255, 255, 255, 0.05) 100%
    );
    backdrop-filter: blur(27.5px);
    border-radius: 15px;
    transition: var(--transition);
  }
.six p{
  margin-bottom: 2rem;
}
  @media screen and (min-width: 768px) {
    .Container {
      padding: 4rem 2rem;
      display: grid;
      gap: 2rem;
      grid-template-columns: 1fr 1fr;
      place-content: center;
      justify-content: center;
      align-items: center;
    }
  }
  @media screen and (min-width: 1200px) {
    header{

      h1{
        padding-top: 8rem;
      }
    }
    img {
      display: block;
      margin: auto;
      width: inherit;
      height: inherit;
    }
    .Container {
      padding: 8rem 3rem;
      display: grid;
      gap: 0rem;
      grid-template-columns: 1fr auto 1fr;
    }
    .box {
      padding: 30px;
      
    }
  }
  @media screen and (min-width: 1880px) {
    .box {
      padding: 30px;
    }
  }
`;
export default Wrapper;
