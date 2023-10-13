import getGmailAliasList from './alias';

const showSidebar = () => {
  const template = HtmlService.createTemplateFromFile('index');
  template.aliases = getGmailAliasList(); // for the scriptlet in the index.js file
  const html = template.evaluate().setTitle('MailMan');
  SpreadsheetApp.getUi().showSidebar(html);
};

export default showSidebar;
