import styled from "styled-components";

 const Wrapper = styled.section`
  .rules {
    background-color: #1e1f68;
    padding-top:6rem ;
  }

  .image h1 {
    padding:  10rem 0;
    font-family: "Outfit";
    font-style: normal;
    font-weight: 800;
    font-size: 60px;
    line-height: 120%;
    text-align: center;
    color: #ffffff;
  }

  .list {
    padding: 90px;
    max-width: 1700px;
    margin: auto;
  }
a{
  color:var(--yellow-100)
}
  li {

    margin-bottom: 0.6rem;
    font-size: 18px;
    line-height: 140.62%;
    color: #cbd5e1;
  }
  ol > li{
    font-weight: 900;
    margin-bottom: 0.6rem;
    font-size: 20px;
    line-height: 140.62%;
    color: #f8fafc;
  }
  ul {
    list-style-type: disc;
  }


  .content {
    display:flex;
    flex-direction: column;
    justify-content: center;
    gap:40px;
    background-color:#1E1F68;
    padding:90px
}
.content1 {
    display:flex;
    flex-direction: column;
    gap: 20px;
}
.content1 p {
    font-family: 'Outfit';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 140.62%;
    color: #F8FAFC;
}
.content1 h1 {
    font-family: 'Outfit';
    font-style: normal;
    font-weight: 800;
    font-size:25px;
    line-height: 120%;
    color: #FFFFFF;
}
.image1 h1{
  margin-top: 6rem;
}
@media (max-width:846px){
    .content {
        padding:40px
    }
    .content1 h1 {
        font-size: 23px;

    }
}

  @media (max-width: 880px) {
    .image h1 {
      padding: 8rem 0;
      font-size: 30px;
    }
  }

  @media (max-width: 500px) {
    .image h1 {
      padding: 8rem 0;
      font-size: 30px;
      line-height: 120%;
    }

    .list {
      padding: 50px;
    }
  }
`;
export default Wrapper