document.getElementById('windForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Eingabewerte abrufen
    const windSpeed = parseFloat(document.getElementById('windSpeed').value);
    const windAngle = parseFloat(document.getElementById('windAngle').value);
    const boatSpeed = parseFloat(document.getElementById('boatSpeed').value);

    // Konvertiere Winkel in Radiant
    const windAngleRad = windAngle * (Math.PI / 180);

    // Apparent Wind Vektor
    const apparentWindX = windSpeed * Math.cos(windAngleRad);
    const apparentWindY = windSpeed * Math.sin(windAngleRad);

    // Boat Bewegung Vektor (angenommen in Richtung 0 Grad, also positive X-Achse)
    const boatVektorX = boatSpeed;
    const boatVektorY = 0;

    // Tatsächlicher Wind Vektor = Apparent Wind + Boat Vektor
    const actualWindX = apparentWindX + boatVektorX;
    const actualWindY = apparentWindY + boatVektorY;

    // Berechnung der tatsächlichen Windgeschwindigkeit
    const actualWindSpeed = Math.sqrt(actualWindX ** 2 + actualWindY ** 2);

    // Berechnung der tatsächlichen Windrichtung in Grad
    let actualWindAngle = Math.atan2(actualWindY, actualWindX) * (180 / Math.PI);
    if (actualWindAngle < 0) {
        actualWindAngle += 360;
    }

    // Ergebnis anzeigen
    const resultDiv = document.getElementById('result');
    resultDiv.style.display = 'block';
    resultDiv.innerHTML = `
        <h2>Risultati</h2>
        <p>Velocità reale del vento: <strong>${actualWindSpeed.toFixed(2)} nodi</strong></p>
        <p>Direzione reale del vento: <strong>${actualWindAngle.toFixed(2)}°</strong></p>
    `;
});
