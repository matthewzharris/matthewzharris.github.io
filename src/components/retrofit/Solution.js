import React from 'react';

import Section, { SubSection } from '../Section';
import Image from '../Image';

import productReviewImage from '../../images/p2productreviewflow.jpg';

const Solution = () => (
  <Section shade={3} title="Solution">
    <SubSection title="Low Fidelity Wireframes">
      <p>
        On the product page, I responded to Lauren’s pain points by featuring
        large product images, detailed product descriptions and product
        recommendations.
      </p>
      <p>
        The other major element I designed was the product review feature. The
        product review flow begins on the product detail page where users were
        able to click Write a Review (underlined to signify it's a clickable
        hyperlink). After clicking, the product review modal opens right below,
        where the user can enter a star rating, title, and a review for the
        product. After clicking Post Review, the user would receive a message
        letting them know that their review is added to the site.
      </p>
      <Image alt="Product Review" src={productReviewImage} />
      <p>
        In the checkout flow, Lauren would add a product to her cart and a modal
        would slide down from the header notifying her that the item was added.
        The option to checkout would be immediate and would be colored to draw
        attention to the action. After clicking Checkout Now, she would be
        brought to the shipping information page. The progress indicator would
        help assure where she is in the process and action buttons would be
        easily clickable for her. She would move to the updated payment page,
        click Review & Confirm when she entered her payment details. And finally
        on this page she could review her order details before confirming.
      </p>
      <div className="text-center">
        <video width="80%" autoPlay loop muted>
          <source
            src="https://media.giphy.com/media/553ZAHDrfHa2BQnFGF/giphy.mp4"
            type="video/mp4"
          />{' '}
          Your browser does not support the video tag.
        </video>
      </div>
    </SubSection>

    <hr />

    <SubSection title="Testing Results">
      <p>From usability testing, the elements that needed work were:</p>
      <p>Account functionality</p>
      <ul>
        <li>
          Providing a place for the password for the creation of account (helps
          speed up future transactions)
        </li>
        <li>
          Order history for product reviews (allows faster access to products to
          leave reviews)
        </li>
      </ul>
      <p>Checkout process</p>
      <ul>
        <li>
          Payment form needs address for users that have different address than
          their shipping
        </li>
        <li>
          Form feels slightly disjointed due to button placement (in the video
          above, the buttons have been moved directly below the last form field)
        </li>
      </ul>
    </SubSection>
  </Section>
);

export default Solution;
