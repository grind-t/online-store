import Link from 'next/link';
import styled from 'styled-components';

//#region styled
const Anchor = styled.a`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 210px;
  min-height: 55px;
  background: #fe5f1e;
  border-radius: 30px;
  color: white;
  font-size: 1rem;
  text-align: center;
`;
//#endregion

const PaymentLink = () => (
  <Link href="#" passHref>
    <Anchor>Оплатить сейчас</Anchor>
  </Link>
);

export default PaymentLink;