const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY); 
console.log("stripe secret key ",process.env.STRIPE_SECRET_KEY)


const Volunteer = require('../model/volunteer.model'); // Import the Volunteer model

// Payment Intent and donation handling
const checkout = async (req, res) => {
  try {
    const { amount, name, email, message } = req.body;

    if (!amount || !name || !email) {
      return res.status(400).send({ error: "Amount, Name, and Email are required" });
    }

    // Create a Checkout session with the provided amount and donation details
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'inr',
            product_data: {
              name: `Donation from ${name}`,
              description: message || 'Thank you for your generosity!',
            },
            unit_amount: amount * 100, // Amount in the smallest unit (paise for INR)
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `http://localhost:3000/success?session_id={CHECKOUT_SESSION_ID}`, // Success page URL
      cancel_url: `http://localhost:3000/cancel`, // Cancel page URL
      metadata: {
        name,
        email,
        message,
      },
    });

    // Return the session ID to the frontend
    res.send({ sessionId: session.id });
  } catch (error) {
    console.error("Error creating checkout session:", error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = { checkout };
