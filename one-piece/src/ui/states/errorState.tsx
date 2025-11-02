export const ErrorState = ({ error }: { error: Error }) => (
  <div className="min-h-screen bg-oceanBlue-900 flex items-center justify-center">
    <div className="text-white text-center">
      <h2 className="text-2xl font-bold mb-2">Oops!</h2>
      <p>{error.message}</p>
    </div>
  </div>
);
