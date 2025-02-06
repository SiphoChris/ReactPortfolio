
const Footer = () => {
  return (
    <footer className="bg-gray-800 py-6">
      <div className="container mx-auto text-center">
        <p className="text-gray-300 text-xs">&copy; {new Date().getFullYear()} &#124; All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
