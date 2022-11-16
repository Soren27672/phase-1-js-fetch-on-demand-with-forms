const init = () => {
    
    const form = document.querySelector('form');
    const returnTitle = document.getElementById('returnTitle');
    const returnSummary = document.getElementById('returnSummary');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        fetch(`http://localhost:3000/movies/${form.querySelector('input').value}`)
        .then(res => {
            if (res.ok) return res.json();
            else return {
                title: "Movie Not Found",
                summary: "",
            }
        })
        .then(json => {
        returnTitle.textContent = json.title;
        returnSummary.textContent = json.summary;
        });
        
        
})
}

document.addEventListener('DOMContentLoaded', init);