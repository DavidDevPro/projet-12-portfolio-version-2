const ProjetContent = ({ projet }) => {
  // Accepte le projet en tant que prop
  return (
    <div className="page__content">
      <h3>{projet.description}</h3>
      {console.log(projet.description)}
      <div className="page__content__description">
        <div className="page__content__description__container">
          <img
            src={projet.pictures[0].picture1}
            alt={`image 1 du ${projet.title}`}
          />
          <div className="page__content__description__container__text">
            <h4>{projet.pictures[0].title1}</h4>
            <p>{projet.pictures[0].text1}</p>
          </div>
        </div>
      </div>
      <div className="page__content__description">
        <div className="page__content__description__container">
          <img
            src={projet.pictures[1].picture2}
            alt={`image 2 du ${projet.title}`}
          />
          <div className="page__content__description__container__text">
            <h4>{projet.pictures[1].title2}</h4>
            <p>{projet.pictures[1].text2}</p>
          </div>
        </div>
      </div>
      <div className="page__content__description">
        <div className="page__content__description__container">
          <img
            src={projet.pictures[2].picture3}
            alt={`image 3 du ${projet.title}`}
          />
          <div className="page__content__description__container__text">
            <h4>{projet.pictures[2].title3}</h4>
            <p>{projet.pictures[2].text3}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjetContent;
