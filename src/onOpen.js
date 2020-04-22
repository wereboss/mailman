const onOpen = () => {
  SpreadsheetApp.getUi()
    .createMenu('➫ Mailman')
    .addItem('Show Sidebar', 'showSidebar')
    .addSeparator()
    .addItem('Credits', 'showCredits')
    .addToUi();
};

export default onOpen;
