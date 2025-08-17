import { fetchDogData } from './storageControl';

const tabDiaryEl = document.querySelector('.tab_diary') as HTMLDivElement;
const tabimageEl = document.querySelector('.tab_image') as HTMLDivElement;

const diarySectionEl = document.querySelector('.section-main') as HTMLDivElement;
const diarySectionsubEl = document.querySelector('.section-sub') as HTMLDivElement;
const imageSectionEl = document.querySelector('.section-image') as HTMLDivElement;
// const storageListEl = document.querySelector('.cardList') as HTMLDivElement;

const skeletonListEl = document.querySelector('.skeleton-list') as HTMLDivElement;

const dropdownDiaryEl = document.querySelector('.dropdown-diary') as HTMLDivElement;
const dropdownImageEl = document.querySelector('.dropdown-img') as HTMLDivElement;

// let currentActive: 'diary' | 'image' = 'diary';

const pictureBasic = document.querySelector('#basic') as HTMLLIElement;
const pictureHorizontal = document.querySelector('#horizontal') as HTMLLIElement;
const pictureVertical = document.querySelector('#vertical') as HTMLLIElement;

const tabDiary = () => {
  tabDiaryEl.classList.add('activeMenu');
  tabimageEl.classList.remove('activeMenu');
  diarySectionEl.style = 'display: flex;';
  imageSectionEl.style = 'display: none;';
  dropdownDiaryEl.style.display = 'flex';
  dropdownImageEl.style.display = 'none';
};

let dogData: string[] | undefined;

const tabImage = async (type: string) => {
  tabDiaryEl.classList.remove('activeMenu');
  tabimageEl.classList.add('activeMenu');
  diarySectionEl.style = 'display: none;';
  imageSectionEl.style = 'display: flex;';
  dropdownDiaryEl.style.display = 'none';
  dropdownImageEl.style = 'display: flex;';
  dogData = await fetchDogData();
  // console.log(dogData);

  skeletonListEl.style = 'display: none;';

  imageSectionEl.innerHTML = '';

  const imgCard = document.createElement('img');

  imgCard.classList.add(type);

  dogData?.forEach((item: string) => {
    const imgClone = imgCard.cloneNode() as HTMLImageElement;
    imgClone.setAttribute('src', item);
    imageSectionEl.insertAdjacentElement('beforeend', imgClone);
  });
};

// TODO
const mutateImageSection = (type: string) => {
  imageSectionEl.innerHTML = '';
  const imgCard = document.createElement('img');
  imgCard.classList.add(type);
  dogData?.forEach((item: string) => {
    const imgClone = imgCard.cloneNode() as HTMLImageElement;
    imgClone.setAttribute('src', item);
    imageSectionEl.insertAdjacentElement('beforeend', imgClone);
  });
};

tabDiaryEl?.addEventListener('click', tabDiary);
tabimageEl?.addEventListener('click', tabImage.bind(null, 'basic-ratio-1-1'));

pictureBasic.addEventListener('click', mutateImageSection.bind(null, 'basic-ratio-1-1'));
pictureHorizontal.addEventListener('click', mutateImageSection.bind(null, 'basic-ratio-4-3'));
pictureVertical.addEventListener('click', mutateImageSection.bind(null, 'basic-ratio-3-4'));
