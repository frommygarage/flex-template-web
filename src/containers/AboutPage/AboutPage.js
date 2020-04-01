import React from 'react';
import config from '../../config';
import { StaticPage, TopbarContainer } from '../../containers';
import {
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
  ExternalLink,
} from '../../components';

import css from './AboutPage.css';

const AboutPage = () => {
  const { siteInstagramPage, siteFacebookPage } = config;
 
  // prettier-ignore
  return (
    <StaticPage
      title="About Us"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'AboutPage',
        description: 'About From My Garage',
        name: 'About page',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.staticPageWrapper}>
          <h1 className={css.pageTitle}>Loan it like you own it!</h1>
          <div className={css.contentWrapper}>
            <div className={css.contentSide}>
              <p>What's the point in buying expensive items that you rarely use or can't make money on?</p>
            </div>

            <div className={css.contentMain}>
              <h2>
               Our mission is to create a safe, fun, peer-to-peer rental platform for communities all around the world. Save money, reduce waste, impact your community. 
              </h2>
              <p>
              From My Garage is a marketplace that makes it easy to rent expensive, rarely-used, but necessary items to your neighbor or from your neighbor. We built From My Garage because we were tired of spending hundreds of dollars
              on items we only used a few times a year like portable air conditioning units, camping equipment, and power tools.
              </p>


              <p>
                From My Garage offers you a good way to earn some extra cash! If you're you have items that sit around in your home or garage without much use outdoor equipment, home and garden tools, or electronics every evening, 
                why not rent it to other people while it is free?
              </p>
              <p>
                You can also checkout our{' '}
                <ExternalLink href={siteFacebookPage}>Facebook</ExternalLink> and{' '}
                <ExternalLink href={siteInstagramPage}>Instagram</ExternalLink>.
              </p>
            </div>
          </div>
        </LayoutWrapperMain>

        <LayoutWrapperFooter>
          <Footer />
        </LayoutWrapperFooter>
      </LayoutSingleColumn>
    </StaticPage>
  );
};

export default AboutPage;
