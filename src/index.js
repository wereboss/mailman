import onOpen from './onOpen';
import showSidebar from './sidebar';
import sendEmail from './send';
import doGet from './webapp';

function myFunction() {
  Logger.log('Hello from VSCode 2');
}

global.myFunction = myFunction;
global.onOpen = onOpen;
global.showSidebar = showSidebar;
global.sendEmail = sendEmail;
global.doGet = doGet;
