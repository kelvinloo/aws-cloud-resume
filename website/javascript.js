fetch('https://www.kelvinloo.com/prod/count').then(response => response.json()).then((data) => {document.getElementById('views').innerText = 'Views: ' + data})