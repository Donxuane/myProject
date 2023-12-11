const bar=document.getElementById('bar');
const close=document.getElementById('close');
const nav=document.getElementById('navbar');

if(bar){
    bar.addEventListener('click',()=>{
        nav.classList.add('active')
    })
}
if(close){
    close.addEventListener('click',()=>{
        nav.classList.remove('active')
    })
}
{
var currentPhotoIndex = 0;
    var photoUrls = ["photo/carssss/R00194773-21fr.jpg", "photo/carssss/R00194773-22.jpg", "photo/carssss/R00194773-20shepaseba.jpg"]; // Replace with your photo URLs

    function openModal(imageUrl, index) {
        var modal = document.getElementById("modal");
        var modalPhoto = document.getElementById("modal-photo");

        currentPhotoIndex = index;
        modalPhoto.src = imageUrl;
        modal.style.display = "flex";
    }


    function closeModal() {
            var modal = document.getElementById("modal");
            modal.style.display = "none";
        }
    

    function changePhoto(step) {
        currentPhotoIndex += step;

        if (currentPhotoIndex < 0) {
            currentPhotoIndex = photoUrls.length - 1;
        } else if (currentPhotoIndex >= photoUrls.length) {
            currentPhotoIndex = 0;
        }

        var modalPhoto = document.getElementById("modal-photo");
        modalPhoto.src = photoUrls[currentPhotoIndex];
    }

    // Close the modal if the user clicks outside the modal content
    window.onclick = function (event) {
        var modal = document.getElementById("modal");
        if (event.target === modal) {
            closeModal();
        }
    };
}
