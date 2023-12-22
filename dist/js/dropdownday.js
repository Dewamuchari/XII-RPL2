document.addEventListener('DOMContentLoaded', function () {
  const dayDropdown = document.getElementById('dayDropdown');
  const dayDropdownMenu = document.getElementById('dayDropdownMenu');

  dayDropdown.addEventListener('click', function () {
    dayDropdownMenu.classList.toggle('hidden');
  });

  document.addEventListener('click', function (event) {
    const isClickInside = dayDropdown.contains(event.target) || dayDropdownMenu.contains(event.target);

    if (!isClickInside) {
      dayDropdownMenu.classList.add('hidden');
    }
  });
});
//selasa
document.addEventListener('DOMContentLoaded', function () {
    const selasaDropdown = document.getElementById('selasaDropdown');
    const selasaDropdownMenu = document.getElementById('selasaDropdownMenu');
  
    selasaDropdown.addEventListener('click', function () {
      selasaDropdownMenu.classList.toggle('hidden');
    });
  
    document.addEventListener('click', function (event) {
      const isClickInside = selasaDropdown.contains(event.target) || selasaDropdownMenu.contains(event.target);
  
      if (!isClickInside) {
        selasaropdownMenu.classList.add('hidden');
      }
    });
  });
//rabu
document.addEventListener('DOMContentLoaded', function () {
    const rabuDropdown = document.getElementById('rabuDropdown');
    const rabuDropdownMenu = document.getElementById('rabuDropdownMenu');
  
    rabuDropdown.addEventListener('click', function () {
        rabuDropdownMenu.classList.toggle('hidden');
    });
  
    document.addEventListener('click', function (event) {
      const isClickInside = rabuDropdown.contains(event.target) || rabuDropdownMenu.contains(event.target);
  
      if (!isClickInside) {
        rabuDropdownMenu.classList.add('hidden');
      }
    });
  });
//kamis
document.addEventListener('DOMContentLoaded', function () {
    const kamisDropdown = document.getElementById('kamisDropdown');
    const kamisDropdownMenu = document.getElementById('kamisDropdownMenu');
  
    kamisDropdown.addEventListener('click', function () {
        kamisDropdownMenu.classList.toggle('hidden');
    });
  
    document.addEventListener('click', function (event) {
      const isClickInside = kamisDropdown.contains(event.target) || kamisDropdownMenu.contains(event.target);
  
      if (!isClickInside) {
        kamisDropdownMenu.classList.add('hidden');
      }
    });
  });
//jumat
document.addEventListener('DOMContentLoaded', function () {
    const jumatDropdown = document.getElementById('jumatDropdown');
    const jumatDropdownMenu = document.getElementById('jumatDropdownMenu');
  
    jumatDropdown.addEventListener('click', function () {
        jumatDropdownMenu.classList.toggle('hidden');
    });
  
    document.addEventListener('click', function (event) {
      const isClickInside = jumatDropdown.contains(event.target) || jumatDropdownMenu.contains(event.target);
  
      if (!isClickInside) {
        jumatDropdownMenu.classList.add('hidden');
      }
    });
  });
//sabtu
document.addEventListener('DOMContentLoaded', function () {
    const sabtuDropdown = document.getElementById('sabtuDropdown');
    const sabtuDropdownMenu = document.getElementById('sabtuDropdownMenu');
  
    sabtuDropdown.addEventListener('click', function () {
        sabtuDropdownMenu.classList.toggle('hidden');
    });
  
    document.addEventListener('click', function (event) {
      const isClickInside = sabtuDropdown.contains(event.target) || sabtuDropdownMenu.contains(event.target);
  
      if (!isClickInside) {
        sabtuDropdownMenu.classList.add('hidden');
      }
    });
  });