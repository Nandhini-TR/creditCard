import styled from 'styled-components'

export const BgContainer = styled.div`
  display: flex;
  height: 100vh;
  @media screen and (max-width: 576px) {
    flex-direction: column;
  }
`
export const CardBgcontainer = styled.div`
  background-color: #3b4b69;
  width: 600px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: 576px) {
    width: 400px;
    height: 500px;
  }
`
export const Heading = styled.h1`
  font-size: 30px;
  font-weight: bold;
  color: #ffffff;
  text-decoration: underline;
  text-decoration-color: #ffd773;
  text-align: center;
  @media screen and (max-width: 576px) {
    font-size: 20px;
  }
`

export const CardContainer = styled(CardBgcontainer)`
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
  width: 550px;
  height: 350px;
  padding: 20px;
  @media screen and (max-width: 576px) {
    width: 350px;
    height: 250px;
  }
`

export const CardNumber = styled.p`
  font-size: 24px;
  font-weight: bold;
  color: #ffffff;
  margin-top: 80px;
  @media screen and (max-width: 576px) {
    font-size: 24px;
  }
`
export const CardHolderName = styled(CardNumber)`
  color: #d3d9e0;
  font-size: 14px;
  margin-top: 5px;
  @media screen and (max-width: 576px) {
    font-size: 10px;
  }
`

export const PaymentContainer = styled(CardBgcontainer)`
  background-color: #ffffff;
`
export const PaymentCardContainer = styled.div`
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 250px;
  width: 350px;
  margin: 20px;
  @media screen and (max-width: 576px) {
    width: 350px;
    height: 250px;
  }
`

export const PaymentHeading = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: #344e7a;
  @media screen and (max-width: 576px) {
    font-size: 20px;
  }
`
export const NumberInput = styled.input`
  width: 300px;
  height: 35px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  margin-top: 10px;
  color: #475569;
  border: 0px none;
  @media screen and (max-width: 576px) {
    width: 200px;
  }
`

export const TextInput = styled.input`
  width: 300px;
  height: 35px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  margin-top: 10px;
  color: #475569;
  border: 0px none;
  @media screen and (max-width: 576px) {
    width: 200px;
  }
`
