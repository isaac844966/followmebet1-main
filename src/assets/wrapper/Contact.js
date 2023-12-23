import styled from "styled-components";

const Wrapper = styled.div`
  .contact {
    padding: 15rem 91px 10px 51px;
    background-color: #1e1f68;
    display: flex;
    gap: 40px;
    justify-content: center;
  }

  .left {
    
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 50px;
  }

  .left h1 {
    padding-left: 60px;
    font-family: "Outfit";
    font-style: normal;
    font-weight: 800;
    font-size: 60px;
    line-height: 120%;
    color: #ffffff;
  }

  .right {
    display: flex;
    gap: 40px;
    flex-direction: column;
  }

  .right p {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 140.62%;
    color: #cbd5e1;
  }

  .Email {
    display: flex;
    gap: 20px;
    background: #0e0d3d;
    border-radius: 20px;
    padding: 20px 28px;
    max-width: 550px;
  }

  .Email h2 {
    font-weight: 600;
    font-size: 14px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #cbd5e1;
  }

  .Email p {

    font-weight: 700;
    font-size: 16px;
    color: #ffffff;
  }

  .Email .address {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }
h2{
  margin-bottom: 4px;
}
  form {
    max-width: 550px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .input {
    display: flex;
    justify-content: space-between;
    gap: 20px;
  }

  .input input {
    width: 100%;
  }

  input,
  textarea {
    background: #2e3192;
    border-radius: 5px;
    border: none;
    height: 53px;
    color: #fff;
    padding: 20px 20px 20px 20px;
    font-size: 17px;
  }

  label {
    color: #fff;
  }

  textarea {
    resize: none;
    height: 100px;
  }

  .container-input {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  button {
    width: 133px;
    height: 50px;
    background: #fbb03b;
    border-radius: 8px;
    margin-bottom: 40px;
    border: none;
    color:white
  }

  @media (max-width: 1056px) {
    .contact {
      flex-direction: column;
      padding: 15rem 91px 0 71px;
    }

    .left h1 {
      padding: 0;
    }

    .left img {
      display: none;
    }

    form {
      max-width: 850px;
      gap: 20px;
    }

    .Email {
      max-width: 850px;
    }

    .container-input {
      gap: 10px;
    }

    input,
    textarea {
      background: #2e3192;
      border-radius: 5px;
      height: 53px;
      color: #fff;
      padding: 20px 130px 20px 20px;
    }

    textarea {
      resize: none;
      height: 100px;
    }
  }

  @media (max-width: 850px) {
    .input {
      flex-direction: column;
    }

    input,
    textarea {
      padding: 20px;
    }

    textarea {
      resize: none;
      height: 100px;
    }

    button {
      margin-top: 30px;
    }
  }

  @media (max-width: 665px) {
    .Email {
      padding: 40px 25px;
    }
  }

  @media (max-width: 534px) {
    .Email {
      padding: 20px 20px;
      flex-direction: column;
    }

    .Email img {
      width: 10vw;
    }

    .Email p {
      font-size: 15px;
    }
  }

  @media (max-width: 612px) {
    .contact {
      padding: 10rem 51px 0 31px;
      gap: 15px;
    }

    .left h1 {
      font-size: 42px;
      max-width: 220px;
    }
  }

  @media (max-width: 329px) {
    .Email {
      padding: 5px 5px;
    }

    .Email p {
      font-size: 13px;
    }
  }

  @media (max-width: 389px) {
    .Email {
      padding: 15px;
    }

    .Email img {
      width: 10vw;
    }
  }

  @media (max-width: 474px) {
    input,
    textarea {
      background: #2e3192;
      border-radius: 5px;
      height: 43px;
      color: #fff;
      padding: 20px 20px 20px 20px;
    }

    textarea {
      resize: none;
      height: 100px;
    }
  }
  @media screen and (min-width: 1880px) {
    .contact {
      padding: 15rem 91px 0 51px;
      background-color: #1e1f68;
      display: flex;
      gap: 130px;
      justify-content: center;
    }
    .right p {
      font-family: "Outfit";
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
      line-height: 140.62%;
      color: #cbd5e1;
      max-width: 580px;
    }
    form {
      max-width: 1200px;
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
    .left {
      gap: 2.5rem;
    }
    .left img {
      width: 25vw;
    }
  }
`;
export default Wrapper;
