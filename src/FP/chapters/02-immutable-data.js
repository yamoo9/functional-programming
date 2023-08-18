// --------------------------------------------------------------------------
// 📌 [함수형 프로그래밍 개념 학습]
// --------------------------------------------------------------------------
// - 불변 데이터(immutable data)
//   - 생성 이후 변경이 불가능한 데이터
//   - 변경할 수 없는 것이 좋다고? 왜?
//
// - 데이터 불변화 및 관리 방법
//   - Object.freeze()
//   - 객체 또는 배열 상태 관리
// --------------------------------------------------------------------------

// map(callback)
// filter(callback)
// toSorted(callback)

// 변경 가능한 데이터
const note = {
  id: 'note-1',
  title: '함수형 프로그래밍',
  description: `함수형 프로그래밍은 프로그래밍 패러다임 중 하나로, 
                "프로그래밍을 함수들의 조합으로 바라보는 것"입니다.`,
};

const noteList = [
  note,
  {
    id: 'note-2',
    title: '동일 입력 → 동일 출력',
    description: '함수형 프로그래밍은 "동일한 입력 값에 대해서는 항상 동일한 출력 값을 보장"합니다.',  
  },
];


// --------------------------------------------------------------------------
// [데이터 불변화]

// 동결(freeze) 시키다.
Object.freeze(note);
Object.freeze(noteList);

// console.log('immutable? ', Object.isFrozen(note));

// 수정 가능한(mutable)?
// note.title = 'Functional Programming';
// note.newProp = 'new property';

// Object.thaw = function(data) {
//   return { ...data };
// };

// const mutableNote = Object.thaw(note);

// console.log('immutable?', Object.isFrozen(mutableNote));

// --------------------------------------------------------------------------
// - [객체 불변 데이터 관리]
//   - 객체 속성 추가
// note.newProp = 'new property';
let updateNote = Object.freeze(
  { ...note, newProp: 'new property' }
);

// console.log({ note })

//   - 객체 속성 수정
// note.title = 'Functional Programming';
updateNote = Object.freeze({
  ...note,
  title: 'Functional Programming',
});

//   - 객체 속성 삭제

const { title, ...restUpdateNote } = updateNote;

updateNote = Object.freeze({ ...restUpdateNote });

console.log({ updateNote });

// --------------------------------------------------------------------------
// - [배열 불변 데이터 관리]
//   - 배열 원소 추가
let updateNoteList = [
  ...noteList,
  {
    id: 'note-3',
    title: 'react router',
    description: 'CSR - 클라이언트 사이드 라우팅 라이브러리'
  }
];

//   - 배열 원소 수정
updateNoteList = updateNoteList.map(note => {
  if (note.id === 'note-3') {
    return { ...note, title: '리액트 라우터' };
  } else {
    return note;
  }
})

//   - 배열 원소 삭제
updateNoteList = updateNoteList.filter(note => !note.id.includes('note-2'));

console.log(updateNoteList);