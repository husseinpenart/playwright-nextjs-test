export const validUser = {
  email: "hussein@gmail.com",
  username: "husseinpenart",
  password: "123456",
};

export const invalidUser = {
  email: "nope",
  username: "",
  password: "1",
};

export const blogPost = {
  title: "PlayWright Api Handeling and testing",
  body: "IntroductionPlaywright can be used to get access to the REST API of your application.Sometimes you may want to send requests to the server directly from Node.js without loading a page and running js code in it. A few examples where it may come in handy:Test your server API.Prepare server side state before visiting the web application in a test.Validate server side post-conditions after running some actions in the browser.All of that could be achieved via APIRequestContext methods.Writing API TestAPIRequestContext can send all kinds of HTTP(S) requests over network.The following example demonstrates how to use Playwright to test issues creation via GitHub API. The test suite will do the following:Create a new repository before running testsCreate a few issues and validate server stateDelete the repository after running testsConfiguratioGitHub API requires authorization, so we'll configure the token once for all tests. While at it, we'll also set the baseURL to simplify the tests. You can eitheput them in the configuration file, or in the test file with test.use()",
  userId: 12,
};
