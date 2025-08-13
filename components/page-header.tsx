import Image from "next/image";

interface PageHeaderProps {
  title: string;
  description: string;
  backgroundImage: string;
}

const PageHeader = ({ title, description, backgroundImage }: PageHeaderProps) => {
  return (
    <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt={title}
          fill
          priority
          style={{ objectFit: "cover" }}
          className="brightness-[0.7]"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">{title}</h1>
          <p className="text-lg md:text-xl text-gray-100">{description}</p>
        </div>
      </div>
    </section>
  );
};

export default PageHeader;