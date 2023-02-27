import Logo from "@/components/ui/logo/logo";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/3 flex flex-col mb-4 lg:mb-0">
            <Logo />
            <div className="flex flex-row gap-4">

            </div>
          </div>
          <div className="w-full lg:w-1/3 mb-4 lg:mb-0 flex flex-row justify-center gap-6 pointer">
            <h3 className="text-lg font-medium text-gray-100 mb-4">Home</h3>
            <h3 className="text-lg font-medium text-gray-100 mb-4">About</h3>
            <h3 className="text-lg font-medium text-gray-100 mb-4">Contact</h3>
          </div>
          <div className="w-full flex flex-col justify-center lg:w-1/3 mb-4 lg:mb-0">
            <button className="w-36 bg-gray-800 text-gray-100 py-2 px-4 rounded hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 self-center">
              Request Info
            </button>
            <div className="text-gray-400 mt-4 self-center">&copy; 2023 Easybank</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
