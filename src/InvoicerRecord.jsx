import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { Typography } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";

const InvoiceRecord = (props) => {
  const [field, setfield] = useState(props.fieldName);
  const [data, setData] = useState(props.fieldData);
  const [editMode, setEditMode] = useState(false);
  const [editedData, setEditedData] = useState("");
  const [editedfield, setEditedfield] = useState("");

  const handleEditClick = () => {
    setEditMode(true);
    setEditedData(data);
    setEditedfield(field);
  };

  const handleSaveClick = () => {
    setData(editedData);
    setfield(editedfield);
    setEditMode(false);
  };

  const handleCancelClick = () => {
    setEditMode(false);
  };

  // const handleChange = (e) => {
  //   setEditedData(e.target.textContent);
  //   setEditedfield(e.target.textContent);
  // };

  const handleChange = (e) => {
    const content = e.target.textContent;
    if (e.target === document.activeElement) {
      // This is to handle contentEditable focus behavior
      if (field !== editedfield) setEditedfield(content);
      if (data !== editedData) setEditedData(content);
    }
  };

  const CustomFontsize = {
    xl: 16,
    lg: 15,
    md: 12,
    sm: 10,
    xs: 10,
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          sx={{
            background: editMode ? "rgba(159, 119, 235, 0.20)" : null,
            padding: { xl: 1, md: 0.5 },
            borderRadius: "5px",
          }}
        >
          <Grid
            item
            xs={1}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {editMode ? (
              <CheckIcon />
            ) : (
              <FiberManualRecordIcon
                sx={{
                  color: "#868686",
                  width: { md: "10px" },
                  height: { md: "10px" },
                }}
              />
            )}
          </Grid>
          <Grid
            item
            xs={4}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            {editMode ? (
              <Typography
                contentEditable
                value={editedfield}
                onBlur={handleSaveClick}
                onChange={handleChange}
                sx={{
                  border: "none",
                  outline: "none",
                  cursor: "pointer",
                  fontFamily: "Heebo",
                  fontWeight: 500,
                  fontSize:CustomFontsize
                }}
              >
                {editedfield}
              </Typography>
            ) : (
              <Typography
                onClick={handleEditClick}
                sx={{ cursor: "pointer", fontFamily: "Heebo", fontWeight: 500, fontSize:CustomFontsize }}
              >
                {field}
              </Typography>
            )}
          </Grid>
          <Grid
            item
            xs={5}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            {/* Render additional data for the second column */}
            {editMode ? (
              <Typography
                contentEditable
                value={editedData}
                onBlur={handleSaveClick}
                onChange={handleChange}
                sx={{
                  border: "none",
                  outline: "none",
                  cursor: "pointer",
                  fontFamily: "Heebo",
                  fontWeight: 400,
                  fontSize:CustomFontsize
                }}
              >
                {editedData}
              </Typography>
            ) : (
              <Typography
                onClick={handleEditClick}
                sx={{
                  cursor: "pointer",
                  color: "#868686",
                  fontFamily: "Heebo",
                  fontWeight: 400,
                  fontSize:CustomFontsize
                }}
              >
                {data}
              </Typography>
            )}
          </Grid>
          <Grid item xs={1}>
            {/* Render Icons only in editMode */}
            {editMode && (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "center",
                }}
              >
                <Box>
                  <CheckIcon
                    onClick={handleSaveClick}
                    sx={{ cursor: "pointer" }}
                  />
                </Box>
                <Box>
                  <CloseIcon
                    onClick={handleCancelClick}
                    sx={{ cursor: "pointer" }}
                  />
                </Box>
              </Box>
            )}
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default InvoiceRecord;
