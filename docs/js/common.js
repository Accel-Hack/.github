document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === "#") {
        e.preventDefault(); 
      } else if (targetId === "#top") {
        e.preventDefault(); 
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      } else {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault(); 
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
      }
    });
  });

// ハンバーガーメニューの開閉機能
document.getElementById('humberger').addEventListener('click', function() {
  var menu = document.getElementById('nav-menu');
  menu.classList.toggle('is-active');
  this.classList.toggle('is-active');

  var header = document.querySelector('.l-header');
  if (this.classList.contains('is-active')) {
      header.style.zIndex = 19;
      header.style.backgroundColor = '#F5F4F2';
  } else {
      header.style.zIndex = '';
      header.style.backgroundColor = '';
  }
});

// アンカーリンククリックでメニューを閉じる機能
document.querySelectorAll('.l-header__nav-link').forEach(function(link) {
  link.addEventListener('click', function() {
      var menu = document.getElementById('nav-menu');
      var humberger = document.getElementById('humberger');
      var header = document.querySelector('.l-header');

      // メニューとハンバーガーのis-activeクラスを削除してメニューを閉じる
      if (menu.classList.contains('is-active')) {
          menu.classList.remove('is-active');
          humberger.classList.remove('is-active');
          header.style.zIndex = '';
          header.style.backgroundColor = '';
      }
  });
});

document.addEventListener('DOMContentLoaded', function() {
    var links = document.querySelectorAll('.p-index-work__list-link');
    var container = document.querySelector('.p-index-work__container'); // コンテナを取得

    links.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            container.classList.add('modal-open'); // コンテナにmodal-openクラスを追加
            var modal = this.nextElementSibling;
            modal.classList.add('show');
            e.stopPropagation();
        });
    });

    document.addEventListener('click', function(e) {
        // コンテナが modal-open クラスを持っているかチェック
        if (container.classList.contains('modal-open')) {
            // モーダル自体またはモーダル内の要素がクリックされたかどうかをチェック
            var modals = document.querySelectorAll('.p-index-work__modal');
            var isModalClicked = Array.from(modals).some(function(modal) {
                return modal.contains(e.target);
            });

            if (!isModalClicked) {
                container.classList.remove('modal-open');
                modals.forEach(function(modal) {
                    modal.classList.remove('show');
                });
            }
        }
    });

    var closeButtons = document.querySelectorAll('.p-index-work__modal-close-area');
    closeButtons.forEach(function(btn) {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            container.classList.remove('modal-open');
            var modal = this.closest('.p-index-work__modal');
            modal.classList.remove('show');
            e.stopPropagation();
        });
    });

    // モーダル内でのクリックイベントは外側のクリックとして検知されないようにする
    modals.forEach(function(modal) {
        modal.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    });
});






