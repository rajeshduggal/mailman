/* Written by Amit Agarwal */

// import { getGmailAliases, getGmailLabels } from './gmail';
// import { sendmail } from './server/mail';
// import { doGet } from './server/webapp';

// Global objects are accessible by the users.
// getGmailAliasList isn't included here because it's being used by one of the functions below, and run by the users directly.

import onOpen from './onOpen';
import showSidebar from './sidebar';
import sendEmail from './send';
import showCredits from './credits';
import doGet from './webapp';

// global.getGmailLabels = getGmailLabels;
// global.getGmailAliases = getGmailAliases;

// function myFunction() {
//   Logger.log('Hello, world from VS Code!');
// }

// global.myFunction = myFunction;

global.onOpen = onOpen;
global.showSidebar = showSidebar;
global.sendEmail = sendEmail;
global.doGet = doGet;
global.showCredits = showCredits;
