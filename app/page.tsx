import Link from "next/link";

export default function Home() {
  return (
    <div className="p-8 px-8 container mx-auto lg:px-24">
      <h1 className="text-4xl">Links to tasks:</h1>
      <p>Internship assessment tasks as per Vrit Technologies requirements.</p>
      <Link href="/task-1" className="text-primary text-xl hover:underline">
        Task 1
      </Link>
      <br />
      <Link href="/task-2" className="text-primary text-xl hover:underline">
        Task 2
      </Link>
    </div>
  );
}
