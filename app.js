/*
let myRequest = new XMLHttpRequest();

myRequest.open(
  "GET",
  "https://api.myjson.online/v1/records/6ef8c1a1-179a-425b-8066-97f58bf804f9"
);
myRequest.send();

//console.log(myRequest);

myRequest.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    let mainData = JSON.parse(this.responseText).data;
    //console.log(mainData);
    let divParent = document.createElement("div");
    divParent.id = Object.keys(JSON.parse(this.responseText))[0];
    document.body.appendChild(divParent);
    for (let item in mainData) {
      let divChild = document.createElement("div");
      divParent.appendChild(divChild);
      let heading = document.createElement("h2");
      heading.textContent = mainData[item].content;
      divChild.appendChild(heading);
      let paragraphOne = document.createElement("p");
      paragraphOne.textContent = mainData[item].title;
      divChild.appendChild(paragraphOne);
      let paragraphTwo = document.createElement("p");
      paragraphTwo.textContent = mainData[item].writer;
      divChild.appendChild(paragraphTwo);
      let paragraphThree = document.createElement("p");
      paragraphThree.textContent = mainData[item].section;
      divChild.appendChild(paragraphThree);
    }
  }
};
*/
/*
myRequest.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    let  mainData = JSON.parse(this.responseText).data;
    for (let item in mainData) {
      mainData[item].section = "All";
    }
    let updatedData = JSON.stringify(mainData);
    console.log(updatedData);
  }
}
*/