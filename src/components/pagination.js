import Pagination from '@mui/material/Pagination';
export const PaginationMovies = ({setPage, data})=> {
  return(
    <Pagination
    onClick={(evt=>{setPage(evt.target.innerText)})}
      count={data.total_pages}
      color='primary'
       shape="rounded"
      // renderItem={(item) => (
      //   <PaginationItem {...item}/>
      // )}
    />
  )
}