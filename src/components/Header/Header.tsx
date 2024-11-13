import { Box, Group } from "@mantine/core";
import classes from "./Header.module.css";

function Header() {
  return (
    <Box pb={20} className={classes.top}>
      <header className={classes.header}>
        <Group justify="space-between" h="100%">
          <img src="/logo.png" alt="logo" className={classes.logo} />
        </Group>
      </header>
    </Box>
  );
}

export default Header;
