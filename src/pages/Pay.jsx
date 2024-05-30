import { PaystackPayment } from "../components/PaystackPayment"

const Pay = () => {
    const email = 'user@example.com';
    const reference = 'unique_reference';

  return (
    <>
    <div>Pay</div>
    <PaystackPayment email={email} reference={reference} />
    </>
  )
}

export default Pay