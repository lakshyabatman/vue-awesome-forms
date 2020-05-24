const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

//
//  These services are used by components
//  and can explicitly used by client itself.
//
//
//

const emailValidator = text => (text.match(emailRegex) ? true : false);
const minLengthValidator = (text, number) =>
  text.length >= number ? true : false;
const maxLengthValidator = (text, number) =>
  text.length < number ? true : false;

export { emailValidator, minLengthValidator, maxLengthValidator };
