import CloudSyncIcon from "@mui/icons-material/CloudSync";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
const DrawerMenu = [
  {
    title: "Inicio",
    path: "/",
  },
  {
    title: "Pages",
    children: [
      {
        title: "Todo",
        path: "/todo",
        icon: <AutoStoriesIcon sx={{
          color: "white"
        }} />,
      },
      {
        title: "FetchList",
        path: "/fetch-list",
        icon: <CloudSyncIcon sx={{
          color: "white"
        }}/>,
      },
      {
        title: "Lista de Institutos",
        path: "/institutes-list",
        icon: <CloudSyncIcon sx={{
          color: "white"
        }}/>,
      }
    ],
  },
];
export default DrawerMenu;
