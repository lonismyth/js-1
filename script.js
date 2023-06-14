function calculateCircleProperties() {
    var radius = parseFloat(document.getElementById('radiusInput').value);
    var circumference = 2 * Math.PI * radius;
    var area = Math.PI * Math.pow(radius, 2);
    document.getElementById('circumferenceOutput').innerHTML = 'Длина окружности: ' + circumference.toFixed(2);
    document.getElementById('areaOutput').innerHTML = 'Площадь круга: ' + area.toFixed(2);
}
