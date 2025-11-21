//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = (message) => {
  if (message.trim().endWith("?")){
    if (!/[a-z]/.test(message) && /[A-Z]/.test(message)){
      return("Calm down, I know what I'm doing!")
    }
    return("Sure.")
  }
  if (/[a-zA-Z\d]/.test(message))
  { 
    //Check if the message is fully uppercase
    if (!/[a-z]/.test(message) && /[A-Z]/.test(message))
    {
      return "Whoa, chill out!";
    }
  }
};
