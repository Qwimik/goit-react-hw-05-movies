import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div>
      <Link to="/">back</Link>
      <p>-----Error 404-----</p>
    </div>
  );
}
