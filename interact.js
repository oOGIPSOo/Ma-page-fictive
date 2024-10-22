<script>
    document.querySelector('form').addEventListener('submit', function(event) {
        let category = document.getElementById('category').value;
        let description = document.getElementById('description').value;

        if (!category || !description) {
            alert('Veuillez remplir tous les champs avant de soumettre.');
            event.preventDefault();
        }
    });
</script>
