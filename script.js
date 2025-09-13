document.getElementById("messageForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const birthdate = document.getElementById("birthdate").value;
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const message = document.getElementById("message").value;

  const currentTime = new Date().toString();

  document.getElementById("time").innerHTML = `<strong>Current time :</strong> ${currentTime}`;
  document.getElementById("result").innerHTML = `
    <strong>Nama :</strong> ${name}<br>
    <strong>Tanggal Lahir :</strong> ${birthdate}<br>
    <strong>Jenis Kelamin :</strong> ${gender}<br>
    <strong>Pesan :</strong> ${message}
  `;
});
