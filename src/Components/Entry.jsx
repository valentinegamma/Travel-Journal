export default function Entry(props) {
  return(
    <section>
      <article className="entry-article">
        <img src={props.mainImage} 
        alt={props.alt} className="entry-img"/>
        <div className="entry-data">
          <div className="fill-flex">
            <img src="/src/assets/Fill 219.svg" alt="fill" width="7px" height="9.55px"/>
            <p>
              {props.country} <span>view on google maps</span>
            </p>
          </div>
          <h1>{props.location}</h1>
          <p className="entry-date">{props.date}</p>
          <p>{props.description}</p>
        </div>
      </article>
      <hr />
    </section>
  )
}