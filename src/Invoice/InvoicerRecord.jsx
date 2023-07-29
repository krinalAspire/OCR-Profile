import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { Typography } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import { Root } from "./Style";
import { classes } from "./Style";

const InvoiceRecord = (props) => {
  const [field, setfield] = useState(props.fieldName);
  const [data, setData] = useState(props.fieldData);
  const [editMode, setEditMode] = useState(false);
  const [editedData, setEditedData] = useState("");
  const [editedfield, setEditedfield] = useState("");
  const [isEdited, setIsEdited] = useState(false);

  const handleEditClick = () => {
    setEditMode(true);
    setEditedData(data);
    setEditedfield(field);
    setIsEdited(false);
  };

  const handleSaveClick = () => {
    setData(editedData);
    setfield(editedfield);
    setEditMode(false);
    setIsEdited(true);
  };

  const handleCancelClick = () => {
    setEditMode(false);
  };

  const handleChange = (e) => {
    const content = e.target.textContent;
    if (e.target === document.activeElement) {
      // This is to handle contentEditable focus behavior
      if (field !== editedfield) setEditedfield(content);
      if (data !== editedData) setEditedData(content);
    }
  };

  return (
    <>
      <Root sx={{ flexGrow: 1 }} className={classes.root}>
        <Grid
          container
          className={classes.GridContainer}
          sx={{
            background: editMode ? "rgba(159, 119, 235, 0.20)" : null,
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
              <CheckIcon
                className={classes.CheckedFieldIcon}
                sx={{
                  color: "#9F77EB",
                }}
              />
            ) : isEdited ? (
              <CheckIcon
                className={classes.CheckedFieldIcon}
                sx={{
                  color: "#9F77EB",
                }}
              />
            ) : (
              <FiberManualRecordIcon
                className={classes.FiberManualRecordIcon}
                sx={{
                  color: "#868686",
                }}
              />
            )}
          </Grid>
          <Grid item xs={4} className={classes.GridAlign}>
            {editMode ? (
              <Typography
                variant="body1"
                contentEditable
                value={editedfield}
                onBlur={handleSaveClick}
                onChange={handleChange}
                className={classes.contentEditableField}
              >
                {editedfield}
              </Typography>
            ) : (
              <Typography
                variant="body1"
                onClick={handleEditClick}
                className={classes.TypographyField}
              >
                {field}
              </Typography>
            )}
          </Grid>
          <Grid item xs={5.5} className={classes.GridAlign}>
            {/* Render additional data for the second column */}
            {editMode ? (
              <Typography
                variant="body1"
                contentEditable
                value={editedData}
                onBlur={handleSaveClick}
                onChange={handleChange}
                className={classes.contentEditableField}
                sx={{
                  color: "#9F77EB",
                  fontWeight: 400,
                }}
              >
                {editedData}
              </Typography>
            ) : (
              <Typography
                variant="body1"
                onClick={handleEditClick}
                className={classes.TypographyField}
                sx={{
                  // cursor: "pointer",
                  color: isEdited ? "#9F77EB" : "#868686",
                  // fontFamily: "Heebo",
                  fontWeight: 400,
                }}
              >
                {data}
              </Typography>
            )}
          </Grid>
          <Grid item xs={0.5}>
            {/* Render Icons only in editMode */}
            {editMode && (
              <Box className={classes.GridAlign}>
                <Box>
                  <CheckIcon
                    onClick={handleSaveClick}
                    className={classes.CheckCloseIcon}
                  />
                </Box>
                <Box>
                  <CloseIcon
                    onClick={handleCancelClick}
                    className={classes.CheckCloseIcon}
                  />
                </Box>
              </Box>
            )}
          </Grid>
        </Grid>
      </Root>
    </>
  );
};

export default InvoiceRecord;