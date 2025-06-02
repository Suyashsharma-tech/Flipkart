// Smooth hover effects on categories
document.querySelectorAll('main li').forEach(item => {
  item.addEventListener('click', () => {
    alert(`You clicked on ${item.textContent.trim()}!`);
  });
});
