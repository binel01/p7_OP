function Banner(props) {
  return (
    <div className="Accueil">
      <div
        className="banner"
        style={{ backgroundImage: `url(${props.BannerImg})` }}
      >
        <div className="mask"></div>
        <h1 className="textBanner">{props.textBanner}</h1>
      </div>
      {props.children}
    </div>
  );
}

export default Banner;
