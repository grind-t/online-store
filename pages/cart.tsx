import { useMediaQuery } from '@react-hookz/web';
import StandaloneCartView from 'components/cart/cart-view';
import HeaderTemplate from 'components/common/templates/header-template';
import PageTemplate from 'components/common/templates/page-template';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import { ReactElement } from 'react';
import styled from 'styled-components';
import { up } from 'styles/mixins';
import { breakpoints } from 'styles/varibles';

export const getStaticProps: GetStaticProps = ({ locale }) => ({
  props: {
    messages: {
      ...require(`/public/l10n/common/${locale}.json`),
      ...require(`/public/l10n/cart/${locale}.json`),
    },
  },
});

//#region styled
const CartView = styled(StandaloneCartView).attrs({
  container: 'main',
  headingLevel: 'h1',
})`
  @media ${up(breakpoints.md)} {
    margin-top: 0.625rem;
  }

  @media ${up(breakpoints.xxl)} {
    margin-top: 6.25rem;
  }
`;
//#endregion

const Cart = () => {
  const upMD = useMediaQuery(up(breakpoints.md));
  return (
    <PageTemplate>
      <Head>
        <title>TODO</title>
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      {upMD && <HeaderTemplate />}
      <CartView />
    </PageTemplate>
  );
};

export default Cart;
