import styled from "styled-components";
const Wrapper = styled.section`
  .bg1 {
    padding-top: 8rem;
  }
  .align-item {
    padding: 2rem 2rem 0 2rem;
    display: grid;
    gap: 4rem;
    max-width: 1700px;
  }

  .hero h1 {
    font-family: "Outfit";
    font-weight: 800;
    color: var(--white);
    font-size: clamp(2.5rem, 4vw, 5.2rem);
    letter-spacing: 2px;
    margin-bottom: 2rem;
    color: var(--white);
  }
  /* span {
    font-size: clamp(1.5rem, 4vw, 2rem);
    line-height: 2rem !important;
    letter-spacing: 1px;
  } */
  .hero p {
    margin-bottom: 2rem;
    font-size: 1.7rem;
    color: #cbd5e1;
  }
  .phone img {
    width: 80vw;
  }
  .download {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    margin-bottom: 1rem;
  }
  .download img {
    width: 40vw;
  }
  .age {
    margin-bottom: 1rem;
  }

  @media screen and (min-width: 768px) {
    .download img {
      width: 300px;
    }
  }
  @media screen and (min-width: 1100px) {
    .align-item {
      padding: 6rem 4rem 0 4rem;
      display: grid;
      grid-template-columns: auto 1fr;
      margin: auto;
    }
    .phone {
      display: flex;
      justify-content: center;
    }
    .phone img {
      width: 42vw;
    }
    .download {
      margin-bottom: 1rem;
    }
    .download img {
      width: 200px;
    }
  }
  @media screen and (min-width: 1880px) {
    .phone img {
      width: 41vw;
    }

    .download {
      margin-bottom: 1.5rem;
    }
  }
`;
export default Wrapper;
