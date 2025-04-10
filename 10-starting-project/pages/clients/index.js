import Link from "next/link";

export default function ClientsPage() {

  const clients = [
    { id: "max", name: "Max" },
    { id: "emma", name: "Emma" },
  ];

  return (
    <div>
      <h1>Clients page</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link href={`/clients/${client.id}`}>{client.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
