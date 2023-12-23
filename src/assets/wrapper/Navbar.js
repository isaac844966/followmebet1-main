import styled from "styled-components";

const Wrapper = styled.nav`
nav{
position: fixed;
width:100%;
  background: var(--primary-200);
  box-shadow: 20px 20px 50px 0px #0000001A;
z-index: 1;

}
  .nav-center {
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 4.5rem;
    max-width:1700px;
  }
.legal{
  display:flex;
  gap:1rem;
  justify-content: center;
  align-items: center;
}
  .nav-links {
    display: flex;
    align-items: center;
    gap: 2.5rem;
  }
  .nav-link {
    color: var(--white);
    font-size: 16px;
    font-weight: 700;
    transition: var(--transition);
    letter-spacing: 1.1px;
  }
  .active {
    color: var(--yellow-100);
  }
  .nav-link:hover {
    color: var(--yellow-100);
  }
  
  .legals{
    cursor: pointer;
  }
  .legals:hover .icon{
    color: var(--yellow-100);
  }
  .icon{
    color: white
  }
  .button {
    background: var(--yellow-100);
    padding: 1rem 2rem;
    border-radius: var(--borderRadius);
    border: none;
    color: #fff;
    cursor: pointer;
  }
  .menu {
    display: none;
  }

  @media screen and (max-width: 1100px) {
    .nav-center {
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 2rem;
    }
    .nav-links {
      display: none;
    }
    .menu {
      display: block;
      font-size: 2.5rem;
      border-color: none;
      background: none;
      border-style: none;
    }
  }
`;
export default Wrapper;
