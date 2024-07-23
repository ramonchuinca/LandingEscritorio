document.addEventListener('DOMContentLoaded', function() {
  const tableContainer = document.querySelector('.table-container');
  const table = document.querySelector('.scrollable-table');

  tableContainer.addEventListener('scroll', function() {
    const scrollLeft = tableContainer.scrollLeft;
    if (scrollLeft > 0) {
      table.classList.add('scrolling');
    } else {
      table.classList.remove('scrolling');
    }
  });
});
