import React, { useState } from "react";
import { Collapse, IconButton } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

const ExpandablePanel = ({ children, onOpen }) => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
    if (onOpen) {
      onOpen();
    }
  };

  return (
    <>
      <IconButton size="small" onClick={handleToggle}>
        {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </IconButton>
      <Collapse in={open}>{children}</Collapse>
    </>
  );
};

export default ExpandablePanel;
