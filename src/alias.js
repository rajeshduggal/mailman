// Used by sidebar.js
const getGmailAliasList = () => {
  return [Session.getActiveUser().getEmail(), ...GmailApp.getAliases()];
};

export default getGmailAliasList;
