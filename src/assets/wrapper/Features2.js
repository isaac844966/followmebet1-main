import styled from "styled-components";

const Wrapper = styled.section`
  section {
    padding: 2rem 1.5rem;
  }
  section h1 {
    font-size: 2.6rem;
    font-weight: 700;
    line-height: 38px;
    color: var(--white);
    margin-bottom: 3rem;
  }
  .align-center {
    display: flex;
    justify-content: center;
    align-items: center;

    margin: 0 auto;
  }
  .card {
    background: var(--primary-100);
    border-radius: 15px;
    padding: 1.5rem 1rem;
    display: flex;
    gap: 1rem;
    margin-bottom: 1rem;
  }
  img {
    width: 3rem;
    margin-top: 1rem;
    padding-bottom: 4rem;
  }
  h2 {
    font-size: 1.8rem;
    font-weight: 700;
    color: var(--white);
    margin-bottom: 0.5rem;
  }
  p {
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 22px;
    color: #cbd5e1;
  }
  .img-container {
    display: none;
  }
  @media only screen and (min-width: 820px) {
    .cards {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      margin: 0 auto;
      gap: 1rem;
    }
    .card {
      width: 30rem;
    }
  }
  @media screen and (min-width: 1200px) {
    section {
      width: 1200px;
      margin: 0 auto;
      padding: 4rem 0;
    }
    .align-center {
      width: 1200px;
    }
    .img-container {
      display: block;
      width: 100%;
    }
    .phone {
      width: 25rem;
      margin: 0 auto;
    }
  }
`;
export default Wrapper;
