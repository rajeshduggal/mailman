const onOpen = () => {
  // Special arrow character copy and pasted from https://copypastecharacter.com/
  SpreadsheetApp.getUi()
    .createMenu('➫ MailMan')
    .addItem('Show Sidebar', 'showSidebar')
    .addSeparator()
    .addItem('Credits', 'showCredits')
    .addToUi();
};

export default onOpen;
