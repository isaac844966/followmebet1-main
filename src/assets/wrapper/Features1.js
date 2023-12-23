import styled from "styled-components";

const Wrapper = styled.div`
  .bg5 {
  }
  .content {
    text-align: center;
    margin: auto;
    padding: 6rem 1.2rem 0 1.2rem;
    max-width: 650px;
  }
  h2 {
    color: var(--white);
    line-height: 53.86px;
    font-weight: 800;
    font-size: 35px;
  }
  p {
    color: #cbd5e1;
    margin-bottom: 1.5rem;
    font-size: 18px;
    line-height: 23.86px;
  }
  .btn {
    background: #fbb03b;
    padding: 1rem 1.8rem;
    border: none;
    border-radius: 8px;
    margin-bottom: 5rem;
  }
  .phone {
    display: none;
  }
  .phone1 {
    display: flex;
    justify-content: center;
  }
  .phone1 img {
    width: 95vw;
  }
  @media screen and (min-width: 768px) {
    h2 {
      line-height: 45.96px;
      font-size: 37px;
    }
    p {
      font-size: 19px;
    }
    .phone1 img {
      width: 70vw;
    }
  }
  @media screen and (min-width: 1020px) {
    .bg5 {
      display: flex;
      justify-content: center;
      gap: 3rem;
    }
    .phone {
      display: block;
      padding-top: 6rem;
    }
    .phone1 {
      display: none;
    }
    .content {
      text-align: left;
      margin: initial;
      padding: 6rem 1.2rem;
      max-width: 550px;
    }
    h2 {
      line-height: 55.96px;
      font-size: 40px;
    }
    p {
      font-size: 19px;
    }
  }
`;
export default Wrapper;
