// file path: src/renderProfile.js

export default (profileData) => {
  const { name, company } = profileData;
  // eslint-disable-next-line no-undef
  const profileElem = document.querySelector('.profile');
  profileElem.textContent = `${name} from ${company}`;
};
