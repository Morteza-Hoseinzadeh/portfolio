export const nav_style = (theme) => ({
  position: 'sticky',
  top: 10,
  zIndex: 100,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  p: '20px 32px',
  m: 2,
  background: 'rgba(255, 255, 255, 0)',
  borderRadius: '45px',
  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
  backdropFilter: 'blur(8.9px)',
});

export const links_style = (theme) => ({
  display: 'flex',
  alignItems: 'center',
  a: {
    mx: 2.5,
    cursor: 'pointer',
    textDecoration: 'none',
    fontWeight: '500',
    fontSize: '20px',
    display: 'inline-block',
    position: 'relative',
    '::after': {
      content: '""',
      position: 'absolute',
      width: '100%',
      transform: 'scaleX(0)',
      borderRadius: '5px',
      height: '0.07em',
      bottom: -4,
      left: 0,
      background: 'currentColor',
      transformOrigin: 'bottom right',
      transition: 'transform 0.25s ease-out',
    },
    '&:hover::after': {
      transform: 'scaleX(1)',
      transformOrigin: 'bottom left',
    },
  },
});

export const icon_style = (theme, darkModeColorControl) => ({
  display: 'flex',
  gap: 3,
  svg: {
    cursor: 'pointer',
    color: darkModeColorControl,
  },
});

export const humberger_menu = (theme) => ({
  position: 'sticky',
  top: 10,
  zIndex: 100,
  m: 3,
  p: '12px 20px',
  background: 'rgba(255, 255, 255, 0)',
  borderRadius: '45px',
  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
  backdropFilter: 'blur(8.9px)',
});

export const justify_items = (align) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: align,
});

export const drawer_section = (theme) => ({
  '.MuiDrawer-paper': { backgroundColor: theme.palette.primary.dark },
});
