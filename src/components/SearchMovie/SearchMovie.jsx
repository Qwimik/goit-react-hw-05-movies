export default function SearchMovie({ title, onChange, onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        name="title"
        autoComplete="off"
        value={title}
        onChange={onChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
