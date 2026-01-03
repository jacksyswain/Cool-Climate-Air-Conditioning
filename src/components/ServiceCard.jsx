export default function ServiceCard({ title, desc, onOpen }) {
  return (
    <div className="card p-6 flex flex-col justify-between">
      <div>
        <h3 className="text-lg font-semibold text-sky-500 mb-2">
          {title}
        </h3>
        <p className="text-muted text-sm">{desc}</p>
      </div>

      <button
        onClick={onOpen}
        className="mt-4 text-sky-500 hover:text-sky-600 font-medium self-start"
      >
        Learn more +
      </button>
    </div>
  );
}
