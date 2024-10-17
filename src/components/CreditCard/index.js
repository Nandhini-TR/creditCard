import {useState} from 'react'
import {
  BgContainer,
  CardBgcontainer,
  Heading,
  CardContainer,
  CardNumber,
  CardHolderName,
  PaymentContainer,
  PaymentCardContainer,
  PaymentHeading,
  NumberInput,
  TextInput,
} from './styledComponents'

const CreditCard = () => {
  const [cardNumber, setCardNumber] = useState('')
  const [cardHolderName, setCardHolderName] = useState('')

  const onChangeNumber = event => {
    setCardNumber(event.target.value)
  }

  const onChangeName = event => {
    setCardHolderName(event.target.value)
  }

  return (
    <BgContainer>
      <CardBgcontainer>
        <Heading>CREDIT CARD</Heading>
        <CardContainer data-testid="creditCard">
          <CardNumber>{cardNumber}</CardNumber>
          <CardHolderName>CARDHOLDER NAME</CardHolderName>
          <CardHolderName>{cardHolderName.toUpperCase()}</CardHolderName>
        </CardContainer>
      </CardBgcontainer>
      <PaymentContainer>
        <PaymentCardContainer>
          <PaymentHeading>Payment Method</PaymentHeading>
          <NumberInput
            type="text"
            value={cardNumber}
            onChange={onChangeNumber}
            placeholder="Card Number"
          />
          <TextInput
            type="text"
            value={cardHolderName}
            onChange={onChangeName}
            placeholder="CardHolder Name"
          />
        </PaymentCardContainer>
      </PaymentContainer>
    </BgContainer>
  )
}

export default CreditCard
