// Do Not Fetch an API Route from getStaticProps or getStaticPaths
// A good use case for API Routes is handling form input
//The API Route code will not be part of your client bundle, so you can safely write server-side code

// API router 做 1. data format Saving 2. incoming data to your database 3. Previewing draft content from your CMS
export default function handler(req, res) {
    res.status(200).json({ text: 'Hello' });
  }