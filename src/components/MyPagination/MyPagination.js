import Pagination from "@mui/material/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { pageActions } from "../../store/PageSlice";

const MyPagination = (props) => {
  const page = useSelector((state) => state.page.pageNumber);
  const dispatch = useDispatch();
  const handleChange = (event, value, name) => {
    if (props.name === "user") {
      dispatch(pageActions.setPage({ value: value, page: 8 }));
    } else if (props.name === "product") {
      dispatch(pageActions.setPage({ value: value, page: 10 }));
    }
  };

  return (
    <div>
      <Pagination
        count={props.count}
        onChange={handleChange}
        page={page}
        variant="outlined"
        shape="rounded"
      />
    </div>
  );
};

export default MyPagination;
