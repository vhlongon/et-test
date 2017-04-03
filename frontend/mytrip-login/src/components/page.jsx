import React from 'react';

const Page = props => (
  <section className={`my-trip-page my-trip-page--${props.type}`}>
    {props.children}
  </section>
);

Page.proTypes = {
  type: React.PropTypes.string.isRequired
};

export default Page;