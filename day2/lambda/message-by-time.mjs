export const handler = async (event) => {
  return {
      statusCode: 200,
      body: JSON.stringify({ 
          message: `${new Date().getHours() < 12 
              ? "Good morning" 
              : new Date().getHours() < 18 
              ? "Good afternoon" 
              : "Good evening"} from AWS Lambda! The current time is ${new Date().toLocaleTimeString()}.`
      })
  };
};
