document.addEventListener('DOMContentLoaded', init);


var canvas1, ctx1, canvas2, ctx2;
function init(){
    canvas1 = document.getElementById("my_canvas");
    ctx1 = canvas1.getContext("2d");
    
    
    creatDoughnutChart();

    canvas2 = document.getElementById("my_canvas2");
    ctx2 = canvas2.getContext("2d");
    
    
    createHorizontalBar();
}
    

function creatDoughnutChart(){
    new Chart(ctx1, {
        type: 'doughnut',
        data: {
          labels: ['Bronx', 'Brooklyn', 'Manhattan', 'Queens', 'Staten Island'],
          datasets: [
            {
              label: "Total Graduations",
              backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
              data: [50046,83148,62793,78132,20753]
            }
          ]
        },
        options: {
          title: {
            display: true,
            text: '2001-2006 NYC High School Graduation Outcomes - By Borough',
          }
        }
    
    });
}

/*
function createHorizontalBar(){
    new Chart(ctx2, {
        type: 'horizontalBar',
        data: {
           labels: ['Bronx', 'Brooklyn', 'Manhattan', 'Queens', 'Staten Island'],
              datasets: [
                {
                  label: "Total Graduations",
                  backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
                  data: [50046,83148,62793,78132,20753]
                }
              ]
            },
            options: {
              legend: { display: false },
              title: {
                display: true,
                text: ['2001-2006 New York City High School Graduation Outcomes - By Borough']
              }
            }
        });
    }*/

    function createHorizontalBar(){
       new Chart(ctx2, {
         type: 'bar',
         data: {
          labels: ["Bronx", "Brooklyn", "Manhattan", "Queens", "Staten Island"],
          datasets: [
            {
              label: "Total Graduations",
              backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
              data: [50046,83148,62793,78132,20753]
            }
          ]
        },
        options: {
          legend: { display: false },
          title: {
            display: true,
            text: 'Predicted world population (millions) in 2050'
          }
        }
    });
    }





    




