const emptyDiaryEl = document.querySelector('.empty-diary') as HTMLSpanElement;
const cardContainerEl = document.querySelector('.cardContainer')! as HTMLSpanElement;

export type Comment = {
  id: number;
  text: string;
  date: string;
};

export type TCard = {
  id: number;
  imgUrl: string;
  state: string;
  date: string;
  title: string;
  content: string;
  comments: Comment[];
};

export const initialData: TCard[] = [];

// 초기데이터 설정
export const initLocalStorage = (data: TCard[]) => {
  const convertString = JSON.stringify(data);
  localStorage.setItem('myDiary', convertString);
};

export const getLocalStorage = () => {
  const myDiary = localStorage.getItem('myDiary')!;
  const parseString = JSON.parse(myDiary);

  if (!myDiary) {
    emptyDiaryEl.style.display = 'flex';
  } else {
    cardContainerEl.style.display = 'grid';
  }

  return parseString;
};

export const setLocalStorage = (newData: TCard) => {
  // 데이터 추가
  const prevData: TCard[] = getLocalStorage();
  let updateData: TCard[];

  if (!prevData) {
    updateData = [newData];
  } else {
    updateData = [...prevData, newData];
  }

  const convertString = JSON.stringify(updateData);
  localStorage.setItem('myDiary', convertString);
};

const setTime = new Promise((resolve) => {
  setTimeout(() => {
    resolve('Time is up!');
  }, 3000);
});

export const fetchDogData = async () => {
  await setTime;
  const res = await fetch('https://dog.ceo/api/breeds/image/random/10');
  const data = await res.json();
  return data.message;
};

//
//
//

export const getLocalStorageDetail = () => {
  const myDiary = localStorage.getItem('myDiary')!;
  const parseString = JSON.parse(myDiary);

  return parseString;
};
