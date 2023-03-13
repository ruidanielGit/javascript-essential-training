const updateBackpack = (update) => {
  let main = document.querySelector("main");
  // eslint-disable-next-line no-undef
  main.innerHTML = markup(backpack);
  console.info(update);
};

//const -> variable
//const backpack its a container
const backpack = {
  //backpack its an object
  name: "Everyday Backpack", //proporties
  volume: 30, //proporties
  color: "grey", //proporties
  pocketNum: 15, //proporties
  strapLength: {
    left: 26, //proporties
    right: 26, //proporties
  },
  lidOpen: false, //proporties
  toggleLid: function (lidStatus) {
    //method that contains a function
    this.lidOpen = lidStatus; // 'this' means this current object
    updateBackpack(`Lid status changed.`);
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
    updateBackpack(`Strap lengths updated.`);
  },
};

export default backpack;
