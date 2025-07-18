const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("nav .nav_container ul li");

const scheduleBtn = document.querySelectorAll(".schedule-nav-btn");

window.onscroll = () => {
  var current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (window.pageYOffset >= sectionTop-150) {
      current = section.getAttribute("id");
    }
  });

  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });


  var navbar = document.getElementById("full_page_btn");
  var sticky = navbar.offsetTop;

  var sectionTwo = document.getElementById("about").offsetTop;

  if (window.pageYOffset + 150 >= sectionTwo) {
    navbar.classList.remove("full_page_btn_sticky");
  } else {
    navbar.classList.add("full_page_btn_sticky");
  }
};

function showTable(tableId, tableBtn) {
  const tables = document.querySelectorAll('.schedule-table');
  tables.forEach(table => {
    if (table.id === tableId) {
      table.style.display = 'table'; // Show the selected table
    } else {
      table.style.display = 'none'; // Hide other tables
    }
  });

  scheduleBtn.forEach((li) => {
    li.classList.remove("active");
  });

  var tableBtn = document.getElementById(tableBtn);
  tableBtn.classList.add("active");
}


function masterStepsContent(contId, btnId){
  const master_step_cont = document.querySelectorAll('.master_step_cont');

  master_step_cont.forEach(content => {
    if (content.id === contId) {
      content.style.display = 'block'; // Show the selected table
    } else {
      content.style.display = 'none'; // Hide other tables
    }
  });

  const steps_btna = document.querySelectorAll('.steps-btn');
  steps_btna.forEach((li) => {
    li.classList.remove("active");
  });

  
  var activeBtn = document.getElementById(btnId);
  activeBtn.classList.add("active");

}