import ArticleIcon from '@mui/icons-material/Article';
const DrawerMenu = [
  {
    title: "Inicio",
    path: "/",
  },
  {
    title: "Pages",
    children: [
      {
        title: "Lista de Institutos",
        path: "/institutes-list",
        icon: <ArticleIcon sx={{
          color: "white"
        }}/>,
      }
    ],
  },
];
export default DrawerMenu;
