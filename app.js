var state = {
  employeeList: [
    {
      name: 'Jan',
      officeNum: 1,
      phoneNum: '222-222-2222'
    },
    {
      name: 'Juan',
      officeNum: 304,
      phoneNum: '489-789-8789'
    },
    {
      name: 'Margie',
      officeNum: 789,
      phoneNum: '789-789-7897'
    },
    {
      name: 'Sara',
      officeNum: 32,
      phoneNum: '222-789-4654'
    },
    {
      name: 'Tyrell',
      officeNum: 3,
      phoneNum: '566-621-0452'
    },
    {
      name: 'Tasha',
      officeNum: 213,
      phoneNum: '789-766-5675'
    },
    ,
    {
      name: 'Ty',
      officeNum: 211,
      phoneNum: '789-766-7865'
    },
    {
      name: 'Sarah',
      officeNum: 345,
      phoneNum: '222-789-5231'
    }
  ],

  activeList: [],

  userIn: {
  name: 0 ,
  officeNum: 0 ,
  phoneNum: 0
  },

  homeCheck: true,

  userReset: '',

  requiredAction: ''
}



//
// UNIVERSAL CALLS
//
function renderElement (){
  $("#display-board").empty();
  state.activeList.forEach(element => {
    $("#display-board").append(`<div class= "listItem">${element}</div>`);
  });
  console.log(state.activeList);

  state.activeList.forEach(element => {
    state.activeList.splice(0, 1);
  });
  
      
}

function submit() {
  event.preventDefault();

  //if elements are filled in the userIn object takes the values
  if ($(".name").val() !== undefined){
    state.userIn.name = $(".name").val();
  }
  if ($(".name").val() !== undefined){
    state.userIn.officeNum = $(".officeNum").val();
  }
  if ($(".name").val() !== undefined){
    state.userIn.phoneNum = $(".phoneNum").val();
  }

  //debug
  console.log(state.employeeList);
  console.log(state.userIn);

  //determines which action is required (print not needed as no user input)
  switch (state.requiredAction) {
    case "printUser":
      displayPrint();
      break;
    
    case "verifyUser":
      verifyUser();
      break;

    case "lookupUser":
      lookupUser();
      break;

    case "containsUser":
      containsUser();
      break;

    case "updateUser":
      updateUser();
      break;

     case "addUser":
      addUser();
      break;

    case "deleteUser":
      deleteUser();
      break;
  }
}

// Resets hider elements
function setInput(){
  switch (state.userReset) {
    case "setName":
      setName();
      break;
  
    case "setAllFeilds":
      setAllFeilds();
      break; 
  }

  console.log(state.userReset);
}

function setName() {
    $(".name").toggleClass("hider");
    $(".btn").toggleClass("hider");
    $(".divider").toggleClass("hider");
    $(".fas").toggleClass("hider");
}

function setAllFeilds() {
  $(".name").toggleClass("hider");
  $(".officeNum").toggleClass("hider");
  $(".phoneNum").toggleClass("hider");
  $(".btn").toggleClass("hider");
  $(".divider").toggleClass("hider");
  $(".fas").toggleClass("hider");
}

function setHome() {
  if (state.homeCheck){
    $("#home").toggleClass("hider");
    state.homeCheck = false;
  }
}



//
// Home
//
function displayHome(){
  renderElement();

  state.homeCheck = false;
  setHome();
  state.homeCheck = true;

  setInput();
}

//
// PRINT EMPLOYEE LIST ROUTINE
//
function displayPrint() {
  renderElement();


  setHome();

  setInput();
  state.userReset = "print";

  state.employeeList.forEach(element => {
    state.activeList.push(element.name);
    state.activeList.push(element.officeNum);
    state.activeList.push(element.phoneNum);
    state.activeList.push("<br>");
  });

  renderElement();
}


//
// VERIFY EMPLOYEE LIST ROUTINE
//
function displayVerify(){
  event.preventDefault();

  //resets activelist
  renderElement();

  //reveal name and button, resets previous buttons
  setHome();
  setInput();
  state.userReset = "setName";
  setInput();

  //sets submit button to verify
  state.requiredAction = "verifyUser";
}

function verifyUser() {
  event.preventDefault();

  var found = "Employee Not Found"
  state.employeeList.forEach(element => {
    if (element.name === state.userIn.name){
      found = "Employee Found";
    }
  });
  
  console.log(state.activeList);

  state.activeList.push(found);
  renderElement();
}


//
// LOOKUP LIST ROUTINE
//
function displayLookup(){
  
  renderElement();

  setHome();
  setInput();
    state.userReset = "setName";
  setInput();

  state.requiredAction = "lookupUser";
}

function lookupUser() {
  state.employeeList.forEach(element => {
    if (element.name == state.userIn.name){
      state.activeList.push(element.name);
      state.activeList.push(element.officeNum);
      state.activeList.push(element.phoneNum);
    }
  });

  renderElement();
}


//
// Contains List Routine
//
function displayContains(){

  renderElement();

  setHome();
  setInput();
  state.userReset = "setName";
  setInput();

  state.requiredAction = "containsUser";
}

function containsUser() {
  state.employeeList.forEach(element => {
    if (element.name.includes(state.userIn.name)){
      state.activeList.push(element.name);
      state.activeList.push(element.officeNum);
      state.activeList.push(element.phoneNum);
    }
  });

  renderElement();
}


//
// Update List Routine
//
function displayUpdate(){

  renderElement();

  setHome();
  setInput();
  state.userReset = "setAllFeilds";
  setInput();

  state.requiredAction = "updateUser";

}

function updateUser() {

  state.employeeList.forEach(element => {
    if (element.name == state.userIn.name){
      element.officeNum == userIn.officeNum;
      element.phoneNum = userIn.phoneNum;

      state.activeList.push(element.name);
      state.activeList.push(element.officeNum);
      state.activeList.push(element.phoneNum);

    }
  });

  renderElement();

}


//
// ADD LIST ROUTINE
//
function displayAdd() {

  renderElement();

  setHome();
  setInput();
  state.userReset = "setAllFeilds";
  setInput();

  state.requiredAction = "addUser";
}

function addUser() {
  state.employeeList.push(state.userIn);
  console.log(state.employeeList);

  state.activeList.push(userIn.name);
  state.activeList.push(userIn.officeNum);
  state.activeList.push(userIn.phoneNum);

  renderElement();
}


//
// DELETE LIST ROUTINE
//
function displayDelete() {
  
  renderElement();

  setHome();
  setInput();
  state.userReset = "setName";
  setInput();

  state.requiredAction = "deleteUser";
}

function deleteUser() {
  state.employeeList.forEach(element => {
    if (element.name === state.userIn.name){
      state.employeeList.splice(state.employeeList.indexOf(element), state.employeeList.indexOf(element) + 1); 
    
      state.activeList.push("Employee Deleted")
    }
  });

  console.log(state.employeeList);

  renderElement();
}

$("#Home").on('click', displayHome);
$("#Print").on('click', displayPrint);
$("#Verify").on('click', displayVerify);
$("#Lookup").on('click', displayLookup);
$("#Contains").on('click', displayContains);
$("#Update").on('click', displayUpdate);
$("#Add").on('click', displayAdd);
$("#Delete").on('click', displayDelete);

$(".btn").on('click', submit);