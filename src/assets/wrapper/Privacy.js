import styled from "styled-components"

const Wrapper = styled.div`
.rules {
    background-color: #1E1F68;
}



.image h1 {
    padding: 120px;
    font-family: 'Outfit';
    font-style: normal;
    font-weight: 800;
    font-size: 60px;
    line-height: 120%;
    text-align: center;
    color: #FFFFFF;
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
@media (max-width:846px){
    .content {
        padding:40px
    }
    .content1 h1 {
        font-size: 23px;

    }
}
@media (max-width:700px) {
    .image h1 {
        padding: 50px;
        font-size: 30px;
        line-height: 120%;

    }
}
`
export default Wrapper