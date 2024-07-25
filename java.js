document.getElementById('pdfInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file && file.type === 'application/pdf') {
        const fileURL = URL.createObjectURL(file);
        document.getElementById('pdfViewer').src = fileURL;
    } else {
        alert('Please select a valid PDF file.');
    }
});

const draggableDiv = document.getElementById('draggableDiv');

draggableDiv.addEventListener('mousedown', function(e) {
    let shiftX = e.clientX - draggableDiv.getBoundingClientRect().left;
    let shiftY = e.clientY - draggableDiv.getBoundingClientRect().top;

    function moveAt(pageX, pageY) {
        draggableDiv.style.left = pageX - shiftX + 'px';
        draggableDiv.style.top = pageY - shiftY + 'px';
    }

    function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
    }

    document.addEventListener('mousemove', onMouseMove);

    draggableDiv.addEventListener('mouseup', function() {
        document.removeEventListener('mousemove', onMouseMove);
        draggableDiv.onmouseup = null;
    });

    draggableDiv.ondragstart = function() {
        return false;
    };
});
const draggableDiv1 = document.getElementById('draggableDiv1');

draggableDiv1.addEventListener('mousedown', function(e) {
    let shiftX = e.clientX - draggableDiv1.getBoundingClientRect().left;
    let shiftY = e.clientY - draggableDiv1.getBoundingClientRect().top;

    function moveAt(pageX, pageY) {
        draggableDiv1.style.left = pageX - shiftX + 'px';
        draggableDiv1.style.top = pageY - shiftY + 'px';
    }

    function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
    }

    document.addEventListener('mousemove', onMouseMove);

    draggableDiv1.addEventListener('mouseup', function() {
        document.removeEventListener('mousemove', onMouseMove);
        draggableDiv1.onmouseup = null;
    });

    draggableDiv1.ondragstart = function() {
        return false;
    };
});