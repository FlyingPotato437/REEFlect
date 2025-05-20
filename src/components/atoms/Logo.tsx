import Image from 'next/image';

const Logo = () => (
  <div className="flex items-center">
    <Image
      src="/important.png" // Replace with your image path
      width={64} // Adjust the width as needed
      height={64} // Adjust the height as needed
      alt="Logo Image" // Provide an appropriate alt text
      className="mr-2" // Add margin to the right to space it from the text
    />
    <span className="ml-2 self-center whitespace-nowrap text-2xl font-bold text-gray-900 dark:text-white md:text-xl">
      REEFlect
    </span>
  </div>
);

export default Logo;
