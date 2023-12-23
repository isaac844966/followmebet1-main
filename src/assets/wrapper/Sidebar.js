import styled from "styled-components"

const Wrapper = styled.aside`
z-index: 2;
position: fixed;
.container-center{
    padding:4rem 1rem ;
    margin-top:3rem ;
    
}
.nav-links {
    height:190vw;
    display:flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5rem
}

.nav-link{
    color:rgb(29, 26, 26);
    font-size: 1.3rem;
    font-weight: 400;
    line-height: 1.3;
    width:100%;
    font-size: 16px;
    border-bottom: 1px solid #cbd5e1;
    padding-bottom: 15px;
}
.active {
    color: var(--yellow-100);
  }

.cancel{
    position: fixed;
    right:2rem;
    top: 2rem;
    border-style:none;
    font-size:2rem;
    background: transparent;
}
`
export default Wrapper