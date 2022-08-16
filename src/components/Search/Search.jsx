import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import "./search.css";

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    fontSize: "14px",
    transition: theme.transitions.create("width"),
}));

export default function SearchField({ bgColor, color, sx }) {
    let [active, setActive] = useState(false);
    return (
        <button
            onClick={() => {
                setActive(true);
            }}
            className="div"
            style={{ backgroundColor: bgColor, color }}
        >
            <SearchIcon style={{ color, margin: "0px 5px" }} />
            <StyledInputBase
                className="search-input"
                style={{ color, width: active ? "22ch" : "0ch" }}
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
            />
        </button>
    );
}
