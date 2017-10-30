import React from 'react';

const Validator = (values) => {
  
  const errors = {};

  if (!values.email) {
    errors.email = "Please add a username (your email)."
  }
  if (values.email && values.email.length > 100) {
    errors.email = "your email address is way too long!  Please rethink the choices you've made in your life."
  }
  if (!values.password) {
    errors.password = "You need to add a password... come on."
  }
  if (values.password && values.password.length > 40) {
    errors.password = "Why is your password so long?  This is an app to lend & borrow items..."
  }
  if (!values.bio) {
    errors.bio = "Please add a bio"
  }
  if (values.bio && values.bio > 200) {
    errors.bio = "This isn't a dating site.  You don't need a bio that long."
  }
  if (!values.fullname) {
    errors.fullname = "How are people going to borrow an item from you if they don't know who you are?  Add a name!"
  }
  if (values.fullname && values.fullname > 100) {
    errors.fullname = "How many names do you have?  First and last is all we need."
  }

  return errors;
  
}

export default Validator;