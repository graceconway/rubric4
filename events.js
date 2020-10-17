var arizona = document.getElementById("arizona");
var maine = document.getElementById("maine");
var colorado = document.getElementById("colorado");

arizona.addEventListener("click", photoLink);
missouri.addEventListener("click", photoLink);
colorado.addEventListener("click", photoLink);

function photoLink() {
  document.querySelectorAll()
  var photoId = this.attributes["data-img"].value;
  var photo = document.getElementById(photoId);
  if (photo.className === "hide") {
    photo.className = "";
  } else {
    photo.class.Name = "hide";
  }
}






}
