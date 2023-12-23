import styled from "styled-components";


const Wrapper = styled.div`
.container{
    position: absolute;
    top: 6.4rem;
    background: #0E0D3D;

    padding:1.5rem;
    display: grid;
    gap:1.5rem;
    border-radius: 8px;
    box-shadow: 4px 4px 10px 0px #0000001A;

}
.link{
    color:white;
    font-size: 16px;
    font-weight: 500;
    transition: var(--transition);

}
.link:hover{
    color: var(--yellow-100);
}
.active{
    color: var(--yellow-100);
}

`
export default Wrapper