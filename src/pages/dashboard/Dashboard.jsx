import React from "react";
import { Paper, Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import CloudSyncIcon from "@mui/icons-material/CloudSync";
import { useSelector } from "react-redux";
import { appSelector } from "../redux/appRedux";
import CheckIcon from '@mui/icons-material/Check';
import PendingActionsIcon from '@mui/icons-material/PendingActions';

const Dashboard = () => {
  const todo = useSelector(appSelector.todo);
  const navigate = useNavigate();
  const getCompleted = () => {
    const completed = todo.filter((t) => t.completed === true);
    return completed.length;
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        mt: 10,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            color: "primary.main",
            fontWeight: "bold",
          }}
        >
          {" "}
          Dashboard
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "centers",
            width: "100%",
            gap: 10,
            mt: 10,
          }}
        >
          <Paper
            onClick={() => navigate("./todo")}
            sx={{
              display: "flex",
              flexDirection: "column",
              width: " 100%",
              gap: 2,
              cursor: "pointer",
              transition: "0.2s",
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 2,
                marginTop: "40px",
              }}
            >
              <AutoStoriesIcon
                sx={{
                  fontSize: 50,
                }}
              />
              <Typography
                sx={{ marginTop: "5px", fontSize: "40px" }}
                variant="h4"
              >
                Todo
              </Typography>
            </Box>
            <Box className="boxDashboard"
             
            >
              <Box className="tareasCompletadas"
              >
                <Typography variant="h4" sx={{ textAlign: "center" }}>
                  TAREAS{" "}
                </Typography>
                <Typography
                  variant="h4"
                  sx={{ textAlign: "center", marginTop: "-30px" }}
                >
                  COMPLETADAS
                </Typography>
                <CheckIcon sx={{fontSize:'40px',marginTop:'-30px',marginBottom:'-20px'}}/>
                <Typography variant="h4">
                  {` ${getCompleted()} / ${todo.length} `}
                </Typography>
              </Box>
              <Box className="tareasCompletadas"
              >
                <Typography variant="h4" sx={{ textAlign: "center" }}>
                  TAREAS{" "}
                </Typography>
                <Typography
                  variant="h4"
                  sx={{ textAlign: "center", marginTop: "-30px" }}
                >
                  {" "}
                  PENDIENTES
                </Typography>
                <PendingActionsIcon sx={{fontSize:'40px',marginTop:'-30px',marginBottom:'-20px'}}/>
                <Typography variant="h4">
                  {` ${todo.length - getCompleted()} / ${todo.length} `}
                </Typography>
              </Box>
            </Box>
          </Paper>

          <Paper
            onClick={() => navigate("./fetch-list")}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: 200,
              gap: 2,
              width: "100%",
              cursor: "pointer",
              transition: "0.2s",
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          >
            <CloudSyncIcon
              sx={{
                fontSize: 50,
              }}
            />
            <Typography variant="h4" sx={{ fontSize: "40px" }}>
              Fetchlist
            </Typography>
          </Paper>
{/* }}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}} */}
          <Paper
            onClick={() => navigate("./institutes-list")}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: 200,
              gap: 2,
              width: "100%",
              cursor: "pointer",
              transition: "0.2s",
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          >
            <CloudSyncIcon
              sx={{
                fontSize: 50,
              }}
            />
            <Typography variant="h4" sx={{ fontSize: "40px" }}>
              INSTITUTOS DE APOYO DE MEDICINA
            </Typography>
          </Paper>


        </Box>
      </Box>
    </Box>
  );
};
export default Dashboard;
