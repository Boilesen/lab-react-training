const Gretings = ({ lang, children }) => {
  const traslation = (langChoice) => {
    let options = {
      de: 'hallo',
      fr: 'Bonjour',
      es: 'Hola',
      en: 'Hello',
      pt: 'Olá',
    };

    return options[langChoice] || '⚠️The language is unknown to me 🤔';
  };

  return (
    <div
      className="Gretings border my-2 p-1"
      style={{ maxWidth: '800px', margin: '0 auto' }}
    >
      <h3 className="fw-light">
        {traslation(lang)} {children}
      </h3>
    </div>
  );
};

export default Gretings;
