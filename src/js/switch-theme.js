const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const { LIGHT, DARK } = Theme;

const themeSwitchToggle = document.querySelector('#theme-switch-toggle');
const bodyClassList = document.body.classList;
const savedTheme = localStorage.getItem('theme');

themeSwitchToggle.addEventListener('change', onToggleClick);

checkTheme();

function checkTheme() {
  if (savedTheme === DARK) {
    bodyClassList.add(DARK);
    themeSwitchToggle.checked = true;
  }
}

function onToggleClick(evt) {
  const checked = evt.currentTarget.checked;

  if (checked) {
    darkTheme();
    return;
  }

  lightTheme();
}

function darkTheme() {
  bodyClassList.remove(LIGHT);
  bodyClassList.add(DARK);
  localStorage.setItem('theme', DARK);
}

function lightTheme() {
  bodyClassList.remove(DARK);
  bodyClassList.add(LIGHT);
  localStorage.setItem('theme', LIGHT);
}
