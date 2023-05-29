// Our quote generator will need to use the useEffect hook to perform a "side effect" 
// to fetch the quotes from an external API. After fetching our quotes, 
// we will put them in our local app state, which we will call quotes.

// We'll then take that array of quotes and use a function to select a random item within that array. 
// Then we'll put it in another state variable called just quote, which can then be displayed to our user.

// We also want to add a "New Quote" button above each quote that will perform the same operation –
//  get a new random quote from our quotes array and put it in quote.

// Finally, the quote isn't loaded in state. 
// So we'll make sure to use the optional chaining operator (?) to safely check our 
// object before we attempt to get a value from that quote in state to make sure our app doesn't throw an error.
import React, { useState } from "react";
import ReactDOM from "react-dom";

const QuoteApp = () => {
  const [quote, setQuote] = useState("");

  const quoteGen = async () => {
    try {
      const response = await fetch("https://type.fit/api/quotes");
      const data = await response.json();
      const randomIndex = Math.floor(Math.random() * data.length);
      const randomQuote = data[randomIndex];
      setQuote(`${randomQuote.text} - ${randomQuote.author}`);
    } catch (error) {
    
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Project 3: Quote Generator</h1>
      <p>Click the button to get a new quote.</p>

      {/* <button onClick={quoteGen}>New Quote</button> */}

      {/* Render the quote */}
      <section>
      <button onClick={quoteGen}>New Quote</button>

       {quote}
        {/* {quote && <p>{quote}</p>}  */}
        {/* conditional rendering statement  */}

        {/* Here's how the conditional rendering works: */}

{/* If the quote variable has a truthy value (i.e., it is not empty or null), 
the expression {quote && <p>{quote}</p>} evaluates to <p>{quote}</p>. 
So, the <p> element containing the quote is rendered. */}



{/* If the quote variable is falsy (i.e., it is empty or null), the expression {quote && <p>{quote}</p>} evaluates to false.  */}
{/* In this case, nothing is rendered inside the <section> element. */}

      </section>
    </div>
  );
};

ReactDOM.render(<QuoteApp />, document.getElementById("root"));
