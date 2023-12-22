document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById('dropdownButton');
    const menu = document.getElementById('dropdownMenu');
  
    button.addEventListener('click', function () {
      menu.classList.toggle('hidden');
    });
  
    document.addEventListener('click', function (event) {
      if (!button.contains(event.target) && !menu.contains(event.target)) {
        menu.classList.add('hidden');
      }
    });
  });

// denah kelas
document.addEventListener('DOMContentLoaded', function () {
    const submit = document.getElementById('dropdownSubmit');
    const denah = document.getElementById('dropdownDenah');
  
    submit.addEventListener('click', function () {
      denah.classList.toggle('hidden');
    });
  
    document.addEventListener('click', function (event) {
      if (!submit.contains(event.target) && !denah.contains(event.target)) {
        denah.classList.add('hidden');
      }
    });
  });