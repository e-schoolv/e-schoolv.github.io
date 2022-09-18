function myFunction() {
  document.getElementById("courses").scrollIntoView({block: "center", behavior: "smooth", inline: "center"});
}

function ScrollToNews() {
  document.getElementById("olympiad_h2").scrollIntoView({block: "center", behavior: "smooth", inline: "center"});
}

function ScrollToHelp() {
  document.getElementById("exams_scroll").scrollIntoView({block: "center", behavior: "smooth", inline: "center"});
}

function SscrollToHelp() {
  document.getElementById("teachers_scroll").scrollIntoView({block: "center", behavior: "smooth", inline: "center"});
}

function S2crollToHelp() {
  document.getElementById("student_council_scroll").scrollIntoView({block: "center", behavior: "smooth", inline: "center"});
}


  function ScrollToCounter()
  {
    document.getElementById('mark_counter').scrollIntoView();
  }

  function calculate(){
    let qanak = prompt("Գրեք ձեր գնահատականների քանակը: ","");
    let sum=0,qarord;


    if (qanak <= 0) {
      alert("Դուք գրել եք սխալ գնահատականների քանակ");
    }
    else{
      for (let i = 1;i <= qanak;i++) {
       let n = +prompt("Գրեք ձեր " + i +  " գնահատականը:" , "");
        sum += n;
        qarord = sum / qanak;
      }
      if(qarord <= 0){
        qarord = 1;
      }
      else if (qarord > 10) {
        qarord = 10;
      }
      alert("Ձեր քարորդը: " + Math.round(qarord));
    }
  }

  function DropDown() {
    document.getElementById("dropdown").classList.toggle("show");
  }
