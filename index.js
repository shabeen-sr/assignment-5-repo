// bg color change

const randomColor = document.getElementById("colorcng");
const body = document.querySelector("body");

randomColor.addEventListener("click", function () {
    const colorIndex = Math.floor(Math.random() * 16777215).toString(16);
    body.style.backgroundColor = "#" + colorIndex;
    })


// task board


let tasks = 6;
let completed = 0;

function completeTask(button, taskName) {
  if (!button.disabled) {
    tasks--;
    completed += 1;
    button.disabled = true;
    alert("Board Update Successfully.");
    document.getElementById("tasks").textContent = tasks + " Tasks";
    document.getElementById("completed").textContent = completed + " Completed";
    document.getElementById("doneMessage").style.display = "block";
    setTimeout(() => {
      document.getElementById("doneMessage").style.display = "none";
    }, 1000);

    let log = document.createElement("p");
    log.textContent = taskName + "at 12.00 am";
    document.getElementById("activityLog").appendChild(log);

    if (tasks === 0) {
      alert("Congrates!You have completed all the current tasks");
    }
  }
}


// Clear history


  function clearNotification() {
    document.getElementById('notification').innerHTML = '';
  }

  document.getElementById('clearBtn').addEventListener('click', clearNotification);




//display current date


        function displayDateBD() {
          const options = { 
            timeZone: 'Asia/Dhaka', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          };
      
          const currentDate = new Date().toLocaleDateString('en-US', options);
          document.getElementById('currentDate').innerHTML = currentDate;
        }
      
        displayDateBD();
