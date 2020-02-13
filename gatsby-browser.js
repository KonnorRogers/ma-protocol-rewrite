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

export const onRouteUpdate = ({location}) => {
  const bottomPageNav = getPageNav().cloneNode(true);
  const mainContainer = getMainContainer();

  if (location.pathname !== "/") {
    mainContainer.insertAdjacentElement('afterbegin', getTitle());
  } else {
    getTitle().parentNode.removeChild(getTitle());
  }
  mainContainer.insertAdjacentElement('afterbegin', getPageNav());
  mainContainer.insertAdjacentElement('beforeend', bottomPageNav);
}
