import axios from 'axios';


const LandingPage = ({ currentUser }) => {
  console.log(currentUser);
  /*  axios.get('/api/users/currentuser').catch((err) => {
     console.log(err.message);
   }); */

  return <h1>Landing Page</h1>;
};

LandingPage.getInitialProps = async () => {
  /* const response = await axios.get('/api/users/currentuser');
  return response.data;
 */
  if (typeof window === 'undefined') {
    // we are on the server!
    // request sho/ingress-nginx-controller.ingress-nginx.....
  } else {
    // we are on the browser!
    // request can be made  with a base url of ''

  }
  return {};
};

export default LandingPage;