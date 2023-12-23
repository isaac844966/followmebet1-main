import styled from "styled-components";

const Wrapper = styled.section`
section h1{
  max-width: 1700px;
    margin: auto;
    padding-top: 4rem;
    
}


  h1 {
    padding: 2rem;
    font-size: 40px;
    font-weight: 700;
    /* line-height: 48px; */
    letter-spacing: 0em;
    text-align: left;
    color: var(--white);
   
  }
  .phone {
    display: none;
  }
  .align-center {
    margin: 1rem;
    margin-bottom: 0;
    max-width: 1700px;
    margin: auto;
    padding:0 1rem
  }
  .cards {
    display: grid;
    gap: 1rem;
    padding-bottom: 4rem;
  }
  .card {
    background: var(--primary-100);
    border-radius: 15px;
    padding: 1rem;
    display: flex;
    gap: 1rem;
  }
  img {
    width: 2rem;
    margin-top: 1rem;
    padding-bottom: 4rem;
  }
  h2 {
    font-size: 18px;
    font-weight: 700;
    line-height: 28px;
    letter-spacing: 0em;
    text-align: left;
    color: var(--white);
    margin-bottom: 0.5rem;
  }
  p {
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
    color: #cbd5e1;
    margin-bottom: 0.5rem;
  }
  @media screen and (min-width: 768px) {
    .cards {
      grid-template-columns: 1fr 1fr;
    }
    h1 {
      font-size: 45px;
    }
  }
  @media screen and (min-width: 1200px) {
    section h1{

    padding-top: 7rem;
    
}
    .align-center {
      padding: 0 2rem;
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .phone {
      display: block;
      width: initial;
      margin-top: -130px;
      width: 35vw;
    }
    h1 {
      padding: 2rem 4rem;
      font-size: 50px;
      line-height: 65px;
    }
    h2 {
      font-size: 15px;
      font-weight: 700;
      line-height: 25px;
      letter-spacing: 0.03rem;
    }
    p {
      font-size: 14px;
      font-weight: 400;
      line-height: 20px;
      letter-spacing: 1px;
      text-align: left;
      color: #cbd5e1;
      margin-bottom: 0.5rem;
    }
  }
  @media screen and (min-width: 1880px) {
    .phone {
      width: 45vw;
    }
    h1 {
      font-size: 50px;
    }
    h2 {
      font-family: "Outfit";
      font-size: 23px;
      font-weight: 700;
      line-height: 30px;
      letter-spacing: 0.225rem;
    }
    p {
      font-family: "Outfit";
      font-size: 14px;
      font-weight: 400;
      line-height: 25px;
      margin-bottom: 0.5rem;
    }
  }
`;
export default Wrapper;
