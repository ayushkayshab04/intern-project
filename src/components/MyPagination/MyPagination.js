import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useDispatch, useSelector } from "react-redux";
import { pageActions } from "../store/PageSlice";

const MyPagination = (props) => {
  const page = useSelector((state) => state.page.pageNumber);
  const dispatch = useDispatch();
  const handleChange = (event, value) => {
    dispatch(pageActions.setPage(value));
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
