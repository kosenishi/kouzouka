document.getElementById('fileInput').addEventListener('change', function (e) {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = function () {
        document.getElementById('preview').src = reader.result;
    }

    if (file) {
        reader.readAsDataURL(file);
    } else {
        document.getElementById('preview').src = "";
    }
});
