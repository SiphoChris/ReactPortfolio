import data from '../data/index.json';

const Contact = () => {
  const { contact } = data.result;
  const { form, location } = contact;
  return (
    <section id="CONTACT" className="contact-section py-24 bg-gray-200">
      <h2 className="text-center text-3xl font-bold mb-16 text-dark-text-color">
        Let&apos;s get in touch
      </h2>
      <div className="form-container flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16">
        <div className="map-container w-80 h-80 border">
          <iframe
            src={location.mapUrl}
            width="100%"
            height="100%"
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Map"
          ></iframe>
        </div>
        <form action={form.endpoint} method={form.method} className="w-80 flex flex-col gap-4">
          {form.fields.map((field, index) => {
            if (field.type === 'textarea') {
              return (
                <textarea
                  key={index}
                  name={field.name}
                  id={field.name}
                  placeholder={field.placeholder}
                  className="p-2 border rounded h-30 resize-none"
                  required
                />
              );
            }
            return (
              <input
                key={index}
                type={field.type}
                name={field.name}
                id={field.name}
                placeholder={field.placeholder}
                className="p-2 border rounded"
                required
              />
            );
          })}
          <button type="submit" className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 transition-colors">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
