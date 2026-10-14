const Title = ({ title, description }) => {
  return (
    <div className="text-center mt-6 text-ink-700">
      <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-emerald-900">{title}</h2>
      <p className="max-sm max-w-2xl mt-4 text-ink-500">{description}</p>
    </div>
  );
};

export default Title;
