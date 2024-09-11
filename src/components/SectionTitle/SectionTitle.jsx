const SectionTitle = ({heading, description}) => {
    return (
        <div className="mx-auto text-center md:w-4/12 my-8">
            <h3 className="text-base md:text-lg font-semibold py-4 font-nunitoSans">{heading}</h3>
            <p className="font-roboto">{description}</p>
        </div>
    );
};

export default SectionTitle;