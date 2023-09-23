document.getElementById("marksheet").addEventListener("submit", function(event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var usn = document.getElementById("usn").value;
    if (name === "Nanditha P" && usn === "4UB21CS033") {
        window.location.href = "n1.html";
    } else if (name === "Kavya R K" && usn === "4UB21CS020") {
        window.location.href = "k1.html";
    } else if (name === "Sanjana N" && usn === "4UB21CS047") {
        window.location.href = "s1.html";
    } else if (name === "Anusha N L" && usn === "4UB21CS003") {
        window.location.href = "a1.html";
    } else if (name === "Isha Gundal" && usn === "4UB21CS018") {
        window.location.href = "i1.html";
    } else if (name === "Megha B N" && usn === "4UB21CS026") {
        window.location.href = "m1.html";
    } else if (name === "Pooja Y P" && usn === "4UB21CS038") {
        window.location.href = "po1.html";
    } else if (name === "Pramodhini V" && usn === "4UB21CS041") {
        window.location.href = "pr1.html";
    } else {
        alert("Invalid name or USN.Please try again");
    }

});