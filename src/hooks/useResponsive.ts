import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { findLast } from 'ramda';

type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

type ResponsiveValues<P> = {
  [key in Breakpoint]?: P
}

const useResponsive = () => {
  const theme = useTheme();

  const matches = {
    xs: useMediaQuery(theme.breakpoints.up('xs')),
    sm: useMediaQuery(theme.breakpoints.up('sm')),
    md: useMediaQuery(theme.breakpoints.up('md')),
    lg: useMediaQuery(theme.breakpoints.up('lg')),
    xl: useMediaQuery(theme.breakpoints.up('xl')),
  };

  return function fetchByMediaQuery<P>(responsiveValues: ResponsiveValues<P>) {
    const match = findLast(
      (breakpoint: Breakpoint) => matches[breakpoint] && responsiveValues[breakpoint] != null,
      theme.breakpoints.keys,
    );

    return match && responsiveValues[match];
  };
};

export default useResponsive;
