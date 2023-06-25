function voltarParaIndex() {
    window.location.href = "index.html";
}


document.addEventListener("DOMContentLoaded", function() {
    // Obter informações da automação (exemplo de valores estáticos)
    const username = "Nome do Usuário";
    const totalComments = 50;
    const keywordComments = 20;
    const users = ["user1", "user2", "user3"];

    // Atualizar elementos no dashboard
    document.getElementById("username").textContent = username;
    document.getElementById("total-comments").textContent = totalComments;
    document.getElementById("keyword-comments").textContent = keywordComments;

    const usersTable = document.getElementById("users-table");
    for (let i = 0; i < users.length; i++) {
        const row = document.createElement("tr");
        const cell = document.createElement("td");
        cell.textContent = "@" + users[i];
        row.appendChild(cell);
        usersTable.appendChild(row);
    }
});

