// JavaScript example
function Login_SessionID()
{
  // Log in via session ID
  let username = "tu.ha@wsvietnam.com";
  let password = "Dh12345_11598";
  let clientID = "3MVG9VMBZCsTL9hkFc_QLcXQZQPmghoCnR6iIK8Z4RZ.j6qMg2oxS.4nQWFtJgFfy5ltO0Be7p0TiJvrQ7oYw";
  let clientSecret = "607F8EE69C6D9D4AB345014B36EFBFA7D256A3E6B88A4286718BCDF7DD3F187F";
  let token = "ZczcnavSUxGePD5cJ6fEWwFi";

  Salesforce.OrgInstance = "https://weaversoftware-dev-ed.develop.my.salesforce.com";
  Salesforce.LoginWithSessionId(clientID, clientSecret, username, password, token); 
}