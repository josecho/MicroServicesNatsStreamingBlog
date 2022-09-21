import axios from 'axios';


const LandingPage = ({ currentUser }) => {
  console.log(currentUser);
  return <h1>Landing Page</h1>;
};

LandingPage.getInitialProps = async () => {
  if (typeof window === 'undefined') {
    // we are on the server!
    // request sho/ingress-nginx-controller.ingress-nginx.....
    const { data } = await axios.get(
      'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local/api/users/currentuser',
      {
        headers: {
          Host: 'ticketing.dev',
        },
      }
    );
    return data;
  } else {
    // we are on the browser!
    // request can be made  with a base url of ''
    const response = await axios.get('/api/users/currentuser').catch((err) => {
      console.log(err.message);
    });
    return response.data;

  }
  return {};
};

export default LandingPage;