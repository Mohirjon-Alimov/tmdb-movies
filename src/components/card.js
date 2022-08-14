export let Card = ({img, title, date, vote, name})=> {
  return(
    <>
      <li  className="movieCard my-2">
        <img className='d-block border-2' width='181' height='276' src={`https://image.tmdb.org/t/p/w500${img}`} alt='img' />
        <div className='p-2'>
          {title && <h5>{title}</h5>}
          {name && <h5>{name}</h5>}
          {date && <p>release date {date}</p>}
          {vote && <p>vote {vote}</p>}
          
        </div>
      </li>
    </>
  )
}