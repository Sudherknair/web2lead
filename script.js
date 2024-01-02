function beforesubmit(){

    let outputdates = document.querySelector(".outputdate");
    let inputdates = document.querySelector(".inputdate");
    console.log("inputdate",inputdates.value); //convert string to date format;

    let formatteddate = new Date(inputdates.value).toLocaleDateString("en-US");
    outputdates = formatteddate;
}