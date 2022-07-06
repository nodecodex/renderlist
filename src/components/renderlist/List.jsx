import {
  Box,
  TableContainer,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  IconButton,
  Tooltip,
} from "@mui/material/";
import { orange } from "@mui/material/colors";
import CallSplitIcon from "@mui/icons-material/CallSplit";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import axios from "axios";
import { useState, useEffect } from "react";

const List = () => {
  const [renderList, setRenderList] = useState([]);
  useEffect(() => {
    async function stuData() {
      try {
        const getReactRepositories = await axios.get(
          "http://localhost:3000/renderlist"
        );
        setRenderList(getReactRepositories.data);
      } catch (err) {
        console.log(err);
      }
    }
    stuData();
  }, []);

  return (
    <>
      <Box
        textAlign={"center"}
        p={2}
        sx={{ backgroundColor: orange[400], color: "white" }}
      ></Box>
      <TableContainer component={"paper"}>
        <Table>
          <TableHead>
            <TableRow style={{ backgroundColor: "#616161" }}>
              {/* #1 */}
              <TableCell
                align="center"
                style={{
                  backgroundColor: "#858585",
                  color: "white",
                  fontWeight: "bold",
                  fontSize: 16,
                }}
              >
                No.
              </TableCell>
              {/* #2 */}
              <TableCell
                align="center"
                style={{
                  backgroundColor: "#858585",
                  color: "white",
                  fontWeight: "bold",
                  fontSize: 16,
                }}
              >
                Name
              </TableCell>
              {/* #3 */}
              <TableCell
                align="center"
                style={{
                  backgroundColor: "#858585",
                  color: "white",
                  fontWeight: "bold",
                  fontSize: 16,
                }}
              >
                Stars
              </TableCell>
              {/* #4 */}
              <TableCell
                align="center"
                style={{
                  backgroundColor: "#858585",
                  color: "white",
                  fontWeight: "bold",
                  fontSize: 16,
                }}
              >
                Forks
              </TableCell>

              {/* #5 */}
              <TableCell
                align="center"
                style={{
                  backgroundColor: "#858585",
                  color: "white",
                  fontWeight: "bold",
                  fontSize: 16,
                }}
              >
                Url
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {renderList.map((renderlist, i) => {
              const { name, stars, forks, url } = renderlist;
              return (
                <TableRow key={i}>
                  <TableCell align="center">{i + 1}</TableCell>
                  <TableCell align="center">{name}</TableCell>

                  <TableCell align="center">
                    {/* star icon */}
                    <Tooltip title="stars">
                      <IconButton>
                        <StarBorderIcon />
                      </IconButton>
                    </Tooltip>
                    {stars}
                  </TableCell>

                  <TableCell align="center">
                    {/* fork */}
                    <Tooltip title="forks">
                      <IconButton>
                        <CallSplitIcon color="primary" />
                      </IconButton>
                    </Tooltip>
                    {forks}
                  </TableCell>

                  <TableCell align="center">{url}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default List;
