import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import logo from "../assets/logo.png";

// Your publishable key from Stripe
const STRIPE_PUBLISHABLE_KEY = `pk_test_51QjJ0tLOvsoGjYbbnVbsQxzm5R1AZUVQaRXNM8JGHBaMgeUMtRGoebNCenZy2g3gmhLWvQZlBnwk78MvYjx5JCbT00Yel2lwSJ`;

const DonateForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");
  const [disableBtn, setDisableBtn] = useState(false);

  const stripePromise = loadStripe(STRIPE_PUBLISHABLE_KEY);

  const handleCheckout = async (e) => {
    e.preventDefault();
    setDisableBtn(true);

    try {
      // Step 1: Create a Checkout session on your backend
      const { data } = await axios.post("http://localhost:3000/api/v1/checkout", {
        amount: amount,
        name: name,
        email: email,
        message: message,
      });

      const { sessionId } = data;

      // Step 2: Redirect to Stripe Checkout
      const stripe = await stripePromise;
      await stripe.redirectToCheckout({ sessionId });
    } catch (error) {
      console.error("Error during checkout", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setDisableBtn(false);
    }
  };

  return (
    <section className="donate">
      <form onSubmit={handleCheckout}>
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div>
          <label>Extend a helping hand to those in need</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter Donation Amount (INR)"
            min="1"
          />
        </div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your Name"
          required
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email Address"
          required
        />
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Message (Optional)"
        />
        <button type="submit" className="btn" disabled={disableBtn}>
          Donate {amount ? `₹${amount}` : "₹0"}
        </button>
      </form>
    </section>
  );
};

export default DonateForm;
