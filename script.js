// Sample client data
const clients = [
    { nombre: 'Juan', apellidos: 'Pérez', telefono: '1234567890', evento: 'Boda' },
    { nombre: 'María', apellidos: 'Gómez', telefono: '0987654321', evento: 'Cumpleaños' },
    { nombre: 'Carlos', apellidos: 'López', telefono: '5555555555', evento: 'Conferencia' },
    { nombre: 'Ana', apellidos: 'Ramírez', telefono: '6543210987', evento: 'Graduación' },
];

// Function to render the client table
function renderClients(clients) {
    const tableBody = document.getElementById('clientsTable');
    tableBody.innerHTML = ''; // Clear previous content

    clients.forEach(client => {
        const row = document.createElement('tr');
        row.classList.add('border-b');
        row.innerHTML = `
            <td class="p-2">${client.nombre}</td>
            <td class="p-2">${client.apellidos}</td>
            <td class="p-2">${client.telefono}</td>
            <td class="p-2">${client.evento}</td>
        `;
        tableBody.appendChild(row);
    });
}

// Initial table rendering
renderClients(clients);

// Search functionality
document.getElementById('search').addEventListener('input', (event) => {
    const query = event.target.value.toLowerCase();
    const filteredClients = clients.filter(client => 
        client.nombre.toLowerCase().includes(query) ||
        client.apellidos.toLowerCase().includes(query) ||
        client.telefono.includes(query) ||
        client.evento.toLowerCase().includes(query)
    );
    renderClients(filteredClients);
});

