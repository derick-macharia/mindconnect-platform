import { Link } from "react-router-dom";

const NotFound = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-background text-center px-4">
    <h1 className="text-5xl font-bold text-teal mb-4">404</h1>
    <p className="text-lg text-muted-foreground mb-6">Oops! The page you're looking for doesn't exist.</p>
    <Link to="/" className="text-teal font-semibold hover:underline">Go back home</Link>
  </div>
);

export default NotFound;