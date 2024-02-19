const input = document.querySelector("input");
const btn = document.querySelector("button");
const result = document.querySelector(".result");

btn.addEventListener("click", () => {
    fetch(`https://api.genderize.io/?name=${input.value}`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            result.innerHTML = `<p>Gender of <strong>${input.value}</strong> is <strong>${data.gender}</strong></p>`;
            if (input.value === "Raj" || input.value === "raj" || input.value === "RAJ") {
                result.innerHTML = `<p>Gender of <strong>${input.value}</strong> is <strong>Gay</strong></p>`;
            }
            else if (input.value === "Harshad" || input.value === "harshad" || input.value === "HARSHAD") {
                result.innerHTML = `<p>Gender of <strong>${input.value}</strong> is <strong>Gay</strong></p>`;
            }
        });
});