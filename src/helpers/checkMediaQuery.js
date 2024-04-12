import { useMediaQuery } from '@mui/material';

function CheckMediaQuery() {
  const matchesMobile = useMediaQuery('(min-width:20rem)');
  const matchesTablet = useMediaQuery('(min-width:48rem)');
  const matchesDesktop = useMediaQuery('(min-width:64rem)');

  if (matchesDesktop) {
    return 'desktop';
  }
  if (matchesTablet) {
    return 'tablet';
  }
  if (matchesMobile) {
    return 'mobile';
  }
}

export { CheckMediaQuery };
