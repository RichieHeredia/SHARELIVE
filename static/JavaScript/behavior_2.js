function countDown(y,m,d,h,selector){

  simplyCountdown(selector, {
              year: y, // required
              month: m, // required
              day: d, // required
              hours: h, // Default is 0 [0-23] integer
              minutes: 0, // Default is 0 [0-59] integer
              seconds: 0, // Default is 0 [0-59] integer
              words: { //words displayed into the countdown
                  days: ' Día',
                  hours: ' hora',
                  minutes: ' minuto',
                  seconds: '  segundo',
                  pluralLetter: 's'
              },
              plural: true, //use plurals
              inline: true, //set to true to get an inline basic countdown like : 24 days, 4 hours, 2 minutes, 5 seconds
              inlineClass: 'simply-countdown-inline', //inline css span class in case of inline = true
              // in case of inline set to false
              enableUtc: true, //Use UTC as default
              onEnd: function() {

                return;
               }, //Callback on countdown end, put your own function here
              refresh: 1000, // default refresh every 1s
              sectionClass: 'simply-section', //section css class
              amountClass: 'simply-amount', // amount css class
              wordClass: 'simply-word', // word css class
              zeroPad: false,
              countUp: false
      });


};
countDown(2020,5,11,7,".counter-1e");
countDown(2020,6,2,11,".counter-2e");
countDown(2020,7,2,16,".counter-3e");
countDown(2020,5,8,17,".counter-4e");
countDown(2020,5,6,21,".counter-5e");
countDown(2020,5,11,1,".counter-6e");


// username
// Get the username
function getData(){
  var username = document.getElementById('username').value;
  var modal = document.getElementById("id01");
  var btnin = document.getElementById('sign');
  var parr = document.getElementById('msg');
  //menu options
  var lib = document.getElementById('library');

  if(username==="sharelive"){
    console.log(username);
    modal.style.display = "none";
    btnin.remove();
    parr.innerHTML="Bienvenido "+username;
    lib.href="articles.html";

  }else{
    console.log("usuario no registrado");
    alert("usuario no registrado");
    modal.style.display = "none";
  }

}
