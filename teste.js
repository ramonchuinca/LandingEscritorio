document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('.navegação');

  menuToggle.addEventListener('click', function() {
    navigation.classList.toggle('active');
  });
});
