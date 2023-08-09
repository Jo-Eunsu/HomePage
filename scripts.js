// 예시로 가상의 사용자 아이디 배열을 만들어 사용합니다.
const onlineUsers = ['박서준', '김하늘', '이민호', '최예린', '정우성', '송혜교', '황정민'];

// 페이지가 로드되면 실행되는 함수
document.addEventListener('DOMContentLoaded', () => {
  const onlineUsersList = document.getElementById('online-users');

  // 가상의 사용자 아이디 배열을 기반으로 동적으로 목록을 생성합니다.
  onlineUsers.forEach(user => {
    const listItem = document.createElement('li');
    listItem.textContent = user;
    onlineUsersList.appendChild(listItem);
  });
});

const slides = document.querySelectorAll('.slide');
let slideIndex = 0;

// 3초마다 이미지 슬라이드
setInterval(() => {
  slideIndex = (slideIndex + 1) % slides.length;
  const offset = -slideIndex * 100 + '%';
  slides.forEach(slide => {
    slide.style.transform = `translateX(${offset})`;
  });
}, 3000);

// 블로그 게시물 추가
document.getElementById('post-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const postContent = document.getElementById('post-content').value;
  
    if (postContent.trim() === '') {
      alert('Please write something in your post.');
      return;
    }
  
    const postElement = document.createElement('div');
    postElement.className = 'blog-post';
    postElement.textContent = postContent;
  
    document.getElementById('blog-posts').appendChild(postElement);
  
    document.getElementById('post-content').value = ''; // Reset textarea
  });