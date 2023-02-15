import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Icon,
  Menu,
  MenuButton,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
  Select,
  Text,
} from "@chakra-ui/react";
import React from "react";
import {
  MdNavigateNext,
  MdOutlineNavigateBefore,
  MdOutlineSkipNext,
} from "react-icons/md";
import { RiSkipBackMiniLine } from "react-icons/ri";

function Pagination({ totalPages, paginaAtual, setOffset, setLinesPerPage }) {
  const paginacao = [];
  const pages = totalPages;
  const nextPage = paginaAtual + 1;
  const backPage = paginaAtual - 1;

  for (let index = 0; index < totalPages; index++) {
    paginacao[index] = index;
  }
  function onPageChange(page) {
    setOffset(page - 1);
  }

  function onLinesPerPageChange(lines) {
    setLinesPerPage(lines.target.value);
  }

  return (
    <Box display="flex">
      <Box mr="20px">
        <Select
          w="120px"
          variant="filled"
          bg="#FFF"
          onChange={(e) => onLinesPerPageChange(e)}
        >
          <option value={5}>5 Itens</option>
          <option selected value={10}>
            10 Itens
          </option>
          <option value={15}>15 Itens</option>
          <option value={20}>20 Itens</option>
        </Select>
      </Box>
      <Button
        w="30px"
        bg="#FFF"
        onClick={() => onPageChange(paginaAtual)}
        disabled={paginaAtual === 0}
      >
        <Icon
          as={MdOutlineNavigateBefore}
          w="25px"
          h="25px"
          display="center"
          alignItems="center"
          justifyContent="center"
        />
      </Button>

      {Array.from(paginacao).map((_, p) => (
        <Button
          bg="#FFF"
          onClick={() => onPageChange(p + 1)}
          variant={p === paginaAtual ? "outline" : "solid"}
          color={p === paginaAtual ? "#317A7D" : "#C0C0C0"}
        >
          {p + 1}
        </Button>
      ))}

      <Button
        w="30px"
        bg="#FFF"
        onClick={() => onPageChange(paginaAtual + 2)}
        disabled={totalPages - 1 === paginaAtual}
      >
        <Icon
          as={MdNavigateNext}
          w="25px"
          h="25px"
          display="center"
          alignItems="center"
          justifyContent="center"
        />
      </Button>
    </Box>
  );
}

export default Pagination;
