import React, { useState } from "react";
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

  // const CustomFontsize = {
  //   xl: 16,
  //   lg: 15,
  //   md: 12,
  //   sm: 10,
  //   xs: 10,
  // };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          sx={{
            background: editMode ? "rgba(159, 119, 235, 0.20)" : null,
            padding: { xl: 1, lg:0.7, md: 0.5, sm:0.3, xs:0.2 },
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
            
            { editMode ? ( <CheckIcon
                sx={{
                  color:"#9F77EB",
                  width: {
                    xl: "21px",
                    lg: "19px",
                    md: "17px",
                    sm: "16px",
                    xs: "15px",
                  },
                  height: {
                    xl: "21px",
                    lg: "19px",
                    md: "17px",
                    sm: "16px",
                    xs: "15px",
                  },
                }}
              />): isEdited ? ( <CheckIcon
                sx={{
                  color: isEdited ? "#9F77EB" : "#868686",
                  width: {
                    xl: "21px",
                    lg: "19px",
                    md: "17px",
                    sm: "16px",
                    xs: "15px",
                  },
                  height: {
                    xl: "21px",
                    lg: "19px",
                    md: "17px",
                    sm: "16px",
                    xs: "15px",
                  },
                }}
              />):(<FiberManualRecordIcon
                sx={{
                  color: "#868686",
                  width: {
                    xl: "10px",
                    lg: "9px",
                    md: "8px",
                    sm: "7px",
                    xs: "6px",
                  },
                  height: {
                    xl: "10px",
                    lg: "9px",
                    md: "8px",
                    sm: "7px",
                    xs: "6px",
                  },
                }}
              /> )}
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
              variant="body1"
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
                  // fontSize: CustomFontsize,
                }}
              >
                {editedfield}
              </Typography>
            ) : (
              <Typography
              variant="body1"
                onClick={handleEditClick}
                sx={{
                  cursor: "pointer",
                  fontFamily: "Heebo",
                  fontWeight: 500,
                  // fontSize: CustomFontsize,
                }}
              >
                {field}
              </Typography>
            )}
          </Grid>
          <Grid
            item
            xs={5.5}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            {/* Render additional data for the second column */}
            {editMode ? (
              <Typography
              variant="body1"
                contentEditable
                value={editedData}
                onBlur={handleSaveClick}
                onChange={handleChange}
                sx={{
                  color:"#9F77EB",
                  border: "none",
                  outline: "none",
                  cursor: "pointer",
                  fontFamily: "Heebo",
                  fontWeight: 400,
                  // fontSize: CustomFontsize,
                }}
              >
                {editedData}
              </Typography>
            ) : (
              <Typography
              variant="body1"
                onClick={handleEditClick}
                sx={{
                  cursor: "pointer",
                  color: isEdited ? "#9F77EB" : "#868686",
                  fontFamily: "Heebo",
                  fontWeight: 400,
                  // fontSize: CustomFontsize,
                }}
              >
                {data}
              </Typography>
            )}
          </Grid>
          <Grid item xs={0.5}>
            {/* Render Icons only in editMode */}
            {editMode && (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
              >
                <Box>
                  <CheckIcon
                    onClick={handleSaveClick}
                    sx={{
                      cursor: "pointer",
                      width: {
                        xl: "22px",
                        lg: "20px",
                        md: "18px",
                        sm: "17px",
                        xs: "16px",
                      },
                      height: {
                        xl: "22px",
                        lg: "20px",
                        md: "18px",
                        sm: "17px",
                        xs: "16px",
                      },
                    }}
                  />
                </Box>
                <Box>
                  <CloseIcon
                    onClick={handleCancelClick}
                    sx={{
                      cursor: "pointer",
                      width: {
                        xl: "22px",
                        lg: "20px",
                        md: "18px",
                        sm: "17px",
                        xs: "16px",
                      },
                      height: {
                        xl: "22px",
                        lg: "20px",
                        md: "18px",
                        sm: "17px",
                        xs: "16px",
                      },
                    }}
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
