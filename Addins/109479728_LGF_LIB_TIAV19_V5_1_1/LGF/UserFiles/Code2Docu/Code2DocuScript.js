// Code2Docu Javascript for UserDefined documentation

//Script to exchange language
function changeLang(currentLang) {
    const regEx = new RegExp("/" + currentLang + "/", "gm");

    var currentURL = window.location.href;
    var selectElement = document.getElementById("langSelector");
    var selectedLang = selectElement.options[selectElement.selectedIndex];
    window.document.location.href = currentURL.replace(regEx, "/" + selectedLang.value + "/");
}