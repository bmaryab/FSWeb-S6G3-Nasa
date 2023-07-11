const NasaInfo = (props) => {
    const { nasaData, date } = props;

    return (
        <div>
            <img src={nasaData?.hdurl} alt="Photo of the day" width={500} height={500}/>
            <div className="date">{nasaData?.date}</div>
            <h2>{nasaData?.title}</h2>
            <p className="explanation">{nasaData?.explanation}</p>
        </div>
    )
};

export default NasaInfo;