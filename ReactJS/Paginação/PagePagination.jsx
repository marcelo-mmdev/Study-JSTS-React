import { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";

import Pagination from "../../../components/Pagination";

export function PagePagination() {
  const [offset, setOffset] = useState(0);
  const [linesPerPage, setLinesPerPage] = useState([]);
  const [apis, setApi] = useState("");
  
  useEffect(() => {
    ServicesApi.get(
      // `api/perfil?page=0&linesPerPage=20&orderBy=id&direction=ASC`,
      `api/perfil?page=${offset}&linesPerPage=${linesPerPage}&orderBy=id&direction=ASC`,
    )
      .then((response) => setApi(response.data))
      .catch((err) => {
        console.error(`Ops! Ocorreu um erro${err}`);
      });
  }, [offset, linesPerPage]);

  return (
  
    <Box
      display="flex"
      justifyContent="flex-end"
      alignItems="center"
      mt="40px"
    >
      {apis.totalElements && (
        <Pagination
          totalPages={apis.totalPages}
          paginaAtual={apis.pageable.pageNumber}
          setOffset={setOffset}
          setLinesPerPage={setLinesPerPage}
        />
      )}
    </Box>
         
  );
}
