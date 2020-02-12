import 'src/styles/global.css'

const title = document.querySelector('[data-testid="page-title"]');
const mainContainer = document.querySelector('[data-testid="main-container"]');

function getTitle() {
  return document.querySelector('[data-testid="page-title"]');
}

function getMainContainer() {
  return document.querySelector('[data-testid="main-container"]');
}

export const onRouteUpdate = () => {
  getMainContainer().insertAdjacentElement('afterbegin', getTitle());
}
