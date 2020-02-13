import 'src/styles/global.css'

function getTitle() {
  return document.querySelector('[data-testid="page-title"]');
}

function getPageNav() {
  return document.querySelector('[data-testid="page-nav"]');
}

function getMainContainer() {
  return document.querySelector('[data-testid="main-container"]');
}

export const onRouteUpdate = () => {
  const bottomPageNav = getPageNav().cloneNode(true);
  const mainContainer = getMainContainer();
  mainContainer.insertAdjacentElement('afterbegin', getTitle());
  mainContainer.insertAdjacentElement('afterbegin', getPageNav());
  mainContainer.insertAdjacentElement('beforeend', bottomPageNav);
}
