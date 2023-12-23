import styled from "styled-components"

const Wrapper = styled.div`
.footer{
    background: #0E0D3D;
    padding:71px 71px;
  
   
}
.footer-container{
    display:flex;
    justify-content: space-between;
    gap:20px;
    padding-bottom: 20px;
    border-bottom: 1px solid #fff;
    max-width:1700px
}
.footer-content{
    display:flex;
    flex-direction: column;
    gap:30px
}
.footer-content img {
    width: 115px;
    height: 50px;
}
.footer-content p{
    width: 416px;
    height: 82px;
    font-family: 'Outfit';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 140.62%;
    color: #E2E8F0;
}
.footer-links{
    display:flex;
    gap:20px;
    flex-direction: column;
}
.footer-links h1 {
    font-family: 'Outfit';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 140.62%;
    color: #64748B;
}
.footer-links .links{
    display:flex;
    flex-direction: column;
    gap:10px
}
.footer-links a {
    font-family: 'Outfit';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 140.62%;
    color: #FFFFFF;
    }
.download-app{
    display:flex;
    flex-direction: column;
    gap:20px
}
.download-app h1{
    font-family: 'Outfit';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 140.62%;
    color: #64748B;
}
.download-app .link{
    display:flex;
    gap:20px
}
.download-app .link img{
    width: 159.2px;
    height: 48px;
}

.footer-bottom{
    display:flex;
    margin-top: 40px;
    justify-content: space-between;
    align-items: center;
    max-width:1700px;
}
.media{
    display:flex;
    gap:15px
}
.short-links{
    display:flex;
    gap:15px;
}
.short-links a{
    font-family: 'Outfit';
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 140.62%;
    color: #E2E8F0;
}
.payment{
    display:flex;
    gap:15px
}
@media (max-width:1127px) {
    .footer-container{
        flex-direction: column;
    }
}
@media (max-width:853px){
    .footer-container {
            display: flex;
            justify-content: space-between;
            gap: 20px;
            padding-bottom: 20px;
            border-bottom: 1px solid #fff;
    
        }
    .footer-bottom{
        flex-direction: column;
        align-items: flex-start;
        gap:15px;
        margin-top: 20px;
    }
    .footer{
        padding:51px 51px
    }
    .payment{
        gap:10px
    }
    .media{
        gap:10px
    }
    .short-links{
        gap:10px;
    }
    .footer-content p{
        width:100%;
        height: 82px;
        font-size: 14px;

    }
    .short-links{
        flex-direction: column;
        gap:15px;
    }
    
}
@media (max-width:473px) {
    .footer{
        padding:41px 41px
    }
    .footer-container{
        display:flex;
        justify-content: space-between;
        gap:10px;
        padding-bottom: 20px;
        border-bottom: 1px solid #fff;
        
    }
  
    .download-app .link{
        align-items: center;
    }
    .download-app .link img{
        width: 35vw
    }
    .footer-links h1 {
        font-size: 20px;
    }
   
    .footer-links a {
        font-size: 12px;
        }
        .footer-content p{
           margin-bottom: 50px;
           font-size: 14px;
        }
}

@media (max-width:350px){
    .footer-content p{
        
     }
     .payment img{
        width:9vw
    }
    .payment img:nth-child(3){
        width:30vw
    }
    .footer-links{
        margin-top: 40px;
    }
}
`
export default Wrapper