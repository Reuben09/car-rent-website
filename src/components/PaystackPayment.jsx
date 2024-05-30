import { useEffect } from "react";

export const PaystackPayment = ({ email, reference }) => {

  useEffect(() => {
    payWithPaystack();
  }, []);

  const payWithPaystack = () => {
    const handler = window.PaystackPop.setup({
      key: 'pk_test_166d11843473033cd5138ebbf1ca8af0a7997664', // Replace with your Paystack public key
      email: email,
      amount: 5000 * 100, // Convert to kobo
      currency: 'NGN', // Use your currency
      callback: function(response) {
        // Send reference to server for verification
        console.log(response)
        window.location.href = `/sign-up?reference=${response.reference}&transaction=${response.trans}&myref=${reference}`;
      },
      onClose: function() {
        alert('Transaction was not completed, window closed.');
      },
    });

    handler.openIframe();
  };

  return <div></div>;
};
